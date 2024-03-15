import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/Header';

import * as VKID from '@vkid/sdk';

VKID.Config.set({
    app: process.env.VK_APP_ID as number | undefined, // Идентификатор приложения.
    redirectUrl: process.env.VK_REDIRECT_URL // Адрес для перехода после авторизации.
});

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
                <Sidebar>
                    <Header />
                    {children}
                </Sidebar>
            </body>
        </html>
    );
}
