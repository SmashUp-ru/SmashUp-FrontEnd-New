import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';
import SmashUpLogo from '@/components/icons/SmashUpLogo';

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
                <div className='flex flex-row w-full h-full'>
                    <div className='w-1/2 h-full bg-primary flex flex-col justify-center items-center'>
                        <SmashUpLogo className='w-2/3 text-black' color='black' />
                    </div>
                    <div className='w-1/2 '>{children}</div>
                </div>
            </body>
        </html>
    );
}
