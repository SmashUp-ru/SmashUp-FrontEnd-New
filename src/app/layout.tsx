import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: 'SmashUp',
    description: 'Самый лучший плеер для мэшапов'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={inter.className}>
                <Sidebar>{children}</Sidebar>
            </body>
        </html>
    );
}
