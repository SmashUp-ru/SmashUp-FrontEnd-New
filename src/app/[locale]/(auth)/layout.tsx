import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import { siteConfig } from '@/config/site';

import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Manrope({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description
};
export default async function AuthLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale} className='bg-background'>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className='flex flex-row w-full h-full'>
                        <div className='hidden md:flex w-1/2 h-full bg-primary flex-col justify-center items-center'>
                            <SmashUpLogo className='w-2/3 text-black' color='black' />
                        </div>
                        <div className='w-full lg:w-1/2 p-6'>{children}</div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
