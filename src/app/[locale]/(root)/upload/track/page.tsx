import React from 'react';
import Image from 'next/image';
import uploadIcon from '/public/icons/upload.png';
import LinkIcon from '@/components/icons/LinkIcon';
import SmashUpButton from '@/components/smashup/Button/Button';
import SmashUpInput from '@/components/smashup/Input/Input';
import { useTranslations } from 'next-intl';

export default function UploadTrack() {
    const transl = useTranslations('upload');
    return (
        <div className='px-8 flex flex-col gap-8'>
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={uploadIcon}
                    width={188}
                    height={188}
                    alt={transl('load')}
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-onSurface'>
                        {transl('track.name')}
                    </h1>
                    <span className='font-medium text-base text-onSurfaceVariant'>
                        {transl('track.artist')}
                    </span>
                </div>
            </div>

            <form className='flex flex-col gap-8'>
                <SmashUpInput
                    icon={<LinkIcon width={20} height={19} />}
                    placeholder={transl('track.link')}
                    className='w-[764px]'
                />

                <SmashUpButton className='w-[764px] h-[64px]'>{transl('accept')}</SmashUpButton>
            </form>
        </div>
    );
}
