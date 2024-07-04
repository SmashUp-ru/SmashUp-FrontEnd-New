import { Mashup, Playlist } from '@/utils/types';
import PlayerContext, { PlayerContextType } from '@/providers/player';
import { useContext } from 'react';
import TrackContext, { TrackContextType } from '@/providers/track';
import { ApiCachingRepository, useMashupCache } from './repositories';

export interface PlaylistLike {
    mashups: number[];
    link: string;
}

export function playlistLike(playlist: Playlist): PlaylistLike {
    return {
        mashups: playlist.mashups,
        link: `/playlist/${playlist.id}`
    };
}

export class PlayerUtils {
    context: PlayerContextType;
    mashupCache: ApiCachingRepository<Mashup>;

    constructor(context: PlayerContextType, mashupCache: ApiCachingRepository<Mashup>) {
        this.context = context;
        this.mashupCache = mashupCache;
    }

    playMashup(mashup: Mashup, playlist?: PlaylistLike) {
        const { setOriginalQueue, currentMashup, setCurrentMashup, paused, setPaused } =
            this.context;

        if (!currentMashup || currentMashup.id !== mashup.id) {
            if (playlist) {
                setOriginalQueue(playlist.mashups);
                console.log(playlist.mashups);
            } else {
                setOriginalQueue([mashup.id]);
            }

            setCurrentMashup(mashup);
        } else {
            setPaused(!paused);
        }
    }

    // eslint-disable-next-line no-unused-vars
    isPlaying(mashup: Mashup, playlist?: PlaylistLike) {
        const { currentMashup, paused } = this.context;

        return currentMashup?.id === mashup.id && !paused;
    }

    playNext(naturally: boolean) {
        const { queue, currentMashup, setCurrentMashup, currentAudio, setPaused, repeat } =
            this.context;

        if (naturally && repeat === 'one') {
            if (currentAudio) {
                currentAudio.currentTime = 0;
            }
            return;
        }

        if (currentMashup && queue) {
            let index = queue.indexOf(currentMashup.id);

            if (index === queue.length - 1) {
                if (naturally && repeat === 'no') {
                    setPaused(true);
                    if (currentAudio) {
                        currentAudio.currentTime = 0;
                    }
                    return;
                } else {
                    index = 0;
                }
            } else {
                index++;
            }

            this.mashupCache.get(queue[index]).then((mashup) => {
                setCurrentMashup(mashup);
            });
        } else {
            setPaused(true);
            if (currentAudio) {
                currentAudio.currentTime = 0;
            }
        }
    }

    playPrevious() {}
}

export function usePlayerUtils(): PlayerUtils {
    return new PlayerUtils(useContext(PlayerContext), useMashupCache());
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
