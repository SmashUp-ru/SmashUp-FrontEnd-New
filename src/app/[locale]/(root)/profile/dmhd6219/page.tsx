import React from 'react';
import Image from 'next/image';
import profile from '/public/dev/profile.png';
import SettingsIcon from '@/components/icons/SettingsIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { profile_popular_playlists, profile_popular_tracks } from '@/utils/data';
import TrackItem from '@/components/TrackItem';
import Pin from '@/components/smashup/Pin/Pin';
import SmashUpButton from '@/components/smashup/Button/Button';
import Card from '@/components/Card';
import egor from '/public/dev/search/egor.png';
import { useTranslations } from 'next-intl';

export default function Profile() {
    const transl = useTranslations('pages.profile');

    return (
        <div className='flex flex-col gap-4'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full p-4 px-6 py-6 gap-12 rounded-tl-[120px] rounded-bl-[120px] rounded-r-4xl'>
                <Image src={profile} alt='dmhd6219' className='w-[200px] h-[200px] rounded-full' />

                <div className='flex flex-col justify-center gap-4'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('title')}
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-6'>
                                <h2 className='font-bold text-3xl'>LeonidM</h2>
                                <div className='flex flex-row gap-4 items-center'>
                                    <Pin>15 {transl('badges.subscriptions')}</Pin>
                                    <Pin>5 {transl('badges.subscribers')}</Pin>
                                    <Pin>2 {transl('badges.playlists')}</Pin>
                                </div>
                            </div>

                            <div className='flex flex-row gap-4 items-center'>
                                <SmashUpButton className='w-[224px] h-[48px]'>
                                    {transl('upload')}
                                </SmashUpButton>
                                <SettingsIcon width={28} height={28} color='onSurfaceVariant' />
                                <ShareIcon width={26} height={22} color='onSurfaceVariant' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Семые популярные мэшапы */}
            <div className='flex flex-row gap-6 flex-wrap w-full'>
                {/*Популярные треки*/}
                <div className='flex flex-col gap-4 w-1/2'>
                    <div className='flex flex-row justify-between items-center'>
                        <h2 className='font-semibold text-2xl'>{transl('popular')}</h2>
                        <span className='font-bold text-base text-onSurfaceVariant text-opacity-50 uppercase'>
                            {transl('show-all')}
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        {profile_popular_tracks.map((item) => (
                            <TrackItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>

                {/*Недавний релиз*/}
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-2xl'>{transl('new-release')}</h2>
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                </div>
            </div>

            {/* Плейлисты */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-semibold text-2xl'>{transl('playlists')}</h2>
                </div>
                <div className='overflow-visible flex flex-row gap-7'>
                    {profile_popular_playlists.map((item) => (
                        <Card key={item.id} showVisibleButton={item.visible} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
