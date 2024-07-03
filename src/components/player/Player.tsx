'use client';

import { useContext, useEffect, useState } from 'react';
import PlayerContext from '@/providers/player';

export default function Player() {
    const { currentMashup, paused, setPaused } = useContext(PlayerContext);

    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | undefined>();
    // const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (currentAudio) {
            currentAudio.pause();
        }

        if (!currentMashup) {
            return;
        }

        // let currentIndex = index + 0;

        let audio = new Audio('https://api.smashup.ru/uploads/mashup/' + currentMashup.id + '.mp3');
        console.log('Loaded', currentMashup.name);
        audio.volume = 0.05;
        setCurrentAudio(audio);

        if (paused && setPaused) {
            setPaused(false);
        } else {
            audio.play();
        }
    }, [currentMashup]);

    useEffect(() => {
        console.log('UPDATE', paused);
        if (paused === undefined) {
            return;
        }

        if (currentAudio) {
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

    return <>{currentMashup ? JSON.stringify(currentMashup) : 'undefined'}</>;
}
