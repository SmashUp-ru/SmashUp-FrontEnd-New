'use client';

import { MouseEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';
import PlayIcon from '@/components/icons/PlayIcon';
import PauseIcon from '@/components/icons/PauseIcon';
import Pin from '@/components/smashup/Pin/Pin';
import HideIcon from '@/components/icons/HideButton';
import Link from 'next/link';

export default function Card({
    id,
    title,
    // TODO: add support for multiple authors
    author,
    image,
    bg,
    showVisibleButton,
    href,
    onClick,
    isPlaying,
    playAction
}: {
    id: number;
    title: string;
    author: string;
    image: string | StaticImageData;
    bg?: boolean;
    showVisibleButton?: boolean;
    href?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    isPlaying: boolean;
    playAction: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <div
            className={`${bg ? 'bg-surfaceVariant' : ''} flex flex-col items-center gap-3 min-w-[238px] min-h-[301px] w-[238px] h-[301px] rounded-4xl px-6 py-6`}
        >
            <div className='w-full relative group'>
                {href && (
                    <div onClick={onClick}>
                        <Link href={`/${href}/${id}`}>
                            <Image
                                width={400}
                                height={400}
                                src={image}
                                alt={title}
                                className='w-full '
                            />
                        </Link>
                    </div>
                )}

                {!href && (
                    <div onClick={onClick} className={onClick ? 'cursor-pointer' : ''}>
                        <Image
                            width={400}
                            height={400}
                            src={image}
                            alt={title}
                            className='w-full '
                        />
                    </div>
                )}

                <button
                    className='hidden group-hover:block absolute right-2.5 bottom-2.5'
                    onClick={playAction}
                >
                    {/* TODO: fix wrong icons ???? */}
                    {isPlaying ? (
                        <PauseIcon width={48} height={48} color='primary' />
                    ) : (
                        <PlayIcon width={48} height={48} color='primary' />
                    )}
                </button>
            </div>
            <div className='flex flex-col gap-2 text-left w-full'>
                <div className='flex flex-row justify-between items-center'>
                    <Link
                        href={`/playlist/${id}`}
                        className='w-full text-ellipsis whitespace-nowrap overflow-hidden'
                    >
                        <span className='text-onSurface font-semibold text-base w-full '>
                            {title}
                        </span>
                    </Link>
                    {showVisibleButton && (
                        <Pin className='w-8 h-6 flex flex-col justify-center items-center p-0'>
                            <HideIcon width={20} height={20} color='primary' />
                        </Pin>
                    )}
                </div>
                <Link
                    href={`/profile/${author}`}
                    className='w-full text-ellipsis whitespace-nowrap overflow-hidden'
                >
                    <span className='text-neutral-400 font-normal text-base'>{author}</span>
                </Link>
            </div>
        </div>
    );
}
