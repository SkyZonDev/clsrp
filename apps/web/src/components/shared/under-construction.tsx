'use client';

import {
    ArrowRight,
    Bell,
    Clock,
    Code,
    Home,
    Sparkles,
    Wrench,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MaintenancePage() {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center pt-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] text-foreground" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-foreground mb-12 backdrop-blur-sm relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Wrench className="w-3.5 h-3.5 relative z-10 text-[#FFCC29]" />
                    <span className="relative z-10">Page en développement</span>
                </div>

                {/* Icon with gradient background */}
                <div className="relative mb-8">
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#FFCC29]/30 via-[#F58634]/30 to-[#FFCC29]/30 rounded-full blur-3xl opacity-75 dark:opacity-50" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-3xl bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center animate-pulse">
                        <Code className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="text-foreground">Bientôt</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] bg-clip-text text-transparent">
                        disponible
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Notre équipe travaille actuellement sur cette fonctionnalité
                    pour vous offrir la meilleure expérience possible. Restez
                    connectés !
                </p>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <Zap className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            En développement
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Nos développeurs codent activement cette page
                        </p>
                    </div>

                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <Clock className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            Bientôt en ligne
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Cette fonctionnalité sera disponible prochainement
                        </p>
                    </div>

                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm group hover:border-[#FFCC29]/50 transition-colors">
                        <Sparkles className="w-8 h-8 mx-auto mb-3 text-[#FFCC29]" />
                        <h3 className="font-bold text-foreground mb-2">
                            Qualité premium
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Nous peaufinons chaque détail pour vous
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative border border-border rounded-xl p-8 bg-card/50 backdrop-blur-xl">
                        <p className="text-foreground/60 mb-6">
                            En attendant, découvrez les autres sections de
                            Chicago Lakeshore RP ou rejoignez notre communauté
                            sur Discord pour suivre nos actualités.
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
                                    Découvrir le serveur
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border backdrop-blur-sm">
                        <div className="relative w-2 h-2">
                            <div className="absolute inset-0 bg-[#FFCC29] rounded-full animate-ping" />
                            <div className="relative w-2 h-2 bg-[#FFCC29] rounded-full" />
                        </div>
                        <span className="text-sm text-foreground/60">
                            Développement en cours...
                        </span>
                    </div>
                </div>

                {/* Additional Help */}
                <div className="mt-8 pt-8">
                    <p className="text-sm text-foreground/40">
                        Suivez nos mises à jour sur{' '}
                        <a
                            href="#"
                            className="text-[#FFCC29] hover:text-[#F58634] transition-colors font-medium inline-flex items-center gap-1"
                        >
                            <Bell className="w-3.5 h-3.5" />
                            Discord
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
