'use client';

import { useContext, useEffect, useRef } from 'react';
import PlayerContext from '@/providers/player';
import { PlayerUtils, usePlayerUtils } from '@/hooks/utils';

let actualPaused: boolean = true;
let actualCurrentAudio: HTMLAudioElement | undefined = undefined;
let actualPlayerUtils: PlayerUtils | undefined = undefined;

export default function Player() {
    const { currentMashup, currentAudio, setCurrentAudio, paused, setPaused } =
        useContext(PlayerContext);

    const playerUtils = usePlayerUtils();

    useEffect(() => {
        actualPaused = paused;
    }, [paused]);

    useEffect(() => {
        actualPlayerUtils = playerUtils;
    }, [playerUtils]);

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            return;
        }

        initialized.current = true;
        const handleKey = (event: any) => {
            if (event.target === document.body) {
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
        actualCurrentAudio = currentAudio;
    }, [currentAudio]);

    useEffect(() => {
        if (currentAudio) {
            currentAudio.pause();
        }

        if (!currentMashup) {
            return;
        }

        let audio = new Audio('https://api.smashup.ru/uploads/mashup/' + currentMashup.id + '.mp3');
        console.log('Loaded', currentMashup.name);
        audio.volume = 0.05;
        setCurrentAudio(audio);

        audio.onended = () => {
            if (actualCurrentAudio === audio) {
                playerUtils.playNext(true);
            }
        };

        if (paused && setPaused) {
            setPaused(false);
        } else {
            audio.play();
        }
    }, [currentMashup]);

    useEffect(() => {
        if (currentAudio && !currentAudio.ended) {
            if (paused) {
                try {
                    currentAudio.pause();
                } catch (e) {
                    // eslint-disable-line
                }
            } else {
                currentAudio.play();
            }
        }
    }, [paused]);
}
