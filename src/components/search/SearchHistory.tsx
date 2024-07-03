'use client';

import { premier } from '@/utils/data';
import TrackItem from '@/components/TrackItem';
import ArtistItem from '@/components/ArtistItem';
import profile from '/public/dev/profile.png';
import React, { useContext, useState } from 'react';
import { useTranslations } from 'next-intl';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import SmashUpButton from '@/components/smashup/Button/Button';
import SearchContext from '@/providers/search';

export default function SearchHistory() {
    const t = useTranslations('pages.search_history');

    const { setType } = useContext(SearchContext);

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-3xl'>{t('title')}</h1>
                <div className='flex gap-4'>
                    <SmashUpButton
                        category={activeTab === 0 ? 'fill' : 'fill-default'}
                        className='px-4 py-2'
                        onClick={() => {
                            setActiveTab(0);
                            setType('search');
                        }}
                    >
                        {t('search')}
                    </SmashUpButton>
                    <SmashUpButton
                        category={activeTab === 1 ? 'fill' : 'fill-default'}
                        className='px-4 py-2'
                        onClick={() => {
                            setActiveTab(1);
                            setType('crossover');
                        }}
                    >
                        {t('crossover')}
                    </SmashUpButton>
                </div>
            </div>

            <Tabs activeTab={activeTab}>
                <Tab>
                    <div className='flex flex-col gap-2'>
                        {premier.map((item) => (
                            <TrackItem key={item.id} {...item} id={undefined} />
                        ))}
                        <ArtistItem image={profile} />
                    </div>
                </Tab>
                <Tab>Crossover</Tab>
            </Tabs>
        </div>
    );
}
