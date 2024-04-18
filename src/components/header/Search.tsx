'use client';

import { Popover } from 'react-tiny-popover';
import React, { useState } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import Image from 'next/image';
import profile from '/public/dev/profile.png';
import avatarka3 from '/public/dev/notification/avatarka3.png';
import avatarka4 from '/public/dev/notification/avatarka4.png';

export default function Search() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']}
            padding={-15}
            content={
                <div className='w-[350px] bg-sidebar-gray rounded-lg flex flex-col gap-2.5'>
                    <a className='mt-[15px] p-5 font-medium text-base' href='/search'>
                        Все результаты
                    </a>
                    <div>
                        {/*Мэшаперы*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>
                                Мэшаперы
                            </span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image
                                    src={profile}
                                    alt='Иконка профиля'
                                    className='w-8 h-8 rounded'
                                />
                                <span className='font-medium text-base text-icon'>dmhd6219</span>
                            </div>
                        </div>

                        {/*Мэшапы*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>
                                Мэшапы
                            </span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image
                                    src={avatarka3}
                                    alt='Иконка мэшапа'
                                    className='w-8 h-8 rounded'
                                />
                                <span className='font-medium text-base text-icon'>ДОРАДУЛО</span>
                            </div>
                        </div>

                        {/*Треки*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>Треки</span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image
                                    src={avatarka4}
                                    alt='Иконка трека'
                                    className='w-8 h-8 rounded'
                                />
                                <span className='font-medium text-base text-icon'>Дора Дура</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            onClickOutside={() => setIsPopoverOpen(false)}
        >
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className='z-30'>
                <SmashUpInput
                    placeholder='Поиск'
                    icon={<SearchIcon width={16} height={16} color='gray-header' />}
                    className='w-[350px]'
                    onClick={() => setIsPopoverOpen(true)}
                />
            </div>
        </Popover>
    );
}
