import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Moon, Sun } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { useTheme } from '@/context/theme-provider';

const SECTIONS = ['inicio', 'aplicaciones'] as const;

const ISLAND = 'flex items-center gap-1 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.07] shadow-sm rounded-full p-1';
const BTN_HOVER = 'flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 transition-colors';

const SOCIAL_LINKS = [
    { href: 'https://www.facebook.com/people/Tic-Alcaldia-Puerto-Gaitan/61582212779082/', label: 'Facebook',  icon: <FaFacebook  className="h-4 w-4 text-[#1877F2]" /> },
] as const;

const NavBar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState<string>('inicio');

    useEffect(() => {
        const handleScroll = () => {
            let current = 'inicio';
            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 80) current = id;
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark =
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = useCallback(
        () => setTheme(isDark ? 'light' : 'dark'),
        [isDark, setTheme]
    );

    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
    const scrollToApps = useCallback(
        () => document.getElementById('aplicaciones')?.scrollIntoView({ behavior: 'smooth' }),
        []
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 [transform:translateZ(0)]">
            <div className="flex items-center justify-between h-[60px] px-4 max-w-5xl mx-auto">

                {/* Left island */}
                <div className={ISLAND}>
                    {([
                        { id: 'inicio',       label: 'Oficina TIC',  onClick: scrollToTop,  icon: true },
                        { id: 'aplicaciones', label: 'Aplicaciones', onClick: scrollToApps, icon: false },
                    ] as const).map((item) => (
                        <button
                            key={item.id}
                            onClick={item.onClick}
                            aria-label={item.label}
                            className="relative flex items-center gap-1.5 px-3 h-7 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer outline-none"
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="nav-active-pill"
                                    className="absolute inset-0 rounded-full bg-black/[0.07] dark:bg-white/[0.10]"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                                />
                            )}
                            {item.icon && (
                                <span className="relative z-10 hidden sm:inline-flex">
                                    <BrainCircuit className="h-4 w-4 shrink-0" />
                                </span>
                            )}
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
                <div className={ISLAND}>
                    {SOCIAL_LINKS.map(({ href, label, icon }) => (
                        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={BTN_HOVER}>
                            {icon}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-foreground/10 mx-0.5" aria-hidden />
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        className="rounded-full focus-visible:ring-0 focus-visible:bg-transparent hover:bg-black/[0.07] dark:hover:bg-white/[0.10] active:bg-black/10 dark:active:bg-white/10 transition-colors"
                    >
                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default React.memo(NavBar);
