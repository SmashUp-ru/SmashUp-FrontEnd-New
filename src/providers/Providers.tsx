'use client';

import { Mashup } from '@/utils/types';
import React, { createContext, useState } from 'react';

export const TrackContext = createContext<{
    track?: Mashup;
    setTrack?: React.Dispatch<React.SetStateAction<Mashup | undefined>>;
}>({});

export class PlayerState {
    currentPlaylist: number;
    queue: number[];
    currentMashup: Mashup;
    paused: boolean;

    constructor(currentPlaylist: number, queue: number[], currentMashup: Mashup, paused: boolean) {
        this.currentPlaylist = currentPlaylist;
        this.queue = queue;
        this.currentMashup = currentMashup;
        this.paused = paused;
    }

    withChangedPaused(): PlayerState {
        return new PlayerState(this.currentPlaylist, this.queue, this.currentMashup, !this.paused);
    }
}

export const PlayerContext = createContext<{
    currentPlaylist?: number;
    setCurrentPlaylist?: React.Dispatch<React.SetStateAction<number | undefined>>;

    queue?: number[];
    setQueue?: React.Dispatch<React.SetStateAction<number[] | undefined>>;

    currentMashup?: Mashup;
    setCurrentMashup?: React.Dispatch<React.SetStateAction<Mashup | undefined>>;

    paused?: boolean;
    setPaused?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}>({});

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup | undefined>(undefined);

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
                {children}
            </PlayerContext.Provider>
        </TrackContext.Provider>
    );
}
