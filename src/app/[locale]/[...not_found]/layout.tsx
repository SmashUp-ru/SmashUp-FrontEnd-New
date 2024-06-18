import { Manrope } from 'next/font/google';
import '../globals.css';
import React from 'react';
import { Locale } from '@/i18n.config';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

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

export default async function NotFoundLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale} className='bg-background'>
            <body className={font.className}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
