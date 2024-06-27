import Image from 'next/image';
import CloseIcon from '@/components/icons/CloseIcon';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { TrackContext } from '@/providers/Providers';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mashup, MockMashup, MockTrack, Track, trackFromObject } from '@/utils/types';
import axios, { AxiosResponse } from 'axios';

export default function TrackSideSheet() {
    const { track, setTrack } = useContext(TrackContext);
    const transl = useTranslations('pages.track_side_sheet');

    const [mashup, setMashup] = useState<Mashup>(new MockMashup());
    const [tracks, setTracks] = useState<Track[] | undefined>(undefined);

    useEffect(() => {
        if (!track) {
            setMashup(new MockMashup());
        } else {
            setMashup(track);
        }
    }, [track]);

    useEffect(() => {
        setTracks(undefined);
        if (!track || !track.tracks) {
            return;
        }

        axios
            .get(`https://api.smashup.ru/track/get?id=${track.tracks.join(',')}`)
            .then((res: AxiosResponse<{ response: Track[] }>) => {
                setTracks(res.data.response.map((i) => trackFromObject(i)));
            })
            .catch(() => {
                setTracks(track.tracks.map(() => new MockTrack()));
            });
    }, [track]);

    return (
        <div className='w-[468px] h-full flex flex-col items-center'>
            <div className='w-full flex flex-row justify-end h-[130px]'>
                <button
                    onClick={() => {
                        if (setTrack) {
                            setTrack(undefined);
                        }
                    }}
                >
                    <CloseIcon width={28} height={28} className='cursor-pointer' />
                </button>
            </div>

            <div className='flex flex-col gap-7'>
                <Image
                    alt={mashup.name}
                    width={800}
                    height={800}
                    src={
                        'https://api.smashup.ru/uploads/mashup/' + mashup.imageUrl + '_800x800.png'
                    }
                    className='w-[420px] h-[236px] rounded-3xl object-cover'
                />

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-2.5 items-center'>
                        <span className='text-base font-semibold'>{mashup.name}</span>
                        <ExplicitIcon width={16} height={17} color='icon' />
                    </div>
                    <span className='text-base font-normal text-onSurfaceVariant'>
                        {mashup.authors.join(', ')}
                    </span>
                </div>

                <div className='flex flex-row gap-5 items-center'>
                    <PlayIcon width={48} height={48} color='primary' />
                    <HeartIcon width={32} height={32} color='icon' />
                    <ShareIcon width={26} height={22} color='icon' />
                </div>

                {tracks && tracks.length > 0 && (
                    <div className='flex flex-col gap-2.5'>
                        <span className='font-medium text-2xl'>{transl('used')}</span>
                        <div className='flex flex-col justify-between'>
                            {tracks.map((item, index) => (
                                <div
                                    key={item.id}
                                    className='flex flex-row gap-6 py-2 items-center'
                                >
                                    <span>{index + 1}</span>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={
                                            'https://api.smashup.ru/uploads/track/' +
                                            item.imageUrl +
                                            '_100x100.png'
                                        }
                                        alt={item.name}
                                        className='w-[40px] h-[40px]'
                                    ></Image>
                                    <div className='flex flex-col '>
                                        <span>{item.name}</span>
                                        <span>{item.authors.join(', ')}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
