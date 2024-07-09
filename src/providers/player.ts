import { PlaylistLike } from '@/hooks/utils';
import { Mashup } from '@/utils/types';
import React, { createContext } from 'react';

export interface PlayerContextType {
    currentPlaylist?: PlaylistLike;
    setCurrentPlaylist: React.Dispatch<React.SetStateAction<PlaylistLike | undefined>>;

    queue?: number[];
    setQueue: React.Dispatch<React.SetStateAction<number[] | undefined>>;

    currentMashup?: Mashup;
    setCurrentMashup: React.Dispatch<React.SetStateAction<Mashup | undefined>>;

    currentAudio?: HTMLAudioElement;
    setCurrentAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | undefined>>;

    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;

    paused: boolean;
    setPaused: React.Dispatch<React.SetStateAction<boolean>>;

    shuffle: boolean;
    setShuffle: React.Dispatch<React.SetStateAction<boolean>>;

    repeat: 'no' | 'playlist' | 'one';
    setRepeat: React.Dispatch<React.SetStateAction<'no' | 'playlist' | 'one'>>;

    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const PlayerContext = createContext<PlayerContextType>({
    setCurrentPlaylist: () => {},

    setQueue: () => {},

    setCurrentMashup: () => {},

    setCurrentAudio: () => {},

    currentTime: 0,
    setCurrentTime: () => {},

    paused: true,
    setPaused: () => {},

    // TODO: load shuffle from cookie
    shuffle: false,
    setShuffle: () => {},

    repeat: 'no',
    setRepeat: () => {},

    volume: 0,
    setVolume: () => {}
});

export default PlayerContext;
