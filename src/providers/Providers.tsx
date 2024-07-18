'use client';

import { Bitmask, Mashup, SelfUser, userFromObject } from '@/utils/types';
import React, { useEffect, useRef, useState } from 'react';
import TrackContext from '@/providers/track';
import PlayerContext from '@/providers/player';
import SearchContext, { CrossoverEntry } from '@/providers/search';
import AuthenticationContext from './authentication';
import { useApi } from '@/hooks/api';
import Cookies from 'js-cookie';
import { PlaylistLike } from '@/hooks/utils';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup>();

    const [query, setQuery] = useState<string>('');
    const [type, setType] = useState<'search' | 'crossover'>('search');
    const [crossoverEntries, setCrossoverEntries] = useState<CrossoverEntry[]>([]);

    const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistLike>();
    const [queue, setQueue] = useState<number[]>();
    const [currentMashup, setCurrentMashup] = useState<Mashup>();
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>();
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [paused, setPaused] = useState<boolean>(true);
    const [shuffle, setShuffle] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<'no' | 'playlist' | 'one'>('no');
    const [volume, setVolume] = useState<number>(0.05);

    const prevCurrentPlaylist = useRef<PlaylistLike>();

    useEffect(() => {
        if (!currentPlaylist) {
            setQueue(undefined);
            return;
        }

        if (
            prevCurrentPlaylist.current &&
            currentPlaylist.link === prevCurrentPlaylist.current.link
        ) {
            return;
        }

        if (shuffle) {
            let array = [...currentPlaylist.mashups];
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            setQueue(array);
        } else {
            setQueue([...currentPlaylist.mashups]);
        }
    }, [currentPlaylist]);

    const [user, setUser] = useState<SelfUser>();

    const api = useApi();

    useEffect(() => {
        let token = Cookies.get('token');

        if (!token) {
            return;
        }

        api.get('/user/get', { token })
            .then((response) => userFromObject(response.data.response))
            .then(async (user) => {
                let emailPromise = api.get('/user/get_email');
                let settingsPromise = api.get('/user/get_settings');

                let email: string = (await emailPromise).data.response;
                let settings: number = (await settingsPromise).data.response;

                let selfUser: SelfUser = {
                    ...user,
                    email: email,
                    settings: new Bitmask(settings)
                };

                setUser(selfUser);
            })
            .catch(() => {
                Cookies.remove('token');
            });
    }, []);

    return (
        <AuthenticationContext.Provider value={{ user: user }}>
            <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
                <PlayerContext.Provider
                    value={{
                        currentPlaylist,
                        setCurrentPlaylist,
                        queue,
                        setQueue,
                        currentMashup,
                        setCurrentMashup,
                        currentAudio,
                        setCurrentAudio,
                        currentTime,
                        setCurrentTime,
                        paused,
                        setPaused,
                        shuffle,
                        setShuffle,
                        repeat,
                        setRepeat,
                        volume,
                        setVolume
                    }}
                >
                    <SearchContext.Provider
                        value={{
                            query,
                            setQuery,
                            type,
                            setType,
                            crossoverEntries,
                            setCrossoverEntries
                        }}
                    >
                        {children}
                    </SearchContext.Provider>
                </PlayerContext.Provider>
            </TrackContext.Provider>
        </AuthenticationContext.Provider>
    );
}
