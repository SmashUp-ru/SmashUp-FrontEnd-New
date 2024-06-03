import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
