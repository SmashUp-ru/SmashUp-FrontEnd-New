import { useTranslations } from 'next-intl';
// import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('common.agreements');
    return (
        <div className='pb-5 flex flex-col gap-1'>
            <div className='flex flex-row justify-between'>
                {/* <div className='flex flex-row gap-8'>
                    <Link href='#' className='text-onSurface font-bold text-base'>
                        {t('rightholders')}
                    </Link>
                    <Link href='/agreement' className='text-onSurface font-bold text-base'>
                        {t('agreement')}
                    </Link>{' '}
                    <Link href='#' className='text-onSurface font-bold text-base'>
                        {t('contacts')}
                    </Link>
                </div> */}
                <span className='text-primary font-bold text-base'>2024 SmashUp</span>
            </div>
            <span className='text-onSurfaceVariant font-medium text-base'>{t('description')}</span>
        </div>
    );
}
