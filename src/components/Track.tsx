import Image from 'next/image';

import track4 from '/public/dev/main/track4.png';
import ExitIcon from '@/components/icons/ExitIcon';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { TrackContext } from '@/providers/Providers';
import React, { useContext } from 'react';
import { mashups_search } from '@/utils/data';

export default function Track() {
    const { setTrack } = useContext(TrackContext);
    return (
        <div className='w-[468px] h-full flex flex-col items-center gap-14 py-10'>
            <div className='w-full flex flex-row justify-end'>
                <button
                    onClick={() => {
                        if (setTrack) {
                            setTrack(undefined);
                        }
                    }}
                >
                    <ExitIcon width={28} height={28} className='cursor-pointer' />
                </button>
            </div>
            <div className='flex flex-col gap-7'>
                <Image
                    alt='EL РАНДЕВУ'
                    src={track4}
                    className='w-[420px] h-[236px] rounded-3xl object-cover'
                />

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-2.5 items-center'>
                        <span className='text-base font-semibold'>EL RANDEVU</span>
                        <ExplicitIcon width={16} height={17} color='icon' />
                    </div>
                    <span className='text-base font-normal text-icon'>Илья Муррка</span>
                </div>

                <div className='flex flex-row gap-5 items-center'>
                    <PlayIcon width={48} height={48} color='primary' />
                    <HeartIcon width={32} height={32} color='icon' />
                    <ShareIcon width={26} height={22} color='icon' />
                </div>

                <div className='flex flex-col gap-2.5'>
                    <span className='font-medium text-2xl'>Использованные треки</span>
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
        </div>
    );
}
