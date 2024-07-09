'use client';

import Image, { StaticImageData } from 'next/image';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import React from 'react';
import BorderlessPlayIcon from '@/components/icons/BorderlessPlayIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import Link from 'next/link';
import { Mashup } from '@/utils/types';
import { PlaylistLike, useMashupSideSheetUtils, usePlayerUtils } from '@/hooks/utils';

// TODO: change declaration to Mashup from types.js
export interface TrackItemProps {
    id?: number;
    index?: number;
    image: string | StaticImageData;
    title: string;
    // TODO: add support for multiple authors
    author: string;
    explicit?: boolean;
    listened?: number;
    length?: string;
    liked?: boolean;
    showLiked?: boolean;
    // TODO: replace all above with Mashup
    mashup: Mashup;
    playlist: PlaylistLike;
}

export default function TrackItem({
    id,
    index,
    image,
    title,
    author,
    explicit,
    listened,
    length,
    liked,
    showLiked,
    mashup,
    playlist
}: TrackItemProps) {
    const playerUtils = usePlayerUtils();
    const mashupSideSheetUtils = useMashupSideSheetUtils();

    let isPlaying = mashup && playerUtils.isPlaying(mashup, playlist);
    let isCurrent = mashup && playerUtils.isCurrent(mashup, playlist);

    return (
        <div className='px-4 flex flex-row justify-between group hover:bg-surface rounded-lg'>
            <div className='flex flex-row my-2.5 items-center h-[40px]'>
                {(index || id) && (
                    <button
                        className='w-6 h-6 m-4 flex flex-row items-center justify-center'
                        onClick={() => playerUtils.playMashup(mashup, playlist)}
                    >
                        <span className='text-onSurfaceVariant group-hover:hidden'>
                            {/* TODO: playing icon */}
                            {isPlaying ? (
                                <a className='text-primary'>{'>>'}</a>
                            ) : isCurrent ? (
                                <a>{'>>'}</a>
                            ) : index ? (
                                index
                            ) : (
                                id
                            )}
                        </span>
                        {/* TODO: pause icon */}
                        <BorderlessPlayIcon
                            width={11}
                            height={12}
                            color={isPlaying ? 'secondary' : 'primary'}
                            className='hidden group-hover:block'
                        />
                    </button>
                )}
                <div className='flex flex-row gap-3.5 items-center'>
                    <Image
                        width={100}
                        height={100}
                        src={image}
                        alt={title}
                        className='w-[40px] h-[40px] rounded-lg'
                    />
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-2 items-center'>
                            <span
                                className='font-bold text-base cursor-pointer'
                                onClick={() => mashupSideSheetUtils.open(mashup)}
                            >
                                {title}
                            </span>
                            {explicit && <ExplicitIcon width={16} height={17} color='icon' />}
                        </div>
                        <Link
                            className='font-normal text-sm text-onSurfaceVariant'
                            href={`/profile/${author}`}
                        >
                            {author}
                        </Link>
                    </div>
                </div>
            </div>

            {(showLiked !== false || listened || length) && (
                <div className='w-[95px] flex flex-row items-center justify-between'>
                    {showLiked !== false && (
                        <HeartIcon
                            width={20}
                            height={17}
                            color={liked ? 'primary' : 'onSurfaceVariant'}
                        />
                    )}
                    {listened && <span className='text-onSurfaceVariant'>{listened}</span>}
                    {length && <span className='text-onSurfaceVariant'>{length}</span>}
                </div>
            )}
        </div>
    );
}
