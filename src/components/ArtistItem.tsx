import Image, { StaticImageData } from 'next/image';
import HeartIcon from '@/components/icons/HeartIcon';
import React from 'react';
import BackIcon from '@/components/icons/BackIcon';

export interface ArtistItemProps {
    liked?: boolean;
    image: StaticImageData;
    id?: number;
}

export default function ArtistItem({ liked, image }: ArtistItemProps) {
    return (
        <div className='flex flex-row justify-between items-center px-4 py-2.5 group hover:bg-surface rounded-lg'>
            <div className='flex flex-row gap-4 items-center'>
                <Image src={image} alt='profile' className='w-[48px] h-[48px] rounded-full' />
                <span className='font-bold text-base cursor-pointer'>LeonidM</span>
            </div>

            <div className='w-[95px] flex flex-row items-center justify-between'>
                <HeartIcon width={20} height={17} color={liked ? 'primary' : 'onSurfaceVariant'} />
                <div className='flex flex-row justify-center items-center w-[24px] h-[24px]'>
                    <BackIcon width={9} height={16} className='transform rotate-180' />
                </div>
            </div>
        </div>
    );
}
