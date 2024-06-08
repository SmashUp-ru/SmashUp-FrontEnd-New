'use client';

import React, { useState } from 'react';
import Track from '@/components/moderation/Track';
import SmashUpButton from '@/components/smashup/Button/Button';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';

export default function Moderation() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='px-8 flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl'>Модерация</h1>

            {/*Селектор*/}
            <div className='flex flex-row gap-3'>
                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 0 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(0)}
                >
                    Ожидает проверки
                </SmashUpButton>

                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 1 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(1)}
                >
                    Принятые
                </SmashUpButton>

                <SmashUpButton
                    className='px-4 py-2'
                    category={tabIndex === 2 ? 'fill' : 'fill-default'}
                    onClick={() => setTabIndex(2)}
                >
                    Отклонённые
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
                    <div>Принятые</div>
                </Tab>

                {/*Отклонённые*/}
                <Tab>
                    <div>Отклонённые</div>
                </Tab>
            </Tabs>
        </div>
    );
}
