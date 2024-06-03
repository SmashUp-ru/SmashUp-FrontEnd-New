import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Providers from '@/providers/Providers';
import MainLayout from '@/app/(root)/MainLayout';
import { siteConfig } from '@/config/site';

const inter = Manrope({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description
};
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru' className='bg-background'>
            <body className={inter.className}>
                <Providers>
                    <Sidebar>
                        <MainLayout>{children}</MainLayout>
                    </Sidebar>
                </Providers>
            </body>
        </html>
    );
}
