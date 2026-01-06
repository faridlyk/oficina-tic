import React from 'react';
import NavBar from './NavBar';

interface PublicLayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-mesh-gradient text-foreground flex flex-col items-center relative isolation-auto">
            {/* Animated Background Blobs and Image */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background backdrop-saturate-200">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.55] dark:opacity-[0.3] transition-opacity duration-1000"
                    style={{ backgroundImage: 'url(/arco_hd.avif)' }}
                />

                <div className="absolute top-[-25%] left-[-25%] w-[110%] h-[110%] bg-[#009B3A] rounded-full blur-[90px] animate-blob-v1 opacity-60"></div>
                <div className="absolute top-[0%] right-[-25%] w-[100%] h-[100%] bg-[#FFCD00] rounded-full blur-[90px] animate-blob-v2 opacity-50"></div>
                <div className="absolute bottom-[-25%] right-[0%] w-[115%] h-[115%] bg-[#CE1126] rounded-full blur-[90px] animate-blob-v3 opacity-40"></div>
                <div className="absolute bottom-[0%] left-[-15%] w-[105%] h-[105%] bg-[#FFFFFF] rounded-full blur-[90px] animate-blob-v1 [animation-delay:5s] opacity-55 dark:hidden"></div>
            </div>

            <div className="w-full max-w-7xl z-10 flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-1 mt-[60px] flex flex-col">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default PublicLayout;
