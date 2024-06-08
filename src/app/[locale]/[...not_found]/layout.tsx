import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
import { Locale } from '@/i18n.config';
import { getTranslations } from 'next-intl/server';

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

export default function NotFoundLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} className='bg-background'>
            <body className={font.className}>{children}</body>
        </html>
    );
}
