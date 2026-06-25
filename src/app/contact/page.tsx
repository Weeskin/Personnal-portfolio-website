import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata = {
    title: "Contact - Pierre Sourice",
    description: "Une question ? Un projet ? Contactez Pierre Sourice via ce formulaire.",
};

export default function ContactPage() {
    return (
        <main className="bg-zinc-50 dark:bg-black">
            <section className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-16 sm:px-8 lg:px-16">
                <div className="w-full max-w-4xl">
                    <Reveal animation="up">
                        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                            Contactez-moi
                        </h1>
                        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
                            Une question ? Un projet ? N&apos;hésitez pas à me contacter via ce formulaire.
                        </p>
                    </Reveal>
                    <Reveal animation="up" delay={120}>
                        <ContactForm />
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
