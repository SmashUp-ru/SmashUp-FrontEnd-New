'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import PlayIcon from '@/components/icons/PlayIcon';
import PauseIcon from '@/components/icons/PauseIcon';
import Pin from '@/components/smashup/Pin/Pin';
import HideIcon from '@/components/icons/HideButton';

export default function Card({
    id,
    title,
    author,
    image,
    bg,
    showVisibleButton
}: {
    id: number;
    title: string;
    author: string;
    image: string | StaticImageData;
    bg?: boolean;
    showVisibleButton?: boolean;
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div
            className={`${bg ? 'bg-surfaceVariant' : ''} flex flex-col items-center gap-3 min-w-[238px] h-[301px] rounded-4xl px-6 py-6`}
        >
            <div className='w-full relative group'>
                <Image src={image} alt={title} className='w-full ' />
                <button
                    className='hidden group-hover:block absolute right-2.5 bottom-2.5'
                    onClick={() => {
                        setIsPlaying(!isPlaying);
                    }}
                >
                    {isPlaying ? (
                        <PauseIcon width={48} height={48} color='primary' />
                    ) : (
                        <PlayIcon width={48} height={48} color='primary' />
                    )}
                </button>
            </div>
            <div className='flex flex-col gap-2 text-left w-full'>
                <div className='flex flex-row justify-between items-center'>
                    <a href={`/playlist/${id}`}>
                        <span className='text-onSurface font-semibold text-base'>{title}</span>
                    </a>
                    {showVisibleButton && (
                        <Pin className='w-8 h-6 flex flex-col justify-center items-center p-0'>
                            <HideIcon width={20} height={20} color='primary' />
                        </Pin>
                    )}
                </div>
                <a href={`/profile/${author}`}>
                    <span className='text-neutral-400 font-normal text-base '>{author}</span>
                </a>
            </div>
        </div>
    );
}
