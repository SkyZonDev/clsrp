'use client';

import {
    ArrowRight,
    Briefcase,
    Building2,
    Car,
    CheckCircle,
    Heart,
    MessageCircle,
    Play,
    Shield,
    Sparkles,
    Star,
    Trophy,
    Users,
    Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
    const stats = [
        {
            value: '500+',
            label: 'Joueurs actifs',
            color: 'from-green-500 to-emerald-500',
        },
        {
            value: '24/7',
            label: 'Serveur en ligne',
            color: 'from-[#FFCC29] to-[#F58634]',
        },
        {
            value: '50+',
            label: 'Jobs disponibles',
            color: 'from-[#F58634] to-orange-500',
        },
    ];

    const features = [
        {
            icon: Car,
            title: 'Véhicules Exclusifs',
            description:
                "Plus de 200 véhicules custom, du sport à l'utilitaire, tous optimisés pour une expérience réaliste",
        },
        {
            icon: Building2,
            title: 'Économie Réaliste',
            description:
                'Système économique équilibré avec immobilier, entreprises et marchés dynamiques',
        },
        {
            icon: Shield,
            title: 'Administration Active',
            description:
                'Équipe de modération présente 24/7 pour garantir votre meilleure expérience',
        },
        {
            icon: Briefcase,
            title: 'Jobs Variés',
            description:
                'Police, EMS, Avocats, Gangs, Business légaux et illégaux pour tous les styles de jeu',
        },
        {
            icon: Trophy,
            title: 'Events Réguliers',
            description:
                'Courses, braquages, événements communautaires et surprises hebdomadaires',
        },
        {
            icon: Zap,
            title: 'Performance Optimale',
            description:
                'Serveur haute performance avec optimisation constante pour une fluidité maximale',
        },
    ];

    const testimonials = [
        {
            name: 'Alexandre M.',
            role: 'Joueur depuis 6 mois',
            quote: "Meilleur serveur RP que j'ai testé. La communauté est incroyable et les events sont toujours fous. L'économie est vraiment bien pensée !",
        },
        {
            name: 'Sarah K.',
            role: 'Leader de faction',
            quote: "En tant que leader, j'apprécie énormément le support staff et les possibilités RP offertes. Mon gang a pu créer une vraie histoire ici.",
        },
        {
            name: 'Thomas D.',
            role: 'Officier de police',
            quote: 'Le réalisme des situations et le sérieux des joueurs font toute la différence. Chaque session est unique et immersive.',
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center relative">
                    {/* Badge avec glow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-foreground mb-12 backdrop-blur-sm relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="w-3.5 h-3.5 relative z-10 text-[#FFCC29]" />
                        <span className="relative z-10">
                            Serveur FiveM Premium - Whitelist ouverte
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.05] tracking-tight">
                        <span className="text-foreground">L'expérience RP</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] bg-clip-text text-transparent">
                            réinventée
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Chicago Lakeshore RP vous offre une immersion totale
                        dans un univers roleplay unique. Créez votre histoire,
                        forgez votre légende.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            className="px-6 h-12 rounded-lg font-medium group"
                        >
                            Rejoindre le serveur
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="px-6 h-12 rounded-lg"
                        >
                            <MessageCircle className="mr-2 w-4 h-4" />
                            Rejoindre Discord
                        </Button>
                    </div>

                    {/* Social proof simple */}
                    <p className="text-md text-foreground/70">
                        Rejoint par plus de{' '}
                        <span className="bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] bg-clip-text text-transparent font-bold">
                            500+ joueurs actifs
                        </span>{' '}
                        chaque jour
                    </p>
                </section>

                {/* Visual Demo Section */}
                <section className="max-w-7xl mx-auto px-6 pb-32 relative">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFCC29]/5 via-[#F58634]/5 to-transparent blur-3xl -z-10" />

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-3xl blur-2xl opacity-50" />

                        <div className="border border-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-xl shadow-2xl relative">
                            <div className="border-b border-border bg-card/80 px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                            </div>
                            <div className="p-12 md:p-20 text-center relative">
                                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-muted/50 border border-border mb-12 backdrop-blur-sm">
                                    <Users className="w-5 h-5 text-foreground/60" />
                                    <span className="text-lg text-foreground">
                                        Dashboard - Chicago Lakeshore RP
                                    </span>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                    {stats.map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative p-6 rounded-xl bg-muted/50 border border-border hover:border-foreground/30 transition-all"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity`}
                                            />
                                            <div className="text-sm text-foreground/60 mb-2 relative z-10">
                                                {item.label}
                                            </div>
                                            <div className="text-2xl font-bold text-foreground relative z-10">
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Pourquoi Chicago Lakeshore ?
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Une expérience unique alliant réalisme, performance
                            et communauté active
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-foreground/60 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Ils jouent déjà sur CLSRP
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Découvrez les retours de notre communauté
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative group border border-border rounded-2xl p-8 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent backdrop-blur-sm"
                            >
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-[#FFCC29] fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-foreground/80 mb-6 italic leading-relaxed text-sm">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center">
                                        <span className="text-xs font-bold text-primary-foreground">
                                            {testimonial.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-foreground/60">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-6 pb-32">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/30 via-[#F58634]/30 to-[#FFCC29]/30 rounded-3xl blur-2xl opacity-75 dark:opacity-50" />
                        <div className="relative border border-border rounded-2xl p-16 text-center bg-card backdrop-blur-xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] text-foreground" />

                            <div className="relative">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                                    Prêt à écrire votre légende ?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Rejoignez Chicago Lakeshore RP dès
                                    maintenant et vivez l'expérience roleplay
                                    ultime.
                                </p>
                                <Button
                                    size="lg"
                                    className="px-8 h-12 rounded-lg font-medium group"
                                >
                                    <Play className="mr-2 w-4 h-4" />
                                    Se connecter maintenant
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-foreground/60">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#FFCC29]" />
                                        <span>Whitelist rapide</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#FFCC29]" />
                                        <span>Support dédié</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#FFCC29]" />
                                        <span>Communauté active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
