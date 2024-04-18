import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';

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
        <html lang='ru' className=''>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
