import React from 'react';
import Image from 'next/image';
import uploadIcon from '/public/icons/upload.png';
import Button from '@/components/Button/Button';
import UploadIcon from '@/components/icons/UploadIcon';

export default function UploadMashup() {
    return (
        <div className='px-8 flex flex-col gap-8'>
            <div className='flex flex-row bg-sidebar-gray w-full h-[238p    x] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={uploadIcon}
                    width={188}
                    height={188}
                    alt='Загрузить трек'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>Название мэшапа</h1>
                    <span className='font-medium text-base text-icon'>dmhd6219</span>
                </div>
            </div>

            <form className='flex flex-col gap-8'>
                <div className='cursor-pointer w-[764px] h-[64px] bg-sidebar-gray rounded-2xl flex justify-start items-center relative'>
                    <div className='px-7 flex flex-row gap-4 items-center cursor-pointer'>
                        <UploadIcon width={20} height={19} className='cursor-pointer' />
                        <label className='cursor-pointer'>Загрузить мэшап ( mp3 )</label>
                    </div>
                    <input
                        type='file'
                        placeholder='Загрузить мэшап ( mp3 )'
                        className='file:cursor-pointer cursor-pointer w-full opacity-0 absolute -z-1'
                    />
                </div>

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    <div className='w-[764px] h-[64px] bg-sidebar-gray rounded-2xl flex flex-row items-center gap-4 px-5'>
                        <input type='checkbox' className='w-[32px] h-[32px]' />
                        <span className='text-icon font-medium text-base'>
                            Я прочитал(-а) и согласен(-на) с{' '}
                            <a className='text-primary underline' href='#'>
                                условиями пользовательского соглашения
                            </a>
                        </span>
                    </div>
                    <Button className='w-[764px] h-[64px]'>Подтвердить</Button>
                </div>
            </form>
        </div>
    );
}
