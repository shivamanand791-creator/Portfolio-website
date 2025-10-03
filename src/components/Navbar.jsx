import { useEffect } from "react";
import { useTheme } from "./ThemeContext"; // <-- Added import

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { isDark } = useTheme(); // <-- Added hook

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg transition-colors duration-300 ${
            isDark
                ? "bg-[rgba(10,10,10,0.8)] border-white/10"
                : "bg-white/80 border-gray-300"
        }`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="#home"
                        className={`font-mono text-xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Shivam_Anand
                        <span className="text-blue-500">.Portfolio</span>
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {["home", "projects", "about", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`transition-colors ${
                                    isDark
                                        ? "text-gray-300 hover:text-white"
                                        : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};