'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import PlayIcon from '@/components/icons/PlayIcon';
import PauseIcon from '@/components/icons/PauseIcon';
import Link from 'next/link';

export default function ArtistCard({
    id,
    title,
    description,
    image,
    bg
}: {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    bg?: boolean;
    showVisibleButton?: boolean;
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div
            className={`${bg ? 'bg-surfaceVariant' : ''} flex flex-col items-center gap-3 w-[238px] h-[301px] rounded-4xl px-6 py-6`}
        >
            <div className='w-full relative group'>
                <Image
                    width={190}
                    height={190}
                    src={image}
                    alt={title}
                    className='w-full rounded-full'
                />
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
                <div className='flex flex-row justify-center items-center'>
                    <Link href={`/playlist/${id}`}>
                        <span className='text-onSurface font-semibold text-base'>{title}</span>
                    </Link>
                </div>
                <span className='text-neutral-400 font-normal text-base '>{description}</span>
            </div>
        </div>
    );
}
