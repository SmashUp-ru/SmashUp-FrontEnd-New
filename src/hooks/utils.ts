import { Mashup, Playlist } from '@/utils/types';
import PlayerContext, { PlayerContextType } from '@/providers/player';
import { useContext } from 'react';
import TrackContext, { TrackContextType } from '@/providers/track';
import { ApiCachingRepository, useMashupCache } from './repositories';
import _ from 'lodash';

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
        const { setCurrentPlaylist, currentMashup, setCurrentMashup, paused, setPaused } =
            this.context;

        if (!currentMashup || currentMashup.id !== mashup.id) {
            if (playlist) {
                setCurrentPlaylist(playlist);
            } else {
                setCurrentPlaylist({ mashups: [mashup.id], link: `/mashup/${mashup.id}` });
            }

            setCurrentMashup(mashup);
        } else {
            setPaused(!paused);
        }
    }

    playPlaylist(playlist: PlaylistLike) {
        if (playlist.mashups.length === 0) {
            return;
        }

        const {
            shuffle,
            currentPlaylist,
            setCurrentPlaylist,
            setCurrentMashup,
            paused,
            setPaused
        } = this.context;

        if (!_.isEqual(currentPlaylist, playlist)) {
            setCurrentPlaylist(undefined);
            setCurrentMashup(undefined);

            let index = shuffle ? Math.floor(Math.random() * playlist.mashups.length) : 0;
            this.mashupCache.get(playlist.mashups[index]).then((mashup) => {
                setCurrentPlaylist(playlist);
                setCurrentMashup(mashup);
            });
        } else {
            setPaused(!paused);
        }
    }

    isPlaying(mashup?: Mashup, playlist?: PlaylistLike) {
        const { paused } = this.context;

        return this.isCurrent(mashup, playlist) && !paused;
    }

    isCurrent(mashup?: Mashup, playlist?: PlaylistLike) {
        if (mashup) {
            const { currentPlaylist, currentMashup } = this.context;

            return playlist?.link === currentPlaylist?.link && currentMashup?.id === mashup.id;
        } else {
            const { currentPlaylist } = this.context;

            return playlist?.link === currentPlaylist?.link;
        }
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

    playPrevious() {
        const { queue, currentMashup, setCurrentMashup, currentAudio, setPaused, setCurrentTime } =
            this.context;

        if (currentAudio && currentAudio.currentTime > 5000) {
            currentAudio.currentTime = 0;
            setCurrentTime(0);
            return;
        }

        if (currentMashup && queue) {
            let index = queue.indexOf(currentMashup.id);

            if (index === 0) {
                index = queue.length - 1;
            } else {
                index--;
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
