'use client';

import React, { useEffect, useState } from 'react';
import SmashUpButton from '@/components/smashup/Button/Button';
import Card from '@/components/Card';
import ArtistCard from '@/components/ArtistCard';
import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import { useTranslations } from 'next-intl';
import {
    Mashup,
    Playlist,
    Track,
    TrackAuthor,
    User,
    mashupFromObject,
    playlistFromObject,
    trackAuthorFromObject,
    trackFromObject,
    userFromObject
} from '@/utils/types';
import { Api, useApi } from '@/hooks/api';
import {
    AbstractCachingRepository,
    Holder,
    useMashupCache,
    usePlaylistCache,
    useTrackAuthorCache,
    useTrackCache,
    useUserCache
} from '@/hooks/repositories';
import MashupCard from '../MashupCard';

function search<R extends { id: number }>(
    api: Api,
    endpoint: string,
    query: string,
    // eslint-disable-next-line no-unused-vars
    mapper: (o: object) => R,
    cache: AbstractCachingRepository<R>,
    setter: React.Dispatch<React.SetStateAction<R[] | undefined>>
) {
    api.get(`/${endpoint}/search`, { query }).then((response) => {
        // TODO: limit at API
        let result: R[] = response.data.response.map(mapper);
        if (result.length > 5) {
            result = result.slice(0, 5);
        }

        setter(result);
        for (let entity of result) {
            cache.storage.set(entity.id, new Holder(entity));
        }
    });
}

export default function SearchResults({ query }: { query: string }) {
    const [activeTab, setActiveTab] = useState(0);
    const transl = useTranslations('pages.search.results');

    const api = useApi();

    const [mashups, setMashups] = useState<Mashup[]>();
    const [playlists, setPlaylists] = useState<Playlist[]>();
    const [users, setUsers] = useState<User[]>();
    const [trackAuthors, setTrackAuthors] = useState<TrackAuthor[]>();
    const [tracks, setTracks] = useState<Track[]>();

    const mashupCache = useMashupCache();
    const playlistCache = usePlaylistCache();
    const userCache = useUserCache();
    const trackCache = useTrackCache();
    const trackAuthorCache = useTrackAuthorCache();

    useEffect(() => {
        let finalQuery = query.trim();
        if (finalQuery.length >= 4 && finalQuery.length <= 32) {
            search(api, 'mashup', finalQuery, mashupFromObject, mashupCache, setMashups);
            search(api, 'playlist', finalQuery, playlistFromObject, playlistCache, setPlaylists);
            search(api, 'user', finalQuery, userFromObject, userCache, setUsers);
            search(api, 'track', finalQuery, trackFromObject, trackCache, setTracks);
            search(
                api,
                'track_author',
                finalQuery,
                trackAuthorFromObject,
                trackAuthorCache,
                setTrackAuthors
            );
        }
    }, [query]);

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
                    {/* <div>
                        <h1 className='font-semibold text-3xl'>{transl('best_results')}</h1>
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
                    </div> */}

                    {mashups && mashups.length > 0 && (
                        <div>
                            <h1 className='font-semibold text-3xl'>{transl('mashups')}</h1>
                            <div className='flex flex-row items-center overflow-hidden'>
                                {mashups.map((mashup, index) => (
                                    <MashupCard key={index} mashup={mashup} />
                                ))}
                            </div>
                        </div>
                    )}

                    {trackAuthors && trackAuthors.length > 0 && (
                        <div>
                            <h1 className='font-semibold text-3xl'>{transl('authors')}</h1>
                            <div className='flex flex-row items-center overflow-hidden'>
                                {trackAuthors.map((item, index) => (
                                    <ArtistCard
                                        key={index}
                                        id={item.id}
                                        title={item.name}
                                        description={transl('with_artist')}
                                        image={item.imageUrl + '_400x400.png'}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {playlists && playlists.length > 0 && (
                        <div>
                            <h1 className='font-semibold text-3xl'>{transl('playlists')}</h1>
                            <div className='flex flex-row items-center overflow-hidden'>
                                {playlists.map((item, index) => (
                                    <Card
                                        key={index}
                                        showVisibleButton={false}
                                        href='playlist'
                                        {...item}
                                        image={item.imageUrl + '_400x400.png'}
                                        author={item.authors.join(', ')}
                                        title={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {users && <></>}
                    {tracks && <></>}
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
