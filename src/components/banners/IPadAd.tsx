import SmashUpButton from '@/components/smashup/Button/Button';
import banner from '/public/dev/banner.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function IPadAd() {
    const t = useTranslations('home.ad');
    return (
        <div className='w-full h-full bg-black flex flex-col gap-8 justify-end items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-5xl'>{t('title')}</h1>
                <p className='text-lg'>{t('description')}</p>
            </div>
            <div className='flex flex-row gap-5'>
                <SmashUpButton className='w-[150px] h-[40px]'>{t('button1')}</SmashUpButton>
                <SmashUpButton className='w-[150px] h-[40px]' category='stroke'>
                    {t('button2')}
                </SmashUpButton>
            </div>
            <Image src={banner} alt='IPad Photo' />
        </div>
    );
}
