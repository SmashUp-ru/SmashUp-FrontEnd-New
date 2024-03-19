import React from 'react';
import { mashups_search, search } from '@/utils/data';
import Card from '@/components/main/Card';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import Separator from '@/components/Separator';

export default function Search() {
    return (
        <div className='flex flex-col px-8 gap-8'>
            {/* Поиск */}
            <div className='flex flex-row space-betwen gap-8'>
                {/* Лучший результат */}
                <div className='w-1/2'>
                    <h2 className='font-semibold text-2xl text-gray-header pb-5'>
                        Лучший результат
                    </h2>

                    <div className='flex flex-row bg-sidebar-gray w-full max-w-[790px] h-[238px] rounded-4xl px-6 py-6 gap-12'>
                        <Image
                            src={profile}
                            width={188}
                            height={188}
                            alt='dmhd6219'
                            className='rounded-3xl'
                        />

                        <div className='flex flex-col justify-center gap-2.5'>
                            <h1 className='font-semibold text-5xl text-secondary-text'>dmhd6219</h1>
                            <div>
                                <span className='font-medium text-base text-gray-400'>
                                    500 подписчиков
                                </span>
                                <Separator className='font-medium text-base text-gray-400' />
                                <span className='font-medium text-base text-gray-400'>
                                    115 мэшапов
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Мэшапы */}
                <div className='w-1/2'>
                    <div className='w-full flex flex-row justify-between'>
                        <h2 className='font-semibold text-2xl text-gray-header pb-5'>Мэшапы</h2>
                        <span className='font-bold text-sm text-gray-300 uppercase'>
                            Показать всё
                        </span>
                    </div>

                    <div className='flex flex-col justify-between'>
                        {mashups_search.map((item) => (
                            <div key={item.id} className='flex flex-row gap-6 py-2 items-center'>
                                <span>{item.id}</span>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className='w-[40px] h-[40px]'
                                ></Image>
                                <div className='flex flex-col '>
                                    <span>{item.title}</span>
                                    <span>{item.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Недавно прослушано */}
            <div>
                <div className='flex flex-row justify-between'>
                    <h2 className='font-semibold text-2xl text-gray-header pb-5'>
                        Недавно прослушано
                    </h2>
                    <span className='font-bold text-sm text-gray-300 uppercase'>Показать всё</span>
                </div>
                <div className='w-full h-[301px] flex-wrap overflow-hidden flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
