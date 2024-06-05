import React from 'react';
import NotificationLogo from '@/components/icons/NotificationIcon';
import Search from '@/components/header/Search';
import BackButton from '@/components/header/BackButton';
import Avatar from '@/components/header/Avatar';

export default function Header() {
    return (
        <div className='w-full my-4 flex items-center gap-4'>
            <BackButton />
            <Search />

            <div className='flex items-center gap-6'>
                <NotificationLogo width={24} height={24} color='primary' active={true} />
                <Avatar />
            </div>
        </div>
    );
}
