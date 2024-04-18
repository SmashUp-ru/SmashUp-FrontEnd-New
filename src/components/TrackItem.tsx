'use client';

import Image, { StaticImageData } from 'next/image';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import React, { useContext } from 'react';
import { TrackContext } from '@/providers/Providers';
import BorderlessPlayIcon from '@/components/icons/BorderlessPlayIcon';

export interface TrackItemProps {
    id?: number;
    image: StaticImageData;
    title: string;
    author: string;
    explicit?: boolean;
    listened?: number;
    length?: string;
}

export default function TrackItem({
    id,
    image,
    title,
    author,
    explicit,
    listened,
    length
}: TrackItemProps) {
    const { setTrack } = useContext(TrackContext);

    return (
        <div className='pr-4 flex flex-row justify-between group hover:bg-surface rounded-lg'>
            <div className='flex flex-row my-2.5 items-center h-[40px]'>
                {id && (
                    <button className='w-6 h-6 m-4 flex flex-row items-center justify-center'>
                        <span className='text-onSurfaceVariant group-hover:hidden'>{id}</span>
                        <BorderlessPlayIcon
                            width={11}
                            height={12}
                            color='primary'
                            className='hidden group-hover:block'
                        />
                    </button>
                )}
                <div className='flex flex-row gap-3.5 items-center'>
                    <Image src={image} alt={title} className='w-[40px] h-[40px]' />
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-2 items-center'>
                            <span
                                className='font-normal text-base cursor-pointer'
                                onClick={() => {
                                    if (setTrack) {
                                        setTrack(id);
                                    }
                                }}
                            >
                                {title}
                            </span>
                            {explicit && <ExplicitIcon width={16} height={17} color='icon' />}
                        </div>
                        <a
                            className='font-normal text-sm text-onSurfaceVariant'
                            href={`/artist/${author}`}
                        >
                            {author}
                        </a>
                    </div>
                </div>
            </div>

            {(listened || length) && (
                <div className='w-1/3 flex flex-row gap-2.5 justify-between items-center'>
                    {listened && <span className='text-onSurfaceVariant'>{listened}</span>}
                    {length && <span className='text-onSurfaceVariant'>{length}</span>}
                </div>
            )}
        </div>
    );
}
