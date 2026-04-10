import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Moon, Sun } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTheme } from '@/context/theme-provider';

const NavBar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState<string>('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'aplicaciones'];
            let current = 'inicio';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= 80) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark =
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

    const island = 'flex items-center gap-1 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.07] shadow-sm rounded-full p-1';

    const navItems = [
        {
            id: 'inicio',
            label: 'Oficina TIC',
            icon: <BrainCircuit className="h-4 w-4 shrink-0" />,
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
        },
        {
            id: 'aplicaciones',
            label: 'Aplicaciones',
            icon: null,
            onClick: () => document.getElementById('aplicaciones')?.scrollIntoView({ behavior: 'smooth' }),
        },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 [transform:translateZ(0)]">
            <div className="flex items-center justify-between h-[60px] px-4 max-w-5xl mx-auto">
                {/* Left island */}
                <div className={island}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={item.onClick}
                            className="relative flex items-center gap-1.5 px-3 h-7 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer outline-none"
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="nav-active-pill"
                                    className="absolute inset-0 rounded-full bg-black/[0.07] dark:bg-white/[0.10]"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                                />
                            )}
                            {item.icon && <span className="relative z-10 hidden sm:inline-flex">{item.icon}</span>}
                            <span className={`relative z-10 ${item.id === 'inicio' ? 'hidden sm:inline' : ''}`}>
                                {item.label}
                            </span>
                            {item.id === 'inicio' && (
                                <span className="relative z-10 sm:hidden inline-flex">
                                    <BrainCircuit className="h-4 w-4" />
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Right island: socials + theme toggle */}
                <div className={island}>
                    <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 transition-colors">
                        <FaFacebook className="h-4 w-4 text-[#1877F2]" />
                    </a>
                    {/* <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 transition-colors">
                        <FaInstagram className="h-4 w-4 text-[#E1306C]" />
                    </a>
                    <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 transition-colors">
                        <FaYoutube className="h-4 w-4 text-[#FF0000]" />
                    </a> */}
                    <div className="w-px h-4 bg-foreground/10 mx-0.5" />
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={toggleTheme}
                        className="rounded-full focus-visible:ring-0 focus-visible:bg-transparent hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 dark:active:bg-white/10 transition-colors"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span className="sr-only">Cambiar tema</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
