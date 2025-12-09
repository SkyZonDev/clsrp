'use client';

import { Menu, Sparkles, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigation } from '@/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
    const { resolvedTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logo = mounted
        ? `/logo/svg/transparent/clsrp_tb_${resolvedTheme === 'dark' ? 'wt' : 'bt'}.svg`
        : '/logo/svg/transparent/clsrp_tb_bt.svg'; // valeur par défaut

    return (
        <nav
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-300',
                isScrolled &&
                    'border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'
            )}
        >
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
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
                        <span className="hidden sm:inline-block font-bold">
                            Chicago
                        </span>
                        <span className="hidden sm:inline-block text-xs text-muted-foreground">
                            Lakeshore RP
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigation.nav.map((link, idx) => (
                                <NavigationMenuItem key={idx}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
                                        >
                                            {link.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <ThemeToggle />

                    <div className="hidden md:flex md:items-center md:gap-2">
                        <Button size="sm" variant="outline">
                            Connexion
                        </Button>
                        <Button size="sm">Discord</Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t bg-transparent backdrop-blur supports-backdrop-filter:bg-transparent md:hidden">
                    <div className="container mx-auto max-w-7xl px-4 py-4">
                        <nav className="flex flex-col gap-2">
                            <Link
                                href="/about"
                                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                À propos
                            </Link>
                            <Link
                                href="/skills"
                                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Compétences
                            </Link>
                            <Link
                                href="/projects"
                                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Projets
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </nav>
    );
}
