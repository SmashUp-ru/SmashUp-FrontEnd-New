'use client';

import { Mashup } from '@/utils/types';
import React, { useState } from 'react';
import TrackContext from '@/providers/track';
import PlayerContext from '@/providers/player';
import SearchContext, { CrossoverEntry } from '@/providers/search';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup>();

    const [type, setType] = useState<'search' | 'crossover'>('search');
    const [crossoverEntries, setCrossoverEntries] = useState<CrossoverEntry[]>([]);

    const [currentPlaylist, setCurrentPlaylist] = useState<number>();
    const [queue, setQueue] = useState<number[]>();
    const [currentMashup, setCurrentMashup] = useState<Mashup>();
    const [paused, setPaused] = useState<boolean>(true);
    const [shuffle, setShuffle] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<'no' | 'playlist' | 'one'>('no');

    return (
        <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
            <PlayerContext.Provider
                value={{
                    currentPlaylist,
                    setCurrentPlaylist,
                    queue,
                    setQueue,
                    currentMashup,
                    setCurrentMashup,
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
