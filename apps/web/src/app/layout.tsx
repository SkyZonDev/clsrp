import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: process.env.NEXT_PUBLIC_SITE_NAME || 'Chicago LakeshoreRP',
        template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    },
    description: process.env.NEXT_PUBLIC_SITE_DESC,
    keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(',') || [],

    // Métadonnées essentielles pour le SEO
    authors: [{ name: 'Jean-Pierre Dupuis' }],
    creator: 'Jean-Pierre Dupuis',
    publisher: process.env.NEXT_PUBLIC_SITE_NAME || 'Chicago LakeshoreRP',

    // Métadonnées pour les réseaux sociaux
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || 'https://clsrp.fr'
    ),
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
