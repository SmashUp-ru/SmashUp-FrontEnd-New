import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n.config';

export default createMiddleware({
    defaultLocale: 'ru',
    locales,
    localeDetection: false,
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
