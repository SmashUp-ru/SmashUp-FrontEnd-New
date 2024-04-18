import React from 'react';
import { mashups_search, search } from '@/utils/data';
import Card from '@/components/Card';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import Separator from '@/components/Separator';
import TrackItem from '@/components/TrackItem';

export default function Search() {
    return (
        <div className='flex flex-col px-8 gap-8'>
            {/* Поиск */}
            <div className='flex flex-row space-betwen gap-8'>
                {/* Лучший результат */}
                <div className='w-1/2 flex flex-col gap-5'>
                    <h2 className='font-semibold text-2xl text-onSurface'>Лучший результат</h2>

                    <div className='flex flex-row gap-12 bg-surfaceVariant w-full max-w-[790px] h-[238px] rounded-4xl px-6 py-6 '>
                        <Image
                            src={profile}
                            width={188}
                            height={188}
                            alt='dmhd6219'
                            className='rounded-3xl'
                        />

                        <div className='flex flex-col justify-center gap-2.5'>
                            <h1 className='font-semibold text-5xl text-onSurface'>dmhd6219</h1>
                            <div className='flex gap-2.5'>
                                <span className='font-medium text-base text-onSurfaceVariant'>
                                    500 подписчиков
                                </span>
                                <Separator className='font-medium text-base text-onSurfaceVariant' />
                                <span className='font-medium text-base text-onSurfaceVariant'>
                                    115 мэшапов
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Мэшапы */}
                <div className='w-1/2 flex flex-col gap-5'>
                    <div className='w-full flex flex-row justify-between '>
                        <h2 className='font-semibold text-2xl text-onSurface'>Мэшапы</h2>
                        <span className='font-bold text-sm text-gray-300 uppercase'>
                            Показать всё
                        </span>
                    </div>

                    <div className='flex flex-col justify-between'>
                        {mashups_search.map((item) => (
                            <TrackItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Недавно прослушано */}
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row justify-between'>
                    <h2 className='font-semibold text-2xl text-onSurface'>Недавно прослушано</h2>
                    <span className='font-bold text-sm text-gray-300 uppercase'>Показать всё</span>
                </div>
                <div className='w-full flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
