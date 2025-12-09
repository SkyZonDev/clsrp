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
