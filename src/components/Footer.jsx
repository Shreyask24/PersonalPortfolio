import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative z-20 mt-12 border-t border-zinc-200 dark:border-zinc-700 bg-[linear-gradient(180deg,#000000,#18181b)]">
            <div className="max-w-[90rem] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo / Site Name */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl mb-4 sm:mb-0 font-bold text-neutral-800 dark:text-gray-100">
                        Shreyas Kallurkar (Shreyasdevx)<span className="text-[#915eff]">.</span>
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-gray-400">
                        Bringing ideas to life, one pixel at a time.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 text-neutral-500 dark:text-gray-400 text-2xl">
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors"
                        title="YouTube"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        title="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center py-4 border-t border-zinc-200 dark:border-zinc-700 text-sm text-neutral-500 dark:text-gray-400">
                © {new Date().getFullYear()} Shreyas Kallurkar (Shreyasdevx). All rights reserved.
            </div>
        </footer>
    );
}
