import { Mashup } from '@/utils/types';
import React, { createContext } from 'react';

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

const PlayerContext = createContext<{
    currentPlaylist?: number;
    setCurrentPlaylist?: React.Dispatch<React.SetStateAction<number | undefined>>;

    queue?: number[];
    setQueue?: React.Dispatch<React.SetStateAction<number[] | undefined>>;

    currentMashup?: Mashup;
    setCurrentMashup?: React.Dispatch<React.SetStateAction<Mashup | undefined>>;

    paused?: boolean;
    setPaused?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}>({});

export default PlayerContext;
