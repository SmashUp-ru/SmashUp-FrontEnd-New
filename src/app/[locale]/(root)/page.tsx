import { premier, selections } from '@/utils/data';
import Card from '@/components/Card';
import Banner from '@/components/banners/Banner';
import IPadAd from '@/components/banners/IPadAd';
import Footer from '@/components/footer/Footer';
import React from 'react';
import TrackItem from '@/components/TrackItem';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('home');
    return (
        <div className='flex flex-col gap-12'>
            {/* Реклама */}
            <Banner>
                <IPadAd />
            </Banner>

            {/* Подборки */}
            <div>
                <h2 className='font-semibold text-2xl text-onSurface pb-5'>
                    {t('compilations.title')}
                </h2>
                <div className='flex flex-row gap-7 w-full h-[301px] overflow-visible'>
                    {selections.map((item) => (
                        <Card key={item.id} {...item} bg />
                    ))}
                </div>
            </div>

            {/* Недавно прослушано */}
            <div>
                <div className='flex flex-row justify-between'>
                    <h2 className='font-semibold text-2xl text-onSurface pb-5'>
                        {t('premier.title')}
                    </h2>
                    <span className='font-bold text-base text-onSurfaceVariant text-opacity-50 uppercase'>
                        {t('premier.button')}
                    </span>
                </div>

                <div className='flex flex-row flex-wrap'>
                    <div className='flex flex-col gap-4 w-1/3'>
                        {premier
                            .filter((item) => item.id <= 2)
                            .map((item) => (
                                <TrackItem key={item.id} {...item} id={undefined} />
                            ))}
                    </div>

                    <div className='flex flex-col gap-4 w-1/3'>
                        {premier
                            .filter((item) => item.id > 2 && item.id <= 4)
                            .map((item) => (
                                <TrackItem key={item.id} {...item} id={undefined} />
                            ))}
                    </div>

                    <div className='flex flex-col gap-4 w-1/3'>
                        {premier
                            .filter((item) => item.id > 4 && item.id <= 6)
                            .map((item) => (
                                <TrackItem key={item.id} {...item} id={undefined} />
                            ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
