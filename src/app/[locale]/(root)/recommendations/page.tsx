'use client';

import favorites from '/public/icons/like.png';
import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import { useTranslations } from 'next-intl';
import { Mashup } from '@/utils/types';
import { useContext, useEffect, useState } from 'react';
import { useMashupCache } from '@/hooks/repositories';
import { useApi } from '@/hooks/api';
import { PlaylistLike, usePlayerUtils } from '@/hooks/utils';
import PauseIcon from '@/components/icons/PauseIcon';
import { shareRecommendations } from '@/utils/share';
import AuthenticationContext from '@/providers/authentication';

export default function Recommendations() {
    const transl = useTranslations('pages.playlist');

    const [mashupIds, setMashupIds] = useState<number[]>();
    const [mashups, setMashups] = useState<Mashup[] | undefined>(shareRecommendations.value);

    const mashupCache = useMashupCache();
    const api = useApi();
    const playerUtils = usePlayerUtils();

    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (user === undefined || mashups !== undefined) {
            return;
        }

        api.get('/recommendations/v2', { id: user.id }).then((response) => {
            let ids: number[] = response.data.response;
            setMashupIds(ids);
            mashupCache.getMany(ids).then((mashups) => {
                setMashups(mashups);
                shareRecommendations.value = mashups;
            });
        });
    }, [user]);

    let playlistLike: PlaylistLike = { mashups: mashupIds ? mashupIds : [], link: '/favorites' };

    let isPlaying = playerUtils.isPlaying(undefined, playlistLike);

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={favorites}
                    width={188}
                    height={188}
                    alt='Recommendations'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('compilation')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>
                            {transl('recommendations')}
                        </h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        {isPlaying ? (
                            <PauseIcon
                                width={48}
                                height={48}
                                color='primary'
                                onClick={() => playerUtils.playPlaylist(playlistLike)}
                            />
                        ) : (
                            <PlayIcon
                                width={48}
                                height={48}
                                color='primary'
                                onClick={() => playerUtils.playPlaylist(playlistLike)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Мэшапы */}
            {mashups && mashups.length > 0 && (
                <div className='flex flex-col gap-1'>
                    {mashups.map((item, index) => (
                        <TrackItem
                            key={item.id}
                            index={index + 1}
                            {...item}
                            image={item.imageUrl + '_100x100.png'}
                            author={item.authors.join(', ')}
                            title={item.name}
                            mashup={item}
                            explicit={item.statuses.isExplicit()}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
