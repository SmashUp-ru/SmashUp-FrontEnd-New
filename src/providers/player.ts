import { Mashup } from '@/utils/types';
import React, { createContext } from 'react';

export interface PlayerContextType {
    currentPlaylist?: number;
    setCurrentPlaylist: React.Dispatch<React.SetStateAction<number | undefined>>;

    originalQueue?: number[];
    setOriginalQueue: React.Dispatch<React.SetStateAction<number[] | undefined>>;

    queue?: number[];
    setQueue: React.Dispatch<React.SetStateAction<number[] | undefined>>;

    currentMashup?: Mashup;
    setCurrentMashup: React.Dispatch<React.SetStateAction<Mashup | undefined>>;

    paused: boolean;
    setPaused: React.Dispatch<React.SetStateAction<boolean>>;

    shuffle: boolean;
    setShuffle: React.Dispatch<React.SetStateAction<boolean>>;

    repeat: 'no' | 'playlist' | 'one';
    setRepeat: React.Dispatch<React.SetStateAction<'no' | 'playlist' | 'one'>>;
}

const PlayerContext = createContext<PlayerContextType>({
    setCurrentPlaylist: () => {},

    setQueue: () => {},

    setOriginalQueue: () => {},

    setCurrentMashup: () => {},

    paused: true,
    setPaused: () => {},

    // TODO: load shuffle from cookie
    shuffle: false,
    setShuffle: () => {},

    repeat: 'no',
    setRepeat: () => {}
});

export default PlayerContext;
