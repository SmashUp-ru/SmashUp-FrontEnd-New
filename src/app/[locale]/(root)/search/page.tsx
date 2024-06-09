import React from 'react';
import TrackItem from '@/components/TrackItem';
import { premier } from '@/utils/data';
import ArtistItem from '@/components/ArtistItem';
import profile from '/public/dev/profile.png';

export default function Search() {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-3xl'>История поиска</h1>

            <div className='flex flex-col gap-2'>
                {premier.map((item) => (
                    <TrackItem key={item.id} {...item} id={undefined} />
                ))}
                <ArtistItem image={profile} />
            </div>
        </div>
    );
}
