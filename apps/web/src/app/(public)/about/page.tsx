'use client';

import {
    ArrowRight,
    Award,
    Calendar,
    CheckCircle2,
    Eye,
    Flag,
    Globe,
    Handshake,
    Heart,
    Lightbulb,
    MessageSquare,
    Rocket,
    Shield,
    Sparkles,
    Target,
    Trophy,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { achievements, team, timeline } from '@/constants';
import { cn } from '@/lib/utils';

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: "Communauté d'abord",
            description:
                "Notre priorité absolue est le bien-être et l'expérience de chaque joueur. Nous construisons ensemble.",
            color: 'from-red-500 to-pink-500',
        },
        {
            icon: Shield,
            title: 'Fair-play & Respect',
            description:
                "Tolérance zéro pour la toxicité. Un environnement sain où chacun peut s'épanouir en toute sécurité.",
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Lightbulb,
            title: 'Innovation constante',
            description:
                'Nous développons continuellement de nouveaux systèmes et mécaniques pour enrichir le gameplay.',
            color: 'from-[#FFCC29] to-[#F58634]',
        },
        {
            icon: Eye,
            title: 'Transparence',
            description:
                "Communication ouverte avec la communauté. Vos retours façonnent l'avenir du serveur.",
            color: 'from-purple-500 to-indigo-500',
        },
        {
            icon: Trophy,
            title: 'Qualité premium',
            description:
                'Standards élevés dans tous les aspects : scripts, modération, support et expérience globale.',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Handshake,
            title: 'Équité',
            description:
                'Pas de pay-to-win. Chaque joueur a les mêmes chances de réussir grâce à son RP et sa créativité.',
            color: 'from-amber-500 to-orange-500',
        },
    ];

    const features = [
        {
            icon: Target,
            title: 'Notre Mission',
            description:
                'Offrir la meilleure expérience roleplay francophone en combinant réalisme, créativité et performance technique. Créer un univers où chaque joueur peut écrire sa propre histoire.',
        },
        {
            icon: Eye,
            title: 'Notre Vision',
            description:
                'Devenir la référence des serveurs FiveM RP en Europe. Construire une communauté soudée où le respect et la qualité du jeu priment sur tout le reste.',
        },
        {
            icon: Rocket,
            title: 'Notre Engagement',
            description:
                'Développement continu, écoute de la communauté, transparence totale et innovation constante. Votre expérience est notre priorité absolue.',
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-foreground mb-12 backdrop-blur-sm relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Flag className="w-3.5 h-3.5 relative z-10 text-[#FFCC29]" />
                        <span className="relative z-10">
                            À propos de Chicago Lakeshore RP
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
                        <span className="text-foreground">Notre</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] bg-clip-text text-transparent">
                            histoire
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Chicago Lakeshore RP est né d'une passion commune :
                        créer un serveur FiveM où le roleplay, l'immersion et la
                        communauté sont au cœur de chaque instant. Découvrez
                        notre parcours, nos valeurs et l'équipe qui rend tout
                        cela possible.
                    </p>
                </section>

                {/* Stats Grid */}
                <section className="max-w-7xl mx-auto px-6 pb-32">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/20 via-[#F58634]/20 to-[#FFCC29]/20 rounded-3xl blur-2xl opacity-50" />
                        <div className="relative border border-border rounded-2xl bg-card/50 backdrop-blur-xl p-8 md:p-12">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="text-center group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            <div className="text-3xl font-bold text-foreground mb-2">
                                                {achievement.value}
                                            </div>
                                            <div className="text-sm text-foreground/60">
                                                {achievement.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Engagement */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Ce qui nous anime
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Les principes fondamentaux qui guident chacune de
                            nos décisions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-foreground/60 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Timeline */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Notre parcours
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            De nos débuts modestes à aujourd'hui, une histoire
                            de passion et de persévérance
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFCC29] via-[#F58634] to-[#FFCC29] hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${
                                        index % 2 === 0
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse'
                                    } flex-col gap-8`}
                                >
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div
                                            className={`border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm group hover:border-foreground/30 transition-all ${
                                                index % 2 === 0
                                                    ? 'md:text-right'
                                                    : 'md:text-left'
                                            }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative">
                                                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#FFCC29] to-[#F58634] text-primary-foreground text-sm font-bold mb-4">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-2xl font-bold mb-3 text-foreground">
                                                    {item.title}
                                                </h3>
                                                <p className="text-foreground/60 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FFCC29] to-[#F58634] border-4 border-background shadow-lg z-10 hidden md:block" />

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Nos valeurs
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Les piliers qui définissent notre communauté et
                            notre approche
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">
                                            {value.title}
                                        </h3>
                                        <p className="text-foreground/60 leading-relaxed text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Team */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            L'équipe derrière CLSRP
                        </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Des passionnés dévoués qui travaillent chaque jour
                            pour vous offrir la meilleure expérience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {team.map((member, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        'group relative border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-all',
                                        index === team.length - 1 &&
                                            'col-span-3'
                                    )}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC29]/5 via-[#F58634]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                <Image
                                                    src={
                                                        member.avatar ||
                                                        '/users/placeholder.jpg'
                                                    }
                                                    alt={
                                                        'Photo de profil de ' +
                                                        member.name
                                                    }
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-[#F58634] font-medium">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        {member.description && (
                                            <p className="text-foreground/60 leading-relaxed text-sm  mt-4">
                                                {member.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Community Impact */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC29]/30 via-[#F58634]/30 to-[#FFCC29]/30 rounded-3xl blur-2xl opacity-75 dark:opacity-50" />
                        <div className="relative border border-border rounded-2xl p-12 md:p-16 bg-card backdrop-blur-xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] text-foreground" />

                            <div className="relative grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                                        Rejoignez l'aventure
                                    </h2>
                                    <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                                        Faites partie d'une communauté soudée où
                                        chaque joueur compte. Votre histoire
                                        commence maintenant sur Chicago
                                        Lakeshore RP.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                                            </div>
                                            <span className="text-foreground">
                                                Whitelist rapide et simple
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                                            </div>
                                            <span className="text-foreground">
                                                Accueil personnalisé par le
                                                staff
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFCC29] to-[#F58634] flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                                            </div>
                                            <span className="text-foreground">
                                                Tutoriel complet pour débuter
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Globe className="w-5 h-5 text-[#FFCC29]" />
                                            <h3 className="font-bold text-foreground">
                                                Communauté internationale
                                            </h3>
                                        </div>
                                        <p className="text-sm text-foreground/60">
                                            Joueurs de toute l'Europe
                                            francophone se retrouvent sur CLSRP
                                            pour partager leur passion du RP.
                                        </p>
                                    </div>

                                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Calendar className="w-5 h-5 text-[#FFCC29]" />
                                            <h3 className="font-bold text-foreground">
                                                Événements exclusifs
                                            </h3>
                                        </div>
                                        <p className="text-sm text-foreground/60">
                                            Participez à nos événements
                                            hebdomadaires : courses, braquages,
                                            concours et bien plus encore.
                                        </p>
                                    </div>

                                    <div className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Award className="w-5 h-5 text-[#FFCC29]" />
                                            <h3 className="font-bold text-foreground">
                                                Récompenses et progression
                                            </h3>
                                        </div>
                                        <p className="text-sm text-foreground/60">
                                            Système de niveaux, achievements et
                                            récompenses pour valoriser votre
                                            investissement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        className="px-8 h-12 rounded-lg font-medium group"
                                    >
                                        Commencer l'aventure
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="px-8 h-12 rounded-lg"
                                    >
                                        <MessageSquare className="mr-2 w-4 h-4" />
                                        Rejoindre Discord
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Quote */}
                <section className="max-w-4xl mx-auto px-6 pb-32">
                    <div className="text-center">
                        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#FFCC29] via-[#F58634] to-[#FFCC29] mb-8">
                            <div className="bg-background rounded-xl px-8 py-12">
                                <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#FFCC29]" />
                                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-relaxed">
                                    "Chicago Lakeshore RP n'est pas qu'un
                                    serveur, c'est une famille où chaque joueur
                                    contribue à écrire une histoire collective
                                    unique."
                                </blockquote>
                                <p className="text-foreground/60">
                                    — L'équipe de Chicago Lakeshore RP
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
