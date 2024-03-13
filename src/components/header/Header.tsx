import React from 'react';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import SearchIcon from '@/components/icons/SearchIcon';
import NotificationLogo from '@/components/icons/NotificationIcon';

function Header() {
    return (
        <div className='w-full h-[40px] mb-4 flex items-center justify-between pt-12 pb-10 px-8'>
            <div className='h-[40px] flex justify-start items-center relative'>
                <input
                    placeholder='Поиск'
                    className='border border-gray-400 rounded-lg px-10 py-2.5 w-[350px] h-[40px] focus:outline-none text-gray-header'
                />
                <SearchIcon width={16} height={16} color='gray-header' className='absolute ml-4' />
            </div>

            <div className='flex gap-8 items-center w-[232px]'>
                <NotificationLogo width={24} height={24} color='primary' active={true} />
                <div className='h-[40px] flex items-center gap-4'>
                    <Image
                        src={profile}
                        alt='Фото профиля'
                        className='text-gray-header h-[40px] w-[40px] rounded'
                    ></Image>
                    <span className='text-gray-header'>dmhd6219</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
