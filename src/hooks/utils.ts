import { Mashup, Playlist } from '@/utils/types';
import PlayerContext, { PlayerContextType } from '@/providers/player';
import { useContext } from 'react';
import TrackContext, { TrackContextType } from '@/providers/track';

export interface PlaylistLike {
    id: number;
    mashups: number[];
    link: string;
}

export function playlistLike(playlist: Playlist): PlaylistLike {
    return {
        id: playlist.id,
        mashups: playlist.mashups,
        link: `/playlist/${playlist.id}`
    };
}

export class PlayerUtils {
    context: PlayerContextType;

    constructor(context: PlayerContextType) {
        this.context = context;
    }

    playMashup(mashup: Mashup, playlist?: PlaylistLike) {
        if (!this.context.currentMashup || this.context.currentMashup.id !== mashup.id) {
            if (playlist) {
                this.context.setOriginalQueue(playlist.mashups);
            } else {
                this.context.setOriginalQueue([mashup.id]);
            }

            this.context.setCurrentMashup(mashup);
        } else {
            this.context.setPaused(!this.context.paused);
        }
    }

    // eslint-disable-next-line no-unused-vars
    isPlaying(mashup: Mashup, playlist?: PlaylistLike) {
        return this.context.currentMashup?.id === mashup.id && !this.context.paused;
    }
}

export function usePlayerUtils(): PlayerUtils {
    return new PlayerUtils(useContext(PlayerContext));
}

export class MashupSideSheetUtils {
    context: TrackContextType;

    constructor(context: TrackContextType) {
        this.context = context;
    }

    open(mashup: Mashup) {
        if (this.context.track && this.context.track.id === mashup.id) {
            this.context.setTrack(undefined);
        } else {
            this.context.setTrack(mashup);
        }
    }
}

export function useMashupSideSheetUtils(): MashupSideSheetUtils {
    return new MashupSideSheetUtils(useContext(TrackContext));
}
