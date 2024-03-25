'use client';

import Image from 'next/image';
import profile from '/public/dev/profile.png';
import { useState } from 'react';

export default function Settings() {
    const [active, setActive] = useState<string>('0');

    return (
        <div className='px-8 flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={profile}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>dmhd6219</h1>
                </div>
            </div>

            {/* Настройки */}
            <div className='w-full flex flex-col gap-6'>
                <div className='py-6 flex flex-row gap-1.5 items-center'>
                    <input type='checkbox' className='w-[32px] h-[32px] rounded-md' />
                    <label className='font-medium text-base text-icon'>
                        Проигрывать треки с пометкой Explicit (Мат)
                    </label>
                </div>

                <div className='py-6 flex flex-row gap-1.5 items-center'>
                    <input type='checkbox' className='w-[32px] h-[32px] rounded-md' />
                    <label className='font-medium text-base text-icon'>
                        Разрешить мультисессии
                    </label>
                </div>

                <div className='py-6 flex flex-row gap-6 items-center w-1/2'>
                    <label className='w-1/4 font-normal text-base text-icon'>Битрейт мэшапов</label>

                    <div className='relative w-2/3'>
                        <div className='flex flex-col 1/3'>
                            <ul className='-top-6 absolute flex justify-between w-full px-3'>
                                <li className='flex justify-center relative'>
                                    <span className='absolute -top-1 font-normal text-xs text-icon'>
                                        64кб
                                    </span>
                                    <div
                                        id='0'
                                        className={`absolute rounded-sm bg-button-text w-2.5 h-5 top-4 ${active === '0' && 'bg-gray-header z-20'}`}
                                    />
                                </li>
                                <li className='flex justify-center relative'>
                                    <span className='absolute -top-1 font-normal text-xs text-icon'>
                                        96кб
                                    </span>
                                    <div
                                        id='1'
                                        className={`absolute rounded-sm bg-button-text w-2.5 h-5 top-4 ${active === '1' && 'bg-gray-header z-20'}`}
                                    />
                                </li>
                                <li className='flex justify-center relative'>
                                    <span className='absolute -top-1 font-normal text-xs text-icon'>
                                        128к
                                    </span>
                                    <div
                                        id='2'
                                        className={`absolute rounded-sm bg-button-text w-2.5 h-5 top-4 ${active === '2' && 'bg-gray-header z-20'}`}
                                    />
                                </li>
                                <li className='flex justify-center relative'>
                                    <span className='absolute -top-1 font-normal text-xs text-icon'>
                                        160кб
                                    </span>
                                    <div
                                        id='3'
                                        className={`absolute rounded-sm bg-button-text w-2.5 h-5 top-4 ${active === '3' && 'bg-gray-header z-20'}`}
                                    />
                                </li>
                                <li className='flex justify-center relative'>
                                    <span className='absolute -top-1 font-normal text-xs text-icon'>
                                        Оригинал
                                    </span>
                                    <div
                                        id='4'
                                        className={`absolute rounded-sm bg-button-text w-2.5 h-5 top-4 ${active === '4' && 'bg-gray-header z-20'}`}
                                    />
                                </li>
                            </ul>
                            <input
                                type='range'
                                className='w-full'
                                value={active}
                                min='0'
                                max='4'
                                step='1'
                                onInput={(e) => {
                                    setActive(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
