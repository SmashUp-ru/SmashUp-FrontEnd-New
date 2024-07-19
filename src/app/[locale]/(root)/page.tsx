'use client';

import Card from '@/components/Card';
// import Banner from '@/components/banners/Banner';
// import IPadAd from '@/components/banners/IPadAd';
import Footer from '@/components/footer/Footer';
import React, { useContext, useEffect, useState } from 'react';
import TrackItem from '@/components/TrackItem';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mashup, Playlist } from '@/utils/types';
import { useApi } from '@/hooks/api';
import { useMashupCache, usePlaylistCache } from '@/hooks/repositories';
import { playlistLike, PlaylistLike, usePlayerUtils } from '@/hooks/utils';
import { shareRecommendations } from '@/utils/share';
import AuthenticationContext from '@/providers/authentication';

export default function Home() {
    const t = useTranslations('pages.home');

    const [recommendations, setRecommendations] = useState<Mashup[] | undefined>(
        shareRecommendations.value
    );

    const mashupCache = useMashupCache();
    const api = useApi();

    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (user === undefined || recommendations !== undefined) {
            return;
        }

        api.get('/recommendations/v2', { id: user.id }).then((response) => {
            let ids: number[] = response.data.response;
            mashupCache.getMany(ids).then((mashups) => {
                setRecommendations(mashups);
                shareRecommendations.value = mashups;
            });
        });
    }, [user]);

    const [recCol1, recCol2, recCol3] = recommendations
        ? [recommendations.slice(0, 2), recommendations.slice(2, 4), recommendations.slice(4, 6)]
        : [[], [], []];

    const recPlaylist: PlaylistLike | undefined = recommendations
        ? {
              link: '/recommendations/v2',
              mashups: recommendations.map((m) => m.id)
          }
        : undefined;

    const playerUtils = usePlayerUtils();

    const [compilations, setCompilations] = useState<Playlist[]>();

    const playlistCache = usePlaylistCache();

    useEffect(() => {
        playlistCache.getMany([1, 2, 3, 27, 1043]).then((playlists) => setCompilations(playlists));
    }, []);

    return (
        <div className='flex flex-col gap-12'>
            {/* Реклама */}
            {/* <Banner>
                <IPadAd />
            </Banner> */}

            {/* Подборки */}
            {compilations && (
                <div>
                    <h2 className='font-semibold text-2xl text-onSurface pb-5'>
                        {t('compilations.title')}
                    </h2>
                    <div className='flex flex-row gap-7 w-full h-[301px] overflow-visible'>
                        {compilations
                            .filter((item) => item.mashups.length > 0)
                            .map((item) => (
                                <Card
                                    key={item.id}
                                    showVisibleButton={false}
                                    href='playlist'
                                    {...item}
                                    image={item.imageUrl + '_400x400.png'}
                                    author={item.authors.join(', ')}
                                    title={item.name}
                                    isPlaying={playerUtils.isPlaying(undefined, playlistLike(item))}
                                    playAction={() => playerUtils.playPlaylist(playlistLike(item))}
                                    bg
                                />
                            ))}
                    </div>
                </div>
            )}

            {/* Недавно прослушано */}
            <div>
                {recommendations && (
                    <>
                        <div className='flex flex-row justify-between'>
                            <h2 className='font-semibold text-2xl text-onSurface pb-5'>
                                {t('recommendations.title')}
                            </h2>
                            <Link href='/recommendations'>
                                <span className='font-bold text-base text-onSurfaceVariant text-opacity-50 uppercase cursor-pointer'>
                                    {t('recommendations.button')}
                                </span>
                            </Link>
                        </div>
                        <div className='flex flex-row flex-wrap'>
                            <div className='flex flex-col gap-4 w-1/3'>
                                {recCol1.map((item, index) => (
                                    <TrackItem
                                        key={item.id}
                                        index={1 + index}
                                        {...item}
                                        image={item.imageUrl + '_100x100.png'}
                                        author={item.authors.join(', ')}
                                        title={item.name}
                                        mashup={item}
                                        explicit={item.statuses.isExplicit()}
                                        playlist={recPlaylist as PlaylistLike}
                                    />
                                ))}
                            </div>

                            <div className='flex flex-col gap-4 w-1/3'>
                                {recCol2.map((item, index) => (
                                    <TrackItem
                                        key={item.id}
                                        index={3 + index}
                                        {...item}
                                        image={item.imageUrl + '_100x100.png'}
                                        author={item.authors.join(', ')}
                                        title={item.name}
                                        mashup={item}
                                        explicit={item.statuses.isExplicit()}
                                        playlist={recPlaylist as PlaylistLike}
                                    />
                                ))}
                            </div>

                            <div className='flex flex-col gap-4 w-1/3'>
                                {recCol3.map((item, index) => (
                                    <TrackItem
                                        key={item.id}
                                        index={5 + index}
                                        {...item}
                                        image={item.imageUrl + '_100x100.png'}
                                        author={item.authors.join(', ')}
                                        title={item.name}
                                        mashup={item}
                                        explicit={item.statuses.isExplicit()}
                                        playlist={recPlaylist as PlaylistLike}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
}
