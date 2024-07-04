import { useTranslations } from 'next-intl';
import React, { useContext, useState } from 'react';
import SmashUpButton from '../smashup/Button/Button';
import SearchContext from '@/providers/search';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import CrossoverSearchResults from './CrossoverSearchResults';

export default function SearchButtons({
    children,
    title
}: {
    children: React.ReactNode;
    title: string;
}) {
    const [activeTab, setActiveTab] = useState(0);

    const { crossoverEntries, setType } = useContext(SearchContext);

    const transl = useTranslations('pages.search.buttons');

    return (
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-between mb-4'>
                <h1 className='font-semibold text-3xl'>{title}</h1>
                <div className='flex gap-4'>
                    <SmashUpButton
                        category={activeTab === 0 ? 'fill' : 'fill-default'}
                        className='px-4 py-2'
                        onClick={() => {
                            setActiveTab(0);
                            setType('search');
                        }}
                    >
                        {transl('search')}
                    </SmashUpButton>
                    <SmashUpButton
                        category={activeTab === 1 ? 'fill' : 'fill-default'}
                        className='px-4 py-2'
                        onClick={() => {
                            setActiveTab(1);
                            setType('crossover');
                        }}
                    >
                        {transl('crossover')}
                    </SmashUpButton>
                </div>
            </div>

            <Tabs activeTab={activeTab}>
                <Tab>{children}</Tab>
                <Tab>{crossoverEntries.length > 0 && <CrossoverSearchResults />}</Tab>
            </Tabs>
        </div>
    );
}
