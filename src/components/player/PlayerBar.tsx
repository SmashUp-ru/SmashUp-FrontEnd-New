import { useMashupSideSheetUtils, usePlayerUtils } from '@/hooks/utils';
import PlayerContext from '@/providers/player';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useRef } from 'react';
import ReactSlider from 'react-slider';
import { twMerge } from 'tailwind-merge';
import VolumeIcon from '../icons/VolumeIcon';
import PreviousIcon from '../icons/PreviousIcon';
import PlayIcon from '../icons/PlayIcon';
import NextIcon from '../icons/NextIcon';
import ShuffleIcon from '../icons/ShuffleIcon';
import PauseIcon from '../icons/PauseIcon';
import PlayerRepeatIcon from '../icons/PlayerRepeatIcon';

export default function PlayerBar() {
    const {
        currentMashup,
        currentAudio,
        currentTime,
        setCurrentTime,
        paused,
        setPaused,
        shuffle,
        setShuffle,
        repeat,
        setRepeat,
        volume,
        setVolume
    } = useContext(PlayerContext);

    const playerUtils = usePlayerUtils();
    const mashupSideSheetUtils = useMashupSideSheetUtils();

    const lastAudio1 = useRef<HTMLAudioElement>();
    const lastAudio2 = useRef<HTMLAudioElement>();
    const lastAudio3 = useRef<HTMLAudioElement>();
    const lastAudio4 = useRef<HTMLAudioElement>();

    if (!currentMashup) {
        return <></>;
    }

    // TODO: ==^)
    let finalTime;
    if (currentAudio !== lastAudio1.current) {
        finalTime = 0;
        lastAudio1.current = currentAudio;
    } else if (currentAudio !== lastAudio2.current) {
        finalTime = 0;
        lastAudio2.current = currentAudio;
    } else if (currentAudio !== lastAudio3.current) {
        finalTime = 0;
        lastAudio3.current = currentAudio;
    } else if (currentAudio !== lastAudio4.current) {
        finalTime = 0;
        lastAudio4.current = currentAudio;
    } else {
        finalTime = currentTime;
    }

    return (
        <>
            <ReactSlider
                min={0}
                max={currentMashup.duration / 10}
                value={finalTime * 100}
                className={'h-2 absolute top-1 -mt-1'}
                renderTrack={(props, state) => {
                    return (
                        <div
                            {...props}
                            className={twMerge(
                                'h-2',
                                state.index === 0
                                    ? 'bg-primary rounded-l'
                                    : 'bg-onPrimary rounded-r'
                            )}
                            key={props.key}
                        />
                    );
                }}
                onAfterChange={(value) => {
                    value /= 100;
                    if (currentAudio) {
                        currentAudio.currentTime = value;
                    }
                    setCurrentTime(value);
                }}
            ></ReactSlider>
            <div className='mb-4 flex items-center justify-between bg-surfaceVariant rounded-b-2xl px-4 py-4 relative'>
                <div className='flex flex-row max-w-1/3 overflow-hidden'>
                    <Image
                        className='w-12 h-12 rounded mr-3'
                        width={100}
                        height={100}
                        src={currentMashup.imageUrl + '_100x100.png'}
                        alt={currentMashup.name}
                    ></Image>

                    <div className='flex flex-col'>
                        <a
                            className='cursor-pointer'
                            onClick={() => mashupSideSheetUtils.open(currentMashup)}
                        >
                            {currentMashup.name}
                        </a>
                        <div className='flex flex-row'>
                            {currentMashup.authors.map((value, index, array) => (
                                <Link
                                    key={index}
                                    className='text-onSurfaceVariant cursor-pointer'
                                    href={`/profile/${value}`}
                                >
                                    {value}
                                    {index < array.length - 1 && ', '}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-4 items-center absolute w-full justify-center'>
                    <ShuffleIcon
                        width={32}
                        height={32}
                        color={shuffle ? 'primary' : 'onSurfaceVariant'}
                        onClick={() => setShuffle(!shuffle)}
                    ></ShuffleIcon>
                    <PreviousIcon
                        width={16}
                        height={16}
                        color='onSurfaceVariant'
                        onClick={() => {
                            playerUtils.playPrevious();
                        }}
                    ></PreviousIcon>
                    {paused ? (
                        <PlayIcon
                            width={36}
                            height={36}
                            onClick={() => {
                                setPaused(!paused);
                            }}
                        ></PlayIcon>
                    ) : (
                        <PauseIcon
                            width={36}
                            height={36}
                            onClick={() => {
                                setPaused(!paused);
                            }}
                        ></PauseIcon>
                    )}
                    <NextIcon
                        width={16}
                        height={16}
                        color='onSurfaceVariant'
                        onClick={() => {
                            playerUtils.playNext(false);
                        }}
                    ></NextIcon>
                    <PlayerRepeatIcon repeat={repeat} setRepeat={setRepeat} />
                </div>

                <div className='flex flex-row gap-4 justify-end items-center'>
                    {/* {formatTime(currentTime)} */}
                    {/* {currentMashup.durationStr} */}

                    <VolumeIcon width={26} height={20} color='onSurfaceVariant'></VolumeIcon>

                    <ReactSlider
                        min={0}
                        max={100}
                        value={volume * 100}
                        className={'w-[100px] h-2'}
                        renderTrack={(props, state) => {
                            return (
                                <div
                                    {...props}
                                    className={twMerge(
                                        'h-2',
                                        state.index === 0
                                            ? 'bg-primary rounded-l'
                                            : 'bg-onPrimary rounded-r'
                                    )}
                                    key={props.key}
                                />
                            );
                        }}
                        onChange={(value) => {
                            value /= 100;
                            if (currentAudio) {
                                currentAudio.volume = value;
                            }
                            setVolume(value);
                        }}
                    ></ReactSlider>
                </div>
            </div>
        </>
    );
}
