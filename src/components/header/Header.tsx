import React from 'react';
import profile from '/public/dev/profile.png';
import Image from 'next/image';
import { IoMdNotifications } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

// TODO: colors are not actually gray (they are not changing)
function Header() {
    return (
        <div className='w-full h-[40px] mb-4 flex items-center justify-between pt-12 pb-10 px-8'>
            <div className='h-[40px] flex justify-start items-center relative'>
                <input
                    placeholder='Поиск'
                    className='border border-gray-400 rounded-lg px-10 py-2.5 w-[350px] h-[40px] focus:outline-none text-gray-header'
                />
                <IoSearchSharp className='absolute ml-4 text-gray-header' />
            </div>

            <div className='flex gap-8 items-center w-[232px]'>
                <IoMdNotifications size={24} />
                <div className='h-[40px] flex items-center gap-4'>
                    <Image
                        src={profile}
                        alt='Фото профиля'
                        className='text-gray-header h-[40px] w-[40px] rounded'
                    ></Image>
                    <span className='text-gray-header'>LeonidM</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
