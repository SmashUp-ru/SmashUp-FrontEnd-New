import SmashUpPopover from '@/components/smashup/Popover/Popover';
import InfoIcon from '@/components/icons/InfoIcon';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function PopoverOverview() {
    const transl = useTranslations('upload');
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <SmashUpPopover
                icon={<InfoIcon width={20} height={21} />}
                content={
                    <div className='flex flex-col gap-7 max-w-[737px]'>
                        <h1 className='font-semibold text-2xl'>
                            {transl('mashup.genres.description')}
                        </h1>
                        <div className='flex flex-col gap-1'>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>{transl('mashup.genres.memes_t')} -</span>
                                {transl('mashup.genres.memes')}
                                &ldquo;Случай в казино&ldquo;
                            </span>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>{transl('mashup.genres.megamashup_t')} -</span>
                                {transl('mashup.genres.megamashup')}
                            </span>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>Cover -</span>
                                {transl('mashup.genres.cover')}
                            </span>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>Soundclown -</span>
                                {transl('mashup.genres.soundclown')}
                            </span>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>Morph -</span>
                                {transl('mashup.genres.morph')}
                            </span>
                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                <span className='text-white'>Shitpost -</span>
                                {transl('mashup.genres.shitpost')}
                            </span>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
