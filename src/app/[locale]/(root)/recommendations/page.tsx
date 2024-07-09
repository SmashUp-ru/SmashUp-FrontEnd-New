'use client';

import favorites from '/public/icons/like.png';
import Image from 'next/image';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import { useTranslations } from 'next-intl';
import { Mashup } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useMashupCache } from '@/hooks/repositories';
import { useApi } from '@/hooks/api';

export default function Recommendations() {
    const transl = useTranslations('pages.playlist');

    const [mashups, setMashups] = useState<Mashup[]>();

    const mashupCache = useMashupCache();
    const api = useApi();

    useEffect(() => {
        api.get('/recommendations/v2', { id: 2 }).then((response) => {
            let ids: number[] = response.data.response;
            mashupCache.getMany(ids).then((mashups) => {
                setMashups(mashups);
            });
        });
    }, []);

    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={favorites}
                    width={188}
                    height={188}
                    alt='Recommendations'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>
                            {transl('compilation')}
                        </span>
                        <h1 className='font-bold text-4xl text-onSurface'>
                            {transl('recommendations')}
                        </h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <PlayIcon width={48} height={48} color='primary' />
                    </div>
                </div>
            </div>

            {/* Мэшапы */}
            {mashups && mashups.length > 0 && (
                <div className='flex flex-col gap-1'>
                    {mashups.map((item, index) => (
                        <TrackItem
                            key={item.id}
                            index={index + 1}
                            {...item}
                            image={item.imageUrl + '_100x100.png'}
                            author={item.authors.join(', ')}
                            title={item.name}
                            mashup={item}
                            explicit={item.statuses.isExplicit()}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
