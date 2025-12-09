'use client';

import {
    AlertTriangle,
    ArrowRight,
    Compass,
    Home,
    MapPin,
    Search,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] text-foreground" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-foreground mb-12 backdrop-blur-sm relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AlertTriangle className="w-3.5 h-3.5 relative z-10 text-[#FFCC29]" />
                    <span className="relative z-10">Erreur 404</span>
                </div>

                {/* Big 404 with gradient */}
                <div className="relative mb-8">
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#FFCC29]/30 via-[#F58634]/30 to-[#FFCC29]/30 rounded-3xl blur-3xl opacity-75 dark:opacity-50" />
                    <h1 className="relative text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter">
                        <span className="bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                    Page introuvable
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Oups ! Il semblerait que vous vous soyez perdu dans les rues
                    de Chicago. Cette page n'existe pas ou a été déplacée.
                </p>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <MapPin className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            Page manquante
                        </h3>
                        <p className="text-sm text-foreground/60">
                            L'URL que vous cherchez n'existe pas
                        </p>
                    </div>

                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <Compass className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            Lien cassé
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Le lien que vous avez suivi est peut-être obsolète
                        </p>
                    </div>

                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <Search className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            URL incorrecte
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Vérifiez l'orthographe de l'adresse
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative border border-border rounded-xl p-8 bg-card/50 backdrop-blur-xl">
                        <p className="text-foreground/60 mb-6">
                            Pas de panique ! Retournez à l'accueil ou explorez
                            nos différentes sections.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button
                                    size="lg"
                                    className="px-8 h-12 rounded-lg font-medium group w-full sm:w-auto"
                                >
                                    <Home className="mr-2 w-4 h-4" />
                                    Retour à l'accueil
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 h-12 rounded-lg group w-full sm:w-auto"
                                >
                                    En savoir plus
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Help */}
                <div className="mt-12 pt-8">
                    <p className="text-sm text-foreground/40">
                        Besoin d'aide ? Contactez-nous sur{' '}
                        <a
                            href="#"
                            className="text-[#FFCC29] hover:text-[#F58634] transition-colors font-medium"
                        >
                            Discord
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
