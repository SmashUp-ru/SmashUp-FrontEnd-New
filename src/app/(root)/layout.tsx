import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Providers from '@/providers/Providers';
import MainLayout from '@/app/(root)/MainLayout';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

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
        <html lang='ru' className=''>
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
