import React from 'react';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import NotificationLogo from '@/components/icons/NotificationIcon';
import Search from '@/components/header/Search';
import BackButton from '@/components/header/BackButton';

export default function Header() {
    return (
        <div className='w-full my-4 flex items-center gap-4'>
            <BackButton />
            <Search />

            <div className='flex items-center gap-6'>
                <NotificationLogo width={24} height={24} color='primary' active={true} />
                <a href='/profile/dmhd6219'>
                    <Image
                        src={profile}
                        alt='Фото профиля'
                        className='text-onSurface h-12 w-12 rounded-full'
                    ></Image>
                </a>
            </div>
        </div>
    );
}
