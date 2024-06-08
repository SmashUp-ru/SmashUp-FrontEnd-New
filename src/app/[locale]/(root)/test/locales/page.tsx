import { useTranslations } from 'next-intl';

export default function LocaleTest() {
    const t = useTranslations('test');
    return <div>{t('title')}</div>;
}
