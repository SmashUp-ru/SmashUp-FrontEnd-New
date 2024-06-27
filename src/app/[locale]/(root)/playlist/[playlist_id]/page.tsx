'use client';
import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import HideIcon from '@/components/icons/HideButton';
import ShareIcon from '@/components/icons/ShareIcon';
import { useTranslations } from 'next-intl';
import {
    Mashup,
    MockMashup,
    MockPlaylist,
    Playlist,
    mashupFromObject,
    playlistFromObject
} from '@/utils/types';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// TODO: think about name
export default function PlaylistPage({ params }: { params: { playlist_id: number } }) {
    // TODO: change key
    const transl = useTranslations('pages.favorites');

    const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);
    const [mashups, setMashups] = useState<Mashup[] | undefined>(undefined);

    useEffect(() => {
        axios
            .get(`https://api.smashup.ru/playlist/get?id=${params.playlist_id}`)
            .then((res: AxiosResponse<{ response: Playlist[] }>) => {
                setPlaylist(playlistFromObject(res.data.response[0]));
            })
            .catch(() => {
                setPlaylist(new MockPlaylist());
            });
    }, [params.playlist_id]);

    useEffect(() => {
        if (!playlist || playlist.mashups.length === 0) {
            return;
        }

        axios
            .get(`https://api.smashup.ru/mashup/get?id=${playlist.mashups}`)
            .then((res: AxiosResponse<{ response: Mashup[] }>) => {
                setMashups(res.data.response.map((i) => mashupFromObject(i)));
            })
            .catch(() => {
                setMashups(playlist.mashups.map(() => new MockMashup()));
            });
    }, [playlist]);

    if (!playlist) {
        return;
    }

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={
                        'https://api.smashup.ru/uploads/playlist/' +
                        playlist.imageUrl +
                        '_800x800.png'
                    }
                    width={188}
                    height={188}
                    alt={playlist.name}
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('playlist')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>{playlist.name}</h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <PlayIcon width={48} height={48} color='primary' />
                        <HideIcon
                            width={26}
                            height={28}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        />
                        <ShareIcon
                            width={26}
                            height={22}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        />
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
                            image={
                                'https://api.smashup.ru/uploads/mashup/' +
                                item.imageUrl +
                                '_100x100.png'
                            }
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
