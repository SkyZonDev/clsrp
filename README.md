# CLSRP Project Monorepo

> Écosystème technique officiel de l'association CLSRP - Développé et maintenu par SkyZonDev

Bienvenue dans le monorepo du projet CLSRP. Ce dépôt contient l'ensemble de l'infrastructure technique de notre serveur de roleplay FiveM, incluant le site web, l'API et le bot Discord.

## 🎯 À propos du projet

CLSRP est une association à but non lucratif dédiée à offrir une expérience de roleplay de qualité sur FiveM. Ce repository héberge l'ensemble des applications qui composent notre écosystème technique.

**Développement & Maintenance** : Ce projet est développé et maintenu par [SkyZonDev](https://github.com/SkyZonDev) pour le compte de l'association CLSRP. Il s'agit d'un projet privé à vocation interne, non destiné aux contributions externes.

## 📋 Prérequis

- **Node.js** (version 18 ou supérieure recommandée)
- **pnpm** (gestionnaire de paquets)
- **PostgreSQL** (base de données)
- **Drizzle ORM** (ORM)
- Accès aux variables d'environnement (contactez l'administrateur)

## 🚀 Installation et Démarrage

### 1. Cloner le repository

```bash
git clone https://github.com/SkyZonDev/clsrp.git
cd clsrp
```

### 2. Installer les dépendances

```bash
pnpm install
```

### 3. Configuration des variables d'environnement

Chaque application (`web`, `api`, `bot`) nécessite sa propre configuration. Copiez les fichiers d'exemple et complétez-les avec les valeurs fournies par l'administrateur :

```bash
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
cp apps/bot/.env.example apps/bot/.env
```

**⚠️ Important** : Les variables d'environnement contiennent des informations sensibles. Ne les partagez jamais publiquement.

### 4. Lancer l'environnement de développement

```bash
pnpm dev
```

Cette commande démarre simultanément toutes les applications en mode développement.

## 📁 Structure du Monorepo

```
clsrp/
├── apps/
│   ├── web/          # Site web Next.js
│   ├── api/          # API Fastify (publique et privée)
│   └── bot/          # Bot Discord
├── packages/
│   ├── ui/           # Composants React partagés
│   ├── config/       # Configurations partagées (ESLint, TypeScript)
│   └── db/           # Schémas et migrations de base de données
└── turbo.json        # Configuration Turborepo
```

### Applications

- **`apps/web`** : Application Next.js pour le site web principal. Interface utilisateur, informations serveur, boutique, etc.
- **`apps/api`** : API REST construite avec Fastify. Gère les interactions serveur de jeu, données utilisateurs, et endpoints publics/privés.
- **`apps/bot`** : Bot Discord développé avec Discord.js. Modération, notifications, et interactions communautaires.

### Packages Partagés

- **`packages/ui`** : Bibliothèque de composants React réutilisables basée sur shadcn/ui
- **`packages/config`** : Configurations TypeScript et ESLint partagées
- **`packages/db`** : Schémas Drizzle ORM, migrations et clients de requêtes

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| [Turborepo](https://turbo.build/repo) | Système de build monorepo |
| [pnpm](https://pnpm.io/) | Gestionnaire de paquets |
| [Next.js](https://nextjs.org/) | Framework React pour le web |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitaire |
| [shadcn/ui](https://ui.shadcn.com/) | Composants UI |
| [Fastify](https://fastify.dev/) | Framework API haute performance |
| [Discord.js](https://discord.js.org/) | Bibliothèque Discord |
| [PostgreSQL](https://www.postgresql.org/) | Base de données relationnelle |
| [Drizzle ORM](https://orm.drizzle.team/) | ORM TypeScript-first |
| [TypeScript](https://www.typescriptlang.org/) | Langage de programmation |

## 🔧 Scripts Disponibles

```bash
# Développement
pnpm dev              # Démarre tous les services en mode dev
pnpm dev:web          # Démarre uniquement le site web
pnpm dev:api          # Démarre uniquement l'API
pnpm dev:bot          # Démarre uniquement le bot

# Build
pnpm build            # Build tous les projets
pnpm build:web        # Build le site web
pnpm build:api        # Build l'API
pnpm build:bot        # Build le bot

# Autres
pnpm lint             # Vérifie le code avec ESLint
pnpm type-check       # Vérifie les types TypeScript
pnpm clean            # Nettoie les artifacts de build
```

## 📝 Gestion de la Base de Données

```bash
# Générer les migrations
pnpm db:generate

# Appliquer les migrations
pnpm db:migrate

# Ouvrir Drizzle Studio
pnpm db:studio
```

## 🔒 Sécurité

- Les clés API et secrets ne doivent **jamais** être commités
- Utilisez toujours les fichiers `.env` pour les informations sensibles
- Les fichiers `.env` sont ignorés par Git via `.gitignore`
- Contactez l'administrateur pour obtenir les variables d'environnement nécessaires

## 📞 Contact & Support

Pour toute question technique ou demande de support :
- **Développeur Principal** : SkyZonDev
- **Organisation** : CLSRP (Association à but non lucratif)

---

<p align="center">
  <strong>Développé avec ❤️ par SkyZonDev pour CLSRP</strong>
</p>

# CLSRP Project Monorepo

Welcome to the official monorepo for the CLSRP project. This repository contains all the necessary code for our ecosystem, including the website, the public API, and our Discord bot.

## 🚀 Getting Started

This monorepo is managed using `pnpm` and `Turborepo`. Make sure you have `pnpm` installed on your system.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SkyZonDev/clsrp.git
    cd clsrp
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Variables:**
    Each application (`web`, `api`, `bot`) has its own `.env.example` file. Copy it to `.env` and fill in the required values.
    ```bash
    cp apps/web/.env.example apps/web/.env
    cp apps/api/.env.example apps/api/.env
    cp apps/bot/.env.example apps/bot/.env
    ```

4.  **Start the development servers:**
    This command will start all applications in development mode.
    ```bash
    pnpm dev
    ```

## 📂 Monorepo Structure

This repository uses a monorepo structure to manage the different services.

-   `apps/web`: The Next.js application for our main website. It provides the user interface, server information, and connection to the store.
-   `apps/api`: The public and private API (likely built with Node.js/Express or a similar framework). It handles game server interactions, user data, and more.
-   `apps/bot`: The source code for our Discord bot, responsible for moderation, notifications, and community interactions.
-   `packages/ui`: Shared React components used across different applications.
-   `packages/config`: Shared configuration files (e.g., ESLint, TypeScript).
-   `packages/db`: Database schemas, migrations, and query clients.

## ✨ Main Technologies

-   **Build System**: [Turborepo](https://turbo.build/repo)
-   **Package Manager**: [pnpm](https://pnpm.io/)
-   **Web Application**: [Next.js](https://nextjs.org/) & [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
-   **API**: [Fastify](https://fastify.dev/)
-   **Discord Bot**: [Discord.js](https://discord.js.org/)
-   **Database**: [PostgreSQL](https://www.postgresql.org/)
-   **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contributing

Contributions are welcome! If you wish to contribute to the project, please follow these steps:

1.  Fork the repository (`fork`).
2.  Create a new branch for your feature (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push your branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

Please ensure your code follows the established coding style and that all tests pass before submitting a pull request.
