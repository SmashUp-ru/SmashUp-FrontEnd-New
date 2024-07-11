'use client';

import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { useTranslations } from 'next-intl';
import { Mashup, MockMashup, MockUser, User } from '@/utils/types';
import { useState } from 'react';
import {
    useMashupCache,
    useRepositoryGetMany,
    useRepositoryRequest,
    useRepositoryStateSet,
    useUserCache
} from '@/hooks/repositories';
import { PlaylistLike, usePlayerUtils } from '@/hooks/utils';
import PauseIcon from '@/components/icons/PauseIcon';

// TODO: think about name
export default function AllMashups({ params }: { params: { username: string } }) {
    const transl = useTranslations('pages.playlist');

    const [user, setUser] = useState<User>();
    const [mashups, setMashups] = useState<Mashup[]>();

    const userCache = useUserCache();
    const mashupCache = useMashupCache();

    const userResponse = useRepositoryRequest(
        undefined,
        () => userCache.getByUsername(decodeURI(params.username)),
        new MockUser()
    );
    useRepositoryStateSet(userResponse, setUser, () => new MockUser());

    const mashupsResponse = useRepositoryGetMany(
        mashupCache,
        userResponse.promise.then((playlist) => (playlist ? playlist.mashups : []))
    );
    useRepositoryStateSet(mashupsResponse, setMashups, () =>
        user?.mashups.map(() => new MockMashup())
    );

    const playerUtils = usePlayerUtils();

    if (!user) {
        return <></>;
    }

    let playlistLike: PlaylistLike = {
        mashups: user.mashups,
        link: `/profile/${user.username}/mashups`
    };

    let isPlaying = playerUtils.isPlaying(undefined, playlistLike);

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={user.imageUrl + '_800x800.png'}
                    width={188}
                    height={188}
                    alt={user.username}
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('playlist')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>{user.username}</h1>
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
                        <ShareIcon
                            width={26}
                            height={22}
                            color='onSurfaceVariant'
                            className='w-8 h-8 cursor-pointer'
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
                            image={item.imageUrl + '_100x100.png'}
                            author={item.authors.join(', ')}
                            title={item.name}
                            mashup={item}
                            playlist={playlistLike}
                            explicit={item.statuses.isExplicit()}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
