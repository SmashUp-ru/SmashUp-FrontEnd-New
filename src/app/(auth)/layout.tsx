import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description
};
export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru' className=''>
            <body className={inter.className}>
                <div className='flex flex-row w-full h-full'>
                    <div className='hidden md:flex w-1/2 h-full bg-primary flex-col justify-center items-center'>
                        <SmashUpLogo className='w-2/3 text-black' color='black' />
                    </div>
                    <div className='w-full lg:w-1/2 p-6'>{children}</div>
                </div>
            </body>
        </html>
    );
}
