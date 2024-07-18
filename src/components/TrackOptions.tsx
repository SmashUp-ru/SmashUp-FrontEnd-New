'use client';

import { Popover } from 'react-tiny-popover';
import React, { useContext, useEffect, useState } from 'react';
import AuthenticationContext from '@/providers/authentication';
import { usePlaylistCache } from '@/hooks/repositories';
import { Mashup, Playlist } from '@/utils/types';
import { useApi } from '@/hooks/api';
import getWarningToast from './toast/Warning';
import { useTranslations } from 'next-intl';
import { playlistLike, usePlayerUtils } from '@/hooks/utils';
import PlayerContext from '@/providers/player';
import _ from 'lodash';

export default function TrackOptions({
    mashup,
    playlist,
    forceUpdate,
    setPlaylist
}: {
    mashup: Mashup;
    playlist?: Playlist;
    forceUpdate?: React.DispatchWithoutAction;
    setPlaylist?: React.Dispatch<React.SetStateAction<Playlist | undefined>>;
}) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isPlaylistsPopoverOpen, setIsPlaylistsPopoverOpen] = useState(false);

    const { user } = useContext(AuthenticationContext);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const playlistCache = usePlaylistCache();
    const api = useApi();

    useEffect(() => {
        if (user) {
            playlistCache.getMany(user.playlists).then((playlists) => setPlaylists(playlists));
        }
    }, [user]);

    const warning = getWarningToast;

    const transl = useTranslations('components.mashup_options');

    const playerUtils = usePlayerUtils();
    const { queue, setQueue, currentPlaylist, setCurrentPlaylist, shuffle } =
        useContext(PlayerContext);

    let playlistsJsx;
    if (user && playlists.length > 0) {
        playlistsJsx = (
            <Popover
                isOpen={isPlaylistsPopoverOpen}
                positions={['left']}
                content={
                    <div className='bg-surface p-4 m-4 flex flex-col gap-4 rounded'>
                        {playlists.map((p, index) => (
                            <div
                                key={index}
                                className='cursor-pointer'
                                onClick={() => {
                                    setIsPopoverOpen(false);
                                    setIsPlaylistsPopoverOpen(false);

                                    api.post(`/playlist/add_mashup?id=${p.id}&mashup=${mashup.id}`)
                                        .then(() => {
                                            p.mashups.push(mashup.id);
                                            warning(transl('messages.success'), 'success');

                                            if (
                                                queue &&
                                                currentPlaylist &&
                                                playerUtils.isCurrent(undefined, playlistLike(p))
                                            ) {
                                                let newCurrentPlaylist =
                                                    _.cloneDeep(currentPlaylist);
                                                newCurrentPlaylist.mashups.push(mashup.id);

                                                let newQueue;

                                                if (shuffle) {
                                                    let index = Math.floor(
                                                        Math.random() * queue.length
                                                    );
                                                    newQueue = [
                                                        ...queue.slice(0, index),
                                                        mashup.id,
                                                        ...queue.slice(index)
                                                    ];
                                                } else {
                                                    newQueue = [...queue];
                                                    newQueue.push(mashup.id);
                                                }

                                                setQueue(newQueue);
                                                setCurrentPlaylist(newCurrentPlaylist);
                                            }
                                        })
                                        .catch(() => {
                                            warning(transl('messages.already_added'), 'error');
                                        });
                                }}
                            >
                                {p.name}
                            </div>
                        ))}
                    </div>
                }
            >
                <div
                    className='cursor-pointer'
                    onClick={() => {
                        setIsPlaylistsPopoverOpen(!isPlaylistsPopoverOpen);
                    }}
                >
                    {transl('add_to_playlist')}
                </div>
            </Popover>
        );
    } else {
        playlistsJsx = undefined;
    }

    let removeJsx;
    if (
        user &&
        forceUpdate &&
        setPlaylist &&
        playlist &&
        playlist.authors.includes(user.username)
    ) {
        removeJsx = (
            <div
                className='cursor-pointer'
                onClick={() => {
                    setIsPopoverOpen(false);
                    setIsPlaylistsPopoverOpen(false);

                    api.post(`/playlist/remove_mashup?id=${playlist.id}&mashup=${mashup.id}`).then(
                        () => {
                            let index = playlist.mashups.indexOf(mashup.id);
                            playlist.mashups.splice(index, 1);
                            warning(transl('messages.success'), 'success');
                            forceUpdate();

                            if (
                                queue &&
                                currentPlaylist &&
                                playerUtils.isCurrent(undefined, playlistLike(playlist))
                            ) {
                                let newCurrentPlaylist = _.cloneDeep(currentPlaylist);
                                newCurrentPlaylist.mashups.splice(index, 1);

                                index = queue.indexOf(mashup.id);
                                let newQueue = [...queue];
                                newQueue.splice(index, 1);

                                setQueue(newQueue);
                                setCurrentPlaylist(newCurrentPlaylist);
                            }
                        }
                    );
                }}
            >
                {transl('remove_from_playlist')}
            </div>
        );
    } else {
        removeJsx = undefined;
    }

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['left']}
            content={
                <div className='bg-surface p-4 m-4 flex flex-col gap-4 rounded'>
                    <p className='cursor-pointer'>{transl('share')}</p>
                    {removeJsx}
                    {playlistsJsx}
                </div>
            }
        >
            <div
                className='cursor-pointer'
                onClick={() => {
                    setIsPopoverOpen(!isPopoverOpen);
                    setIsPlaylistsPopoverOpen(false);
                }}
            >
                {'...'}
            </div>
        </Popover>
    );
}
