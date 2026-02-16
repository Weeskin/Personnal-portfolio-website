import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Cards} from "@/components/Cards";
import {Banner} from "@/components/Banner";

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
                    <Cards/>
                </section>

                <section id="contact" className="snap-section min-h-screen py-16 px-4 sm:px-8 lg:px-16 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                            Contact
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Section contact à venir...
                        </p>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
