'use client';

import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import { useTranslations } from 'next-intl';
import { Mashup, MockMashup, MockPlaylist, Playlist } from '@/utils/types';
import { useContext, useReducer, useState } from 'react';
import {
    useMashupCache,
    usePlaylistCache,
    useRepositoryGetMany,
    useRepositoryRequest,
    useRepositoryStateSet
} from '@/hooks/repositories';
import { playlistLike, usePlayerUtils } from '@/hooks/utils';
import PauseIcon from '@/components/icons/PauseIcon';
import AuthenticationContext from '@/providers/authentication';
import SettingsIcon from '@/components/icons/SettingsIcon';
import ShareCurrentIcon from '@/components/icons/ShareCurrentPageIcon';
import EditModal from '@/components/playlist/EditModal';
import getWarningToast from '@/components/toast/Warning';
import { ToastBar, Toaster } from 'react-hot-toast';
import _ from 'lodash';

// TODO: think about name
export default function PlaylistPage({ params }: { params: { playlist_id: string } }) {
    const transl = useTranslations('pages.playlist');

    const [playlist, setPlaylist] = useState<Playlist>();
    const [mashups, setMashups] = useState<Mashup[]>();

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const playlistCache = usePlaylistCache();
    const mashupCache = useMashupCache();

    const playlistResponse = useRepositoryRequest(
        undefined,
        () => playlistCache.get(parseInt(params.playlist_id)),
        new MockPlaylist(),
        [update]
    );

    useRepositoryStateSet(
        playlistResponse,
        (p: Playlist | undefined) => setPlaylist(_.cloneDeep(p)),
        () => new MockPlaylist()
    );

    const mashupsResponse = useRepositoryGetMany(
        mashupCache,
        () => playlistResponse.promise.then((playlist) => (playlist ? playlist.mashups : [])),
        [update, playlist]
    );
    useRepositoryStateSet(mashupsResponse, setMashups, () =>
        playlist?.mashups.map(() => new MockMashup())
    );

    const playerUtils = usePlayerUtils();

    const { user } = useContext(AuthenticationContext);

    const [editing, setEditing] = useState(false);

    if (!playlist) {
        return <></>;
    }

    let isPlaying = playerUtils.isPlaying(undefined, playlistLike(playlist));

    const warning = getWarningToast;

    return (
        <div className='flex flex-col gap-6'>
            <EditModal
                modalIsOpen={editing}
                setModalIsOpen={setEditing}
                warning={warning}
                playlist={playlist}
                setPlaylist={setPlaylist}
            />
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={playlist.imageUrl + '_800x800.png'}
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
                        {isPlaying ? (
                            <PauseIcon
                                width={48}
                                height={48}
                                color='primary'
                                onClick={() => playerUtils.playPlaylist(playlistLike(playlist))}
                            />
                        ) : (
                            <PlayIcon
                                width={48}
                                height={48}
                                color='primary'
                                onClick={() => playerUtils.playPlaylist(playlistLike(playlist))}
                            />
                        )}
                        {user && playlist && playlist.authors.includes(user.username) && (
                            <SettingsIcon
                                width={28}
                                height={28}
                                color='onSurfaceVariant'
                                className='w-8 h-8 cursor-pointer'
                                onClick={() => setEditing(true)}
                            />
                        )}
                        <ShareCurrentIcon
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
                            image={item.imageUrl + '_100x100.png'}
                            author={item.authors.join(', ')}
                            title={item.name}
                            mashup={item}
                            playlist={playlistLike(playlist)}
                            explicit={item.statuses.isExplicit()}
                            forceUpdate={forceUpdate}
                            setPlaylist={setPlaylist}
                        />
                    ))}
                </div>
            )}

            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
