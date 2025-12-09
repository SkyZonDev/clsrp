import { Briefcase, Car, Clock, MessageSquare, Users, Zap } from 'lucide-react';

export const achievements = [
    {
        label: 'Joueurs actifs quotidien',
        value: '500+',
        icon: Users,
    },
    {
        label: 'Jobs & activités uniques',
        value: '50+',
        icon: Briefcase,
    },
    {
        label: 'Membres Discord',
        value: '10K+',
        icon: MessageSquare,
    },
    {
        label: 'Support & modération',
        value: '24/7',
        icon: Clock,
    },
    {
        label: 'Véhicules custom',
        value: '200+',
        icon: Car,
    },
    {
        label: 'Uptime serveur',
        value: '99.99%',
        icon: Zap,
    },
];

export const timeline = [
    {
        year: '2022',
        title: 'Les débuts',
        description:
            'Lancement du projet Chicago Lakeshore RP avec une petite équipe passionnée et une vision claire : créer le meilleur serveur RP francophone.',
    },
    // {
    //     year: '2023',
    //     title: 'Expansion',
    //     description: 'Dépassement des 300 joueurs actifs. Ajout de systèmes innovants et recrutement d\'une équipe staff dédiée disponible 24/7.',
    // },
    // {
    //     year: '2024',
    //     title: 'Excellence',
    //     description: 'Plus de 500 joueurs quotidiens, 50+ jobs, événements hebdomadaires et reconnaissance comme l\'un des meilleurs serveurs RP européens.',
    // },
    // {
    //     year: '2025',
    //     title: 'L\'avenir',
    //     description: 'Nouveaux systèmes en développement, partenariats majeurs et expansion continue de notre univers roleplay unique.',
    // },
];

type Team = {
    name: string;
    description: string;
    role: string;
    avatar: string | null;
    discord?: string;
    github?: string;
};

export const team: Team[] = [
    {
        role: 'Fondateur & Directeur Technique',
        name: 'SkyZon',
        description:
            "Développeur de scripts FiveM, créateur du site web et des applications associées comme le CAD. Il est également l'administrateur réseau qui héberge le serveur.",
        avatar: '/users/skyzon.png',
        discord: '@skyzondev',
        github: 'https://github.com/SkyZonDev',
    },
    {
        role: 'Fondateur & Directeur Créatif',
        name: 'ClacheurX3',
        description:
            'Développeur de script FiveM et spécialisé dans la modélisation 3D et les textures pour véhicules, bâtiments et intérieurs personnalisés du serveur.',
        avatar: null,
        discord: '@ClacheurX3',
    },
    {
        role: 'Fondateur & Coordinateur',
        name: 'CyxerGaming',
        description:
            "Coordinateur polyvalent qui soutient l'équipe dans l'intégration des éléments. Compositeur des bandes sonores pour les trailers et événements du serveur.",
        avatar: '/users/cyxergaming.png',
        discord: '@CyxerGaming',
    },
    {
        role: 'Administrateur',
        name: 'Jule POCAR',
        description: '',
        avatar: null,
        discord: '@le_schtroumpf_sportif',
    },
    {
        role: 'Administrateur',
        name: 'Ember',
        description: '',
        avatar: null,
        discord: '@ctzn_soldier',
    },
    {
        role: 'Administrateur',
        name: 'Alexander06',
        description: '',
        avatar: null,
        discord: '@alexander06fr',
    },
    {
        role: 'Équipe Staff',
        name: '15+ Modérateurs',
        description:
            'Disponibles 24/7 pour assurer une expérience de jeu optimale et résoudre vos questions.',
        avatar: null,
        discord: '',
    },
];

export const navigation = {
    nav: [
        {
            label: 'À propos',
            href: '/about',
        },
        {
            label: 'Actualités',
            href: '/news',
        },
        {
            label: 'Galerie',
            href: '/gallery',
        },
        {
            label: 'FAQ',
            href: '/faq',
        },
    ],
    footer: {
        community: [
            {
                label: 'Discord',
                href: process.env.DISCORD_URL || 'https://discord.gg',
            },
            { label: 'Forum', href: '/forum' },
            { label: 'Support', href: '/support' },
        ],
        legal: [
            { label: 'Politique de confidentialité', href: '/privacy' },
            { label: 'Conditions', href: '/terms' },
            { label: 'Contact', href: '/contact' },
        ],
    },
};
