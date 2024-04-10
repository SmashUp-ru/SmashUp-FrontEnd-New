import React from 'react';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import NotificationLogo from '@/components/icons/NotificationIcon';
import Search from '@/components/header/Search';

export default function Header() {
    return (
        <div className='w-full h-[40px] mb-4 flex items-center justify-between pt-12 pb-10 px-8'>
            <Search />

            <div className='flex gap-8 items-center w-[232px]'>
                <NotificationLogo width={24} height={24} color='primary' active={true} />
                <a className='h-[40px] flex items-center gap-4' href='/profile/dmhd6219'>
                    <Image
                        src={profile}
                        alt='Фото профиля'
                        className='text-gray-header h-[40px] w-[40px] rounded'
                    ></Image>
                    <span className='text-icon'>dmhd6219</span>
                </a>
            </div>
        </div>
    );
}
