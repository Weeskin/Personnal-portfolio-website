import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Carousel} from "@/components/Carousel";
import {Banner} from "@/components/Banner";
import {ContactForm} from "@/components/ContactForm";

export default function Home() {
    return (
        <div className="bg-zinc-50 dark:bg-black">
            <Header/>
            <Banner/>

            <main className="w-full">
                <section id="projects" className="snap-section min-h-screen py-12 sm:py-16 px-4 sm:px-8 lg:px-16 flex flex-col">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Mes Projets
                    </h2>
                    <Carousel/>
                </section>

                <section id="contact" className="snap-section min-h-screen py-16 px-4 sm:px-8 lg:px-16 flex items-center justify-center">
                    <div className="w-full max-w-4xl">
                        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                            Contactez-moi
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                            Une question ? Un projet ? N&apos;hésitez pas à me contacter via ce formulaire.
                        </p>
                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
