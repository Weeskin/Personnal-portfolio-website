'use client';

export function Header() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-16 px-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
            <h1 className="text-xl font-bold text-foreground">Pierre</h1>
            <nav>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-foreground/60 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
                        >
                            Présentation
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-foreground/60 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
                        >
                            Projets
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-foreground/60 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
                        >
                            Contact
                        </button>
                    </li>
                    <a
                        href="/assets/cv/CV-Pierre.pdf"
                        download="CV-Pierre.pdf"
                        className="rounded-2xl border border-gray-500 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-block"
                    >
                        Télécharger CV
                    </a>

                    <li>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.715-2.004 1.404-.103.249-.129.597-.129.946v5.455h-3.554s.047-8.842 0-9.769h3.554v1.381c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.613zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.955.77-1.704 1.963-1.704 1.192 0 1.915.749 1.929 1.704 0 .947-.737 1.704-1.977 1.704zm1.582 11.597H3.635V9.683h3.284v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-foreground transition-colors"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" />
                            </svg>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}