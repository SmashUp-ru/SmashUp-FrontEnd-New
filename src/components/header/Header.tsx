import React, { useContext } from 'react';
import NotificationLogo from '@/components/icons/NotificationIcon';
import Search from '@/components/header/Search';
import BackButton from '@/components/header/BackButton';
import Avatar from '@/components/header/Avatar';
import SearchContext, { CrossoverEntry } from '@/providers/search';
import Pin from '@/components/smashup/Pin/Pin';
import Image from 'next/image';

export default function Header() {
    const { type, crossoverEntries, setCrossoverEntries } = useContext(SearchContext);

    const crossoverRemoveEntry = (entry: CrossoverEntry) => {
        return () => {
            let index = 0;
            for (let entry1 of crossoverEntries) {
                if (entry1.entity.id === entry.entity.id && entry1.type === entry.type) {
                    crossoverEntries.splice(index, 1);
                    setCrossoverEntries([...crossoverEntries]);
                    return;
                }

                index++;
            }
        };
    };

    return (
        <div className='w-full my-4 flex items-center gap-4'>
            <BackButton />
            <Search />

            {type === 'crossover' && crossoverEntries.length > 0 && (
                <div className='flex items-center gap-4 h-full'>
                    {crossoverEntries.map((item, index) => (
                        <Pin
                            key={index}
                            className='text-white py-[14px] cursor-pointer'
                            onClick={crossoverRemoveEntry(item)}
                        >
                            {/* TODO: fix image vertical align & text size */}
                            <div className='flex'>
                                <Image
                                    width={24}
                                    height={24}
                                    src={item.entity.imageUrl + '_100x100.png'}
                                    alt={item.displayName}
                                    className='mr-1'
                                ></Image>
                                {item.displayName}
                            </div>
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
