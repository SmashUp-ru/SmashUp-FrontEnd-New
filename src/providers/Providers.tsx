'use client';

import { Mashup } from '@/utils/types';
import React, { useState } from 'react';
import TrackContext from '@/providers/track';
import PlayerContext from '@/providers/player';
import SearchContext from '@/providers/search';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup | undefined>(undefined);

    const [type, setType] = useState<'search' | 'crossover'>('search');
    const [crossoverEntries, setCrossoverEntries] = useState<string[]>(['Oxxymiron']);

    const [currentPlaylist, setCurrentPlaylist] = useState<number | undefined>(undefined);
    const [queue, setQueue] = useState<number[] | undefined>(undefined);
    const [currentMashup, setCurrentMashup] = useState<Mashup | undefined>(undefined);
    const [paused, setPaused] = useState<boolean | undefined>(undefined);

    return (
        <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
            <PlayerContext.Provider
                value={{
                    currentPlaylist: currentPlaylist,
                    setCurrentPlaylist: setCurrentPlaylist,
                    queue: queue,
                    setQueue: setQueue,
                    currentMashup: currentMashup,
                    setCurrentMashup: setCurrentMashup,
                    paused: paused,
                    setPaused: setPaused
                }}
            >
                <SearchContext.Provider
                    value={{
                        type: type,
                        setType: setType,
                        crossoverEntries: crossoverEntries,
                        setCrossoverEntries: setCrossoverEntries
                    }}
                >
                    {children}
                </SearchContext.Provider>
            </PlayerContext.Provider>
        </TrackContext.Provider>
    );
}
