'use client';

import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Track from '@/components/moderation/Track';

export default function Moderation() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='px-8 flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl'>Модерация</h1>

            <Tabs className='' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='inline-flex bg-surface rounded-xl mb-6'>
                    <Tab className='py-3 px-10 '>Ожидает проверки</Tab>
                    <Tab className='py-3 px-10'>Принятые</Tab>
                    <Tab className='py-3 px-10 '>Отклоненные</Tab>
                </TabList>

                {/*Ожидает проверки*/}
                <TabPanel className='flex flex-col gap-6'>
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                </TabPanel>

                {/*Принятые*/}
                <TabPanel className='flex flex-col gap-6'>
                    <h2>Принятые</h2>
                </TabPanel>

                {/*Отклоненные*/}
                <TabPanel className='flex flex-col gap-6'>
                    <h2>Отклоненные</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}
