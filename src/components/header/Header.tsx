import React, { useContext } from 'react';
import NotificationLogo from '@/components/icons/NotificationIcon';
import Search from '@/components/header/Search';
import BackButton from '@/components/header/BackButton';
import Avatar from '@/components/header/Avatar';
import SearchContext from '@/providers/search';
import Pin from '@/components/smashup/Pin/Pin';

export default function Header() {
    const { type, crossoverEntries } = useContext(SearchContext);

    return (
        <div className='w-full my-4 flex items-center gap-4'>
            <BackButton />
            <Search />

            {type === 'crossover' && (
                <div className='flex items-center gap-4 h-full'>
                    {crossoverEntries.map((item, index) => (
                        <Pin key={index} className='text-white py-[14px]'>
                            {item}
                        </Pin>
                    ))}
                </div>
            )}

            <div className='flex items-center gap-6'>
                <NotificationLogo width={24} height={24} color='primary' active={true} />
                <Avatar />
            </div>
        </div>
    );
}
