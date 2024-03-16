import React from 'react';
import Image, { StaticImageData } from 'next/image';

export default function Card({
    title,
    description,
    image
}: {
    title: string;
    description: string;
    image: string | StaticImageData;
}) {
    return (
        <div className='flex flex-col items-center gap-3 bg-sidebar-gray w-[238px] h-[301px] rounded-4xl px-6 py-6'>
            <Image src={image} alt={title} className='w-full' />
            <div className='flex flex-col gap-2 text-left w-full'>
                <span className='text-secondary-text font-semibold text-base'>{title}</span>
                <span className='text-neutral-400 font-normal text-base '>{description}</span>
            </div>
        </div>
    );
}
