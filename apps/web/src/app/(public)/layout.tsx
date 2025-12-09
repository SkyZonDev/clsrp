import { ReactNode } from 'react';
import { Footer } from '@/app/(public)/_components/navigation/footer';
import { Navbar } from '@/app/(public)/_components/navigation/navbar';

export default async function PublicLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="w-full">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
