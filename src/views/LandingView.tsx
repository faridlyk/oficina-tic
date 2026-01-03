import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PublicLayout from '@/components/layout/PublicLayout';

const LandingView: React.FC = () => {
  return (
    <PublicLayout>
      {/* Hero Section centered in remaining space */}
      <div className="flex-1 flex flex-col justify-center text-center px-4 py-12">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">Oficina </span>
          <span className="">TIC</span>
        </h1>
        <h2 className="text-xl font-semibold tracking-tight sm:text-3xl mt-0 text-foreground/80">
          de Puerto Gaitán
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto font-medium my-8">
          Bienvenido al ecosistema digital de la Alcaldía Municipal de Puerto Gaitán, Meta.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            Acceder
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-accent/20 hover:bg-accent/40 focus:bg-accent/40 px-8">
            Registrarse
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
};

export default LandingView;


