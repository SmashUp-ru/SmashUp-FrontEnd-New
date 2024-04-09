'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import PlayIcon from '@/components/icons/PlayIcon';
import PauseIcon from '@/components/icons/PauseIcon';

export default function Card({
    id,
    title,
    description,
    image
}: {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='flex flex-col items-center gap-3 bg-sidebar-gray min-w-[238px] h-[301px] rounded-4xl px-6 py-6'>
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
            <a className='flex flex-col gap-2 text-left w-full' href={`/playlist/${id}`}>
                <span className='text-secondary-text font-semibold text-base'>{title}</span>
                <span className='text-neutral-400 font-normal text-base '>{description}</span>
            </a>
        </div>
    );
}
