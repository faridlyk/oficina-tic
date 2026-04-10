import React, { memo, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { ExternalLink, Ticket, BriefcaseBusiness, Wifi } from 'lucide-react';
import PublicLayout from '@/components/layout/PublicLayout';

const APPS = [
    {
        name: "Registro de Ingresos",
        abbreviation: "Registro de Ingresos",
        department: "Secretaría General",
        description: "Módulo de control para el registro y seguimiento de los ingresos en las dependencias municipales.",
        image: "/apps/regis.avif",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:83/",
    },
    {
        name: "Fondo de Educación Superior",
        abbreviation: "FES",
        department: "Secretaría de Educación",
        description: "Portal de gestión para beneficiarios y nuevos aspirantes al Fondo de Educación Superior de Puerto Gaitán.",
        image: "/apps/fes.avif",
        url: "http://fes.puertogaitan-meta.gov.co/",
    },
    {
        name: "Concepto Sanitario",
        abbreviation: "Concepto Sanitario",
        department: "Secretaría de Salud",
        description: "Solicita y consulta el estado de los conceptos sanitarios para establecimientos de comercio y servicios.",
        image: "/apps/concep.avif",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:81/",
    },
    {
        name: "Registro de Mascotas",
        abbreviation: "Mascotas",
        department: "Secretaría Ecológica y Ambiental",
        description: "Censo y registro oficial de mascotas para promover la tenencia responsable en el municipio.",
        image: "/apps/masco.avif",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:82/",
    },
    {
        name: "Planta de Beneficio Animal",
        abbreviation: "Beneficio Animal",
        department: "Secretaría de Agricultura",
        description: "Sistema de gestión y seguimiento para los procesos de la Planta de Beneficio Animal municipal.",
        image: "/apps/animal.avif",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:91/",
    },
] as const;

const QUICK_LINKS = [
    { label: 'Tickets de soporte', icon: <Ticket className="h-5 w-5" />, href: 'http://10.10.21.99/' },
    { label: 'DOC4US',    icon: <BriefcaseBusiness className="h-5 w-5" />, href: 'http://10.10.21.11/' },
] as const;

type App = typeof APPS[number];

const AppCard = memo(({ app, index }: { app: App; index: number }) => (
    <article className="group relative flex flex-col rounded-xl bg-white/90 dark:bg-zinc-900/90 transition-all duration-500 overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl">
        {/* macOS title bar */}
        <div className="h-9 flex items-center px-4 gap-1.5 bg-black/[0.03] dark:bg-white/[0.05] border-b border-black/[0.05] dark:border-white/[0.05]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" aria-hidden />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" aria-hidden />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" aria-hidden />
            <div className="ml-2 text-[10px] font-medium text-foreground/40 uppercase tracking-widest flex-1 text-center pr-10">
                {app.abbreviation}
            </div>
        </div>

        {/* Image */}
        <div
            className="relative h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center cursor-pointer"
            onClick={() => window.open(app.url, '_blank', 'noopener,noreferrer')}
        >
            {app.image ? (
                <img
                    src={app.image}
                    alt={app.name}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100 dark:brightness-90 dark:group-hover:brightness-100"
                />
            ) : (
                <div className="flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                    <span className="text-sm font-bold uppercase tracking-widest">Sin Imagen</span>
                </div>
            )}

            <div className="absolute inset-0 bg-black/40 sm:bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full h-11 w-11 sm:h-10 sm:w-10 shadow-xl backdrop-blur-xl bg-white/30 sm:bg-white/20 hover:bg-white/40 border-none text-white transition-all scale-100 sm:scale-90 sm:group-hover:scale-100"
                    aria-label={`Abrir ${app.name}`}
                    onClick={(e) => { e.stopPropagation(); window.open(app.url, '_blank', 'noopener,noreferrer'); }}
                >
                    <ExternalLink className="h-5 w-5" />
                </Button>
            </div>
        </div>

            {/* Content */}
            <div className="p-4 pt-3 flex flex-col flex-1">
                <div className="mb-2">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md">
                        {app.department}
                    </span>
                </div>
                <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors">
                    {app.name}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed font-medium line-clamp-2">
                    {app.description}
                </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
        </article>
));

const LandingView: React.FC = () => {
    const [pendingHref, setPendingHref] = useState<string | null>(null);

    const handleInternalLink = useCallback((e: React.MouseEvent, href: string) => {
        e.preventDefault();
        setPendingHref(href);
    }, []);

    const handleContinue = useCallback(() => {
        if (pendingHref) window.open(pendingHref, '_blank', 'noopener,noreferrer');
        setPendingHref(null);
    }, [pendingHref]);

    return (
    <PublicLayout>
        {/* Hero */}
        <section
            id="inicio"
            className="flex flex-col justify-center text-center px-4 py-12 min-h-[calc(100vh-60px)]"
        >
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">Oficina </span>
                <span>TIC</span>
            </h1>
            <h2 className="text-xl font-semibold tracking-tight sm:text-3xl mt-0 text-foreground/80">
                de Puerto Gaitán
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-medium my-4 md:my-8">
                Bienvenido al ecosistema digital de la Alcaldía Municipal de Puerto Gaitán, Meta.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
                {QUICK_LINKS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleInternalLink(e, item.href)}
                        className="flex flex-col items-center gap-1.5 group w-[72px]"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-black/[0.07] dark:border-white/[0.07] flex items-center justify-center text-foreground/50 group-hover:text-foreground group-hover:bg-white/50 dark:group-hover:bg-white/10 transition-all duration-200 group-hover:scale-110">
                            {item.icon}
                        </div>
                        <span className="text-[11px] font-semibold text-foreground/60 group-hover:text-foreground/90 transition-colors leading-tight text-center">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </section>

        {/* Applications */}
        <section id="aplicaciones" className="px-4 py-16 max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-balance">
                    Aplicaciones
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto text-pretty font-medium">
                    Accede a las aplicaciones digitales de la Alcaldía de Puerto Gaitán
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {APPS.map((app, index) => (
                    <AppCard key={app.name} app={app} index={index} />
                ))}
            </div>
        </section>

        {/* Footer */}
        <footer className="w-full">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <p className="text-sm font-bold text-foreground/80">Oficina TIC</p>
                    <p className="text-xs">Municipio de Puerto Gaitán, Meta, Colombia</p>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-4">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.puertogaitan-meta.gov.co/politica-de-seguridad/politica-de-derechos-de-autor-yo-autorizacion-de-uso" className="text-xs font-medium text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors">Política de privacidad</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.puertogaitan-meta.gov.co/politica-de-seguridad/politica-de-tratamiento-de-datos-personales" className="text-xs font-medium text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors">Términos de uso</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.puertogaitan-meta.gov.co/contactenos" className="text-xs font-medium text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors">Contacto</a>
                </div>
                    <p className="text-xs">
                        © {new Date().getFullYear()} Todos los derechos reservados
                    </p>
                    
                </div>

                <p className="text-xs">
                        Hecho por{' '}
                        <a
                            href="https://github.com/faridlyk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground/70 underline underline-offset-4 font-medium text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                            Farid Awad
                        </a>
                        {" "}y Jorge Daza
                    </p>
            </div>
        </footer>

        {/* WiFi warning dialog */}
        <Dialog open={!!pendingHref} onOpenChange={(open) => !open && setPendingHref(null)}>
            <DialogContent className="max-w-sm rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.07] shadow-2xl">
                <DialogHeader className="items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Wifi className="h-6 w-6 text-primary" />
                    </div>
                    <DialogTitle className="text-base">Acceso por red corporativa</DialogTitle>
                    <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-foreground/50 break-all">
                        {pendingHref}
                    </span>
                    <DialogDescription className="text-sm text-foreground/60 leading-relaxed">
                        Para acceder a este recurso debes estar conectado a la red <span className="font-semibold text-foreground/80">WiFi Corporativo</span> de la Alcaldía de Puerto Gaitán.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex-col gap-2 sm:flex-col mt-2">
                    <Button className="w-full rounded-full" onClick={handleContinue}>
                        Continuar de todas formas
                    </Button>
                    <Button variant="ghost" className="w-full rounded-full" onClick={() => setPendingHref(null)}>
                        Cancelar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    </PublicLayout>
    );
};

export default memo(LandingView);
