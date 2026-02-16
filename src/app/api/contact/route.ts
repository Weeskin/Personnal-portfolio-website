import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validation basique
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        // Envoi de l'email
        const data = await resend.emails.send({
            from: 'Portfolio Contact <contact@pierresourice.fr>', // Adresse par défaut de Resend
            to: [process.env.CONTACT_EMAIL || 'pierre.sourice38@gmail.com'],
            replyTo: email, // L'email de l'expéditeur pour pouvoir répondre
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                        Nouveau message depuis votre portfolio
                    </h2>
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;">
                            <strong>Nom:</strong> ${name}
                        </p>
                        <p style="margin: 10px 0;">
                            <strong>Email:</strong> ${email}
                        </p>
                        <p style="margin: 10px 0;">
                            <strong>Sujet:</strong> ${subject}
                        </p>
                    </div>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap; color: #555;">${message}</p>
                    </div>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                    <p style="color: #888; font-size: 12px;">
                        Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}

