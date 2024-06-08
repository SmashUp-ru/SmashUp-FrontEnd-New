import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Providers from '@/providers/Providers';
import MainLayout from '@/app/[locale]/(root)/MainLayout';

import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n.config';

const font = Manrope({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
    const t = await getTranslations({
        locale,
        namespace: 'common.meta'
    });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} className='bg-background'>
            <body className={font.className}>
                <Providers>
                    <Sidebar>
                        <MainLayout>{children}</MainLayout>
                    </Sidebar>
                </Providers>
            </body>
        </html>
    );
}
