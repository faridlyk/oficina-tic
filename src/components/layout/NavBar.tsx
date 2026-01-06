import React from 'react';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/theme-provider';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='fixed top-0 left-0 right-0 h-[60px] z-50 flex justify-center'>
            <div className='flex justify-between items-center px-4 h-full max-w-5xl w-full'>
                <div className="py-3 flex items-center gap-0">
                    <Button
                        size="sm"
                        variant="ghost"
                        className={`focus:bg-accent/40 hover:bg-accent/40 ${location.pathname === '/' ? 'font-bold' : ''}`}
                        onClick={() => navigate('/')}
                    >
                        <BrainCircuit />
                        <span className="hidden sm:inline">Oficina TIC</span>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className={`focus:bg-accent/40 hover:bg-accent/40 ${location.pathname === '/apps' ? 'font-semibold ' : ''}`}
                        onClick={() => navigate('/apps')}
                    >
                        Aplicaciones
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className={`focus:bg-accent/40 hover:bg-accent/40 ${location.pathname === '/docs' ? 'font-semibold ' : ''}`}
                    >
                        Documentación
                    </Button>
                </div>
                <div className='py-3 flex items-center gap-2'>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-full focus:bg-accent/40 hover:bg-accent/40"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span className="sr-only">Cambiar tema</span>
                    </Button>
                    <Button
                        size="sm"
                        className='rounded-full'
                        onClick={() => navigate('/acceder')}
                    >
                        Acceder
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
