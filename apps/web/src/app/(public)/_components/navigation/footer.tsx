'use client';

import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandX,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { navigation } from '@/constants';

export function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logo = mounted
        ? `/logo/svg/transparent/clsrp_tb_${resolvedTheme === 'dark' ? 'wt' : 'bt'}.svg`
        : '/logo/svg/transparent/clsrp_tb_bt.svg'; // valeur par défaut

    return (
        <footer className="border-t bg-background/50 backdrop-blur supports-backdrop-filter:bg-background/40">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
                            aria-label="Accéder à la page d'accueil"
                        >
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                                <Image
                                    src={logo}
                                    alt="Logo CLSRP"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="flex flex-col leading-none items-start justify-center">
                                <span className="font-bold">Chicago</span>
                                <span className="text-xs text-muted-foreground">
                                    Lakeshore RP
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Rejoignez la meilleure communauté FiveM pour des
                            aventures RP immersives.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-foreground">
                            Navigation
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {navigation.nav.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Community Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-foreground">
                            Communauté
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {navigation.footer.community.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    target={
                                        link.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        link.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-foreground">
                            Réseaux
                        </h3>
                        <div className="flex gap-3">
                            <Link
                                href={
                                    process.env.NEXT_PUBLIC_DISCORD_URL ||
                                    'https://discord.gg'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                aria-label="Discord"
                            >
                                <IconBrandDiscord className="size-5" />
                            </Link>
                            <Link
                                href={
                                    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
                                    'https://instagram.com'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                aria-label="Twitter"
                            >
                                <IconBrandInstagram className="size-5" />
                            </Link>
                            <Link
                                href={
                                    process.env.NEXT_PUBLIC_TIKTOK_URL ||
                                    'https://tiktok.com'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                aria-label="GitHub"
                            >
                                <IconBrandTiktok className="size-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t" />

                {/* Bottom Footer */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Chicago Lakeshore RP. Tous droits réservés.
                    </p>
                    <nav className="flex flex-wrap gap-4">
                        {navigation.footer.legal.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
