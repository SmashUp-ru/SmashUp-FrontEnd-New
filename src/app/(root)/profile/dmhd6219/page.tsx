import React from 'react';
import Image from 'next/image';
import profile from '/public/dev/profile.png';
import Separator from '@/components/Separator';
import DoneIcon from '@/components/icons/DoneIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import AllCategoriesIcon from '@/components/icons/AllCategoriesIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import AddIcon from '@/components/icons/AddIcon';
import { profile_popular } from '@/utils/data';
import TrackItem from '@/components/TrackItem';

export default function Profile() {
    return (
        <div className='px-8'>
            {/* Профиль */}
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={profile}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <div className='flex items-center gap-5'>
                        <h1 className='font-semibold text-5xl text-secondary-text'>dmhd6219</h1>
                        <DoneIcon width={34} height={24} />
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-medium text-base text-icon'>5 Мэшапов</span>
                        <Separator className='font-medium text-base text-icon' />
                        <span className='font-medium text-base text-icon'>666 подписчиков</span>
                        <Separator className='font-medium text-base text-icon' />
                        <span className='font-medium text-base text-icon'>5 Плейлистов</span>
                    </div>
                </div>
            </div>

            {/* Действия */}
            <div className='flex flex-row gap-5 items-center mt-5 mb-7'>
                <PlayIcon width={48} height={48} color='primary' />
                <AllCategoriesIcon width={26} height={26} color='icon' />
                <SettingsIcon width={28} height={28} color='icon' />
                <ShareIcon width={26} height={22} color='icon' />
                <AddIcon width={26} height={26} color='icon' />
            </div>

            {/* Семые популярные мэшапы */}
            <div className='flex flex-col gap-4'>
                <h2 className='font-semibold text-2xl'>Самые популярные мэшапы</h2>
                <div className='flex flex-col'>
                    {profile_popular.map((item) => (
                        <TrackItem key={item.id} {...item} />
                    ))}
                </div>
                <span className='font-bold text-sm text-gray-300 uppercase'>Все</span>
            </div>
        </div>
    );
}
