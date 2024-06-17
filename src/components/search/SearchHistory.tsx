import { premier } from '@/utils/data';
import TrackItem from '@/components/TrackItem';
import ArtistItem from '@/components/ArtistItem';
import profile from '/public/dev/profile.png';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function SearchHistory() {
    const transl = useTranslations('search_history');
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-3xl'>{transl('title')}</h1>

            <div className='flex flex-col gap-2'>
                {premier.map((item) => (
                    <TrackItem key={item.id} {...item} id={undefined} />
                ))}
                <ArtistItem image={profile} />
            </div>
        </div>
    );
}
