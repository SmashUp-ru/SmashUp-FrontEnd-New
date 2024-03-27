import React from 'react';
import Image from 'next/image';
import uploadIcon from '/public/icons/upload.png';
import LinkIcon from '@/components/icons/LinkIcon';
import Button from '@/components/Button/Button';

export default function UploadTrack() {
    return (
        <div className='px-8 flex flex-col gap-8'>
            {/* Профиль */}
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={uploadIcon}
                    width={188}
                    height={188}
                    alt='Загрузить трек'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>Название трека</h1>
                    <span className='font-medium text-base text-icon'>Исполнитель</span>
                </div>
            </div>

            <div className='w-[764px] h-[64px] flex justify-start items-center relative'>
                <input
                    type='text'
                    placeholder='Ссылка на оффициальное видео исходника ( YouTube )'
                    className='px-12 py-4 w-full rounded-2xl focus:outline-none bg-sidebar-gray'
                />

                <LinkIcon width={20} height={19} className='absolute ml-4' />
            </div>

            <Button className='w-[764px] h-[64px]'>Подтвердить</Button>
        </div>
    );
}
