'use client';

import { useContext, useEffect, useRef } from 'react';
import PlayerContext from '@/providers/player';
import { PlayerUtils, usePlayerUtils } from '@/hooks/utils';

let actualPaused: boolean = true;
let actualPlayerUtils: PlayerUtils | undefined = undefined;

export default function Player() {
    const {
        currentPlaylist,
        setQueue,
        currentMashup,
        currentAudio,
        setCurrentAudio,
        setCurrentTime,
        paused,
        setPaused,
        shuffle,
        volume,
        currentTime
    } = useContext(PlayerContext);

    const playerUtils = usePlayerUtils();

    useEffect(() => {
        actualPaused = paused;
    }, [paused]);

    useEffect(() => {
        actualPlayerUtils = playerUtils;
    }, [playerUtils]);

    useEffect(() => {
        if (currentPlaylist) {
            if (shuffle) {
                let array = [...currentPlaylist.mashups];
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }

                if (currentMashup) {
                    let index = array.indexOf(currentMashup.id);
                    if (index > 0) {
                        [array[0], array[index]] = [array[index], array[0]];
                    }
                }

                setQueue(array);
            } else {
                setQueue([...currentPlaylist.mashups]);
            }
        }
    }, [shuffle]);

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            return;
        }

        initialized.current = true;
        const handleKey = (event: any) => {
            if (event.target.nodeName !== 'INPUT') {
                if (event.key === ' ') {
                    setPaused(!actualPaused);
                    event.preventDefault();
                } else if (event.key === 'ArrowRight') {
                    if (actualPlayerUtils) {
                        actualPlayerUtils.playNext(false);
                    }
                    event.preventDefault();
                } else if (event.key === 'ArrowLeft') {
                    if (actualPlayerUtils) {
                        actualPlayerUtils.playPrevious();
                    }
                    event.preventDefault();
                }
            }
        };

        document.addEventListener('keydown', handleKey, true);
    }, []);

    useEffect(() => {
        if (currentAudio) {
            currentAudio.pause();
        }

        if (!currentMashup) {
            return;
        }

        let audio = new Audio('https://api.smashup.ru/uploads/mashup/' + currentMashup.id + '.mp3');
        audio.volume = volume;
        setCurrentAudio(audio);
        setCurrentTime(0);

        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime);
        };

        if (paused && setPaused) {
            setPaused(false);
        } else {
            audio.play();
        }
    }, [currentMashup]);

    useEffect(() => {
        if (currentAudio && currentTime >= currentAudio.duration) {
            playerUtils.playNext(true);
        }
    }, [currentTime]);

    useEffect(() => {
        if (currentAudio) {
            if (paused) {
                try {
                    currentAudio.pause();
                } catch (e) {
                    // eslint-disable-line
                }
            } else {
                if (currentAudio.ended) {
                    currentAudio.currentTime = 0;
                    setCurrentTime(0);
                }

                currentAudio.play();
            }
        }
    }, [paused]);

    return <></>;
}
