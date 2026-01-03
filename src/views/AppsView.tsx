import React from 'react';
import PublicLayout from '@/components/layout/PublicLayout';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookText } from 'lucide-react';

const apps = [
    {
        name: "Secretaría de Cultura, Recreación y Deporte",
        abbreviation: "Secretaría",
        department: "Sct. de Cultura, Recreación y Deporte",
        description: "Gestión y fomento de programas culturales, deportivos y recreativos para el desarrollo integral de la comunidad.",
        image: "/apps/depor.png",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:81/",
        docs: "#"
    },
    {
        name: "Noticias",
        abbreviation: "Noticias",
        department: "Oficina TIC",
        description: "Mantente informado con las últimas noticias, eventos y comunicados oficiales de la administración municipal.",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:81/",
        docs: "#"
    },
    {
        name: "Registro de Ingresos",
        abbreviation: "Registro de Ingresos",
        department: "Secretaría General",
        description: "Módulo de control para el registro y seguimiento de los ingresos en las dependencias municipales.",
        image: "/apps/regis.png",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:83/",
        docs: "#"
    },
    {
        name: "Fondo de Educación Superior",
        abbreviation: "FES",
        department: "Secretaría de Educación",
        description: "Portal de gestión para beneficiarios y nuevos aspirantes al Fondo de Educación Superior de Puerto Gaitán.",
        image: "/apps/fes.png",
        url: "http://fes.puertogaitan-meta.gov.co/",
        docs: "#"
    },
    {
        name: "Concepto Sanitario",
        abbreviation: "Concepto Sanitario",
        department: "Secretaría de Salud",
        description: "Solicita y consulta el estado de los conceptos sanitarios para establecimientos de comercio y servicios.",
        image: "/apps/concep.png",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:81/",
        docs: "#"
    },
    {
        name: "Registro de Mascotas",
        abbreviation: "Mascotas",
        department: "Secretaría Ecológica y Ambiental",
        description: "Censo y registro oficial de mascotas para promover la tenencia responsable en el municipio.",
        image: "/apps/masco.png",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:82/",
        docs: "#"
    },
    {
        name: "Planta de Beneficio Animal",
        abbreviation: "Beneficio Animal",
        department: "Secretaría de Agricultura",
        description: "Sistema de gestión y seguimiento para los procesos de la Planta de Beneficio Animal municipal.",
        image: "/apps/animal.png",
        url: "http://aplicaciones.puertogaitan-meta.gov.co:91/",
        docs: "#"
    },
];

const AppsView: React.FC = () => {
    return (
        <PublicLayout>
            <div className="px-4 py-12 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-balance">
                        Aplicaciones
                    </h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-pretty font-medium">
                        Accede a las aplicaciones digitales de la Alcaldía de Puerto Gaitán
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apps.map((app, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col rounded-xl cursor-pointer bg-white/70 dark:bg-black/70 transition-all duration-500 backdrop-blur-md overflow-hidden hover:translate-y-[-4px] hover:border-black/10 dark:hover:border-white/20 shadow-lg hover:shadow-2xl"
                        >
                            {/* macOS Title Bar */}
                            <div className="h-9 flex items-center px-4 gap-1.5 bg-black/[0.03] dark:bg-white/[0.05] border-b border-black/[0.05] dark:border-white/[0.05]">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[inset_0_0_2px_rgba(0,0,0,0.2)]" />
                                <div className="ml-2 text-[10px] font-medium text-foreground/40 uppercase tracking-widest flex-1 text-center pr-10">
                                    {app.abbreviation}
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative h-40 overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center">
                                {app.image ? (
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100 dark:brightness-90 dark:group-hover:brightness-100"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-foreground/20 dark:text-white/20">
                                        <span className="text-sm font-bold uppercase tracking-widest">Sin Imagen</span>
                                    </div>
                                )}

                                {/* Action Buttons Over Image */}
                                <div className="absolute inset-0 bg-black/40 sm:bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="rounded-full h-11 w-11 sm:h-10 sm:w-10 shadow-xl backdrop-blur-xl bg-white/30 sm:bg-white/20 hover:bg-white/40 border-none text-white transition-all scale-100 sm:scale-90 sm:group-hover:scale-100"
                                        title="Abrir aplicación"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(app.url, '_blank');
                                        }}
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="rounded-full h-11 w-11 sm:h-10 sm:w-10 shadow-xl backdrop-blur-xl bg-white/30 sm:bg-white/20 hover:bg-white/40 border-none text-white transition-all scale-100 sm:scale-90 sm:group-hover:scale-100"
                                        title="Ver documentación"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.location.href = app.docs;
                                        }}
                                    >
                                        <BookText className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 pt-3 flex flex-col flex-1 bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]">
                                <div className="mb-2">
                                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md ">
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

                            {/* Bottom reflection line */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default AppsView;
