'use client';

import React, { useState } from 'react';
import SmashUpButton from '@/components/smashup/Button/Button';
import Card from '@/components/Card';
import egor from '/public/dev/search/egor.png';
import letov from '/public/dev/search/letov.png';
import ArtistCard from '@/components/ArtistCard';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import { useTranslations } from 'next-intl';

export default function SearchResults({ q }: { q: string }) {
    const [activeTab, setActiveTab] = useState(0);
    const transl = useTranslations('search_results');
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row items-center gap-4'>
                <SmashUpButton
                    category={activeTab === 0 ? 'fill' : 'fill-default'}
                    className='px-4 py-2'
                    onClick={() => setActiveTab(0)}
                >
                    {transl('all')}
                </SmashUpButton>
                <SmashUpButton
                    category={activeTab === 1 ? 'fill' : 'fill-default'}
                    className='px-4 py-2'
                    onClick={() => setActiveTab(1)}
                >
                    {transl('mashups')}
                </SmashUpButton>
                <SmashUpButton
                    category={activeTab === 2 ? 'fill' : 'fill-default'}
                    className='px-4 py-2'
                    onClick={() => setActiveTab(2)}
                >
                    {transl('authors')}
                </SmashUpButton>
                <SmashUpButton
                    category={activeTab === 3 ? 'fill' : 'fill-default'}
                    className='px-4 py-2'
                    onClick={() => setActiveTab(3)}
                >
                    {transl('playlists')}
                </SmashUpButton>
            </div>

            <Tabs activeTab={activeTab}>
                {/*Лучшие результаты*/}
                <Tab>
                    <div>
                        <h1 className='font-semibold text-3xl'>{transl('best_results')}{q}</h1>
                        <div className='flex flex-row items-center overflow-hidden'>
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-semibold text-3xl'>{transl('mashups')}</h1>
                        <div className='flex flex-row items-center overflow-hidden'>
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-semibold text-3xl'>{transl('authors')}</h1>
                        <div className='flex flex-row items-center overflow-hidden'>
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                            <ArtistCard
                                id={0}
                                title='Егор Летов'
                                description={transl('with_artist')}
                                image={letov}
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-semibold text-3xl'>{transl('playlists')}</h1>
                        <div className='flex flex-row items-center overflow-hidden'>
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                            <Card
                                id={0}
                                title='Егор комсомольцев'
                                author='Егор ЛетоОоО'
                                image={egor}
                            />
                        </div>
                    </div>
                </Tab>

                {/*Мэшапы*/}
                <Tab>
                    <div>{transl('mashups')}</div>
                </Tab>

                {/*Авторы*/}
                <Tab>
                    <div>{transl('authors')}</div>
                </Tab>

                {/*Плейлисты*/}
                <Tab>
                    <div>{transl('playlists')}</div>
                </Tab>
            </Tabs>
        </div>
    );
}
