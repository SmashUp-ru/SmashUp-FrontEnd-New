'use client';

import { useContext, useEffect, useState } from 'react';
import PlayerContext from '@/providers/player';
import { useMashupCache } from '@/hooks/repositories';

let actualPaused: boolean = true;

export default function Player() {
    const { queue, currentMashup, setCurrentMashup, paused, setPaused, repeat } =
        useContext(PlayerContext);

    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>();
    const mashupCache = useMashupCache();

    const handleKey = (event: any) => {
        if (event.key === ' ' && event.target === document.body) {
            setPaused(!actualPaused);
            event.preventDefault();
        }
    };

    useEffect(() => {
        actualPaused = paused;
    }, [paused]);

    useEffect(() => {
        if (currentAudio) {
            document.addEventListener('keydown', handleKey, true);
        }

        return () => {
            document.removeEventListener('keydown', handleKey);
        };
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
            if (repeat === 'one') {
                audio.currentTime = 0;
                return;
            }

            if (currentMashup && queue) {
                let index = queue.indexOf(currentMashup.id);

                if (index === queue.length - 1) {
                    if (repeat === 'playlist') {
                        index = 0;
                    } else {
                        setPaused(true);
                        audio.currentTime = 0;
                        return;
                    }
                } else {
                    index++;
                }

                mashupCache.get(queue[index]).then((mashup) => {
                    setCurrentMashup(mashup);
                });
            } else {
                setPaused(true);
                audio.currentTime = 0;
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

    // return <>{currentMashup ? JSON.stringify(currentMashup) : 'undefined'}</>;
}
