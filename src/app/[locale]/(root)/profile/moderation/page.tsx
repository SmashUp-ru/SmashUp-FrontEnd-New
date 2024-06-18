'use client';

import React, { useState } from 'react';
import Track from '@/components/moderation/Track';
import SmashUpButton from '@/components/smashup/Button/Button';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import { useTranslations } from 'next-intl';

export default function Moderation() {
    const [tabIndex, setTabIndex] = useState(0);
    const t = useTranslations('pages.moderation');

    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl'>{t('title')}</h1>

            {/*Селектор*/}
            <div className='flex flex-row gap-3'>
                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 0 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(0)}
                >
                    {t('pending')}
                </SmashUpButton>

                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 1 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(1)}
                >
                    {t('accepted')}
                </SmashUpButton>

                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 2 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(2)}
                >
                    {t('rejected')}
                </SmashUpButton>
            </div>

            <Tabs activeTab={tabIndex}>
                {/*Ожидает проверки*/}
                <Tab className='flex flex-col gap-6'>
                    <Track />
                    <Track />
                    <Track />
                </Tab>

                {/*Принятые*/}
                <Tab>
                    <div>{t('accepted')}</div>
                </Tab>

                {/*Отклонённые*/}
                <Tab>
                    <div>{t('rejected')}</div>
                </Tab>
            </Tabs>
        </div>
    );
}
