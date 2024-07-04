'use client';

import { Mashup } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import TrackContext from '@/providers/track';
import PlayerContext from '@/providers/player';
import SearchContext, { CrossoverEntry } from '@/providers/search';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup>();

    const [query, setQuery] = useState<string>('');
    const [type, setType] = useState<'search' | 'crossover'>('search');
    const [crossoverEntries, setCrossoverEntries] = useState<CrossoverEntry[]>([]);

    const [currentPlaylist, setCurrentPlaylist] = useState<number>();
    const [originalQueue, setOriginalQueue] = useState<number[]>();
    const [queue, setQueue] = useState<number[]>();
    const [currentMashup, setCurrentMashup] = useState<Mashup>();
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>();
    const [paused, setPaused] = useState<boolean>(true);
    const [shuffle, setShuffle] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<'no' | 'playlist' | 'one'>('no');

    useEffect(() => {
        if (shuffle) {
            // TODO: shuffle
            setQueue(originalQueue);
        } else {
            setQueue(originalQueue);
        }
    }, [originalQueue]);

    return (
        <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
            <PlayerContext.Provider
                value={{
                    currentPlaylist,
                    setCurrentPlaylist,
                    originalQueue,
                    setOriginalQueue,
                    queue,
                    setQueue,
                    currentMashup,
                    setCurrentMashup,
                    currentAudio,
                    setCurrentAudio,
                    paused,
                    setPaused,
                    shuffle,
                    setShuffle,
                    repeat,
                    setRepeat
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
    );
}
