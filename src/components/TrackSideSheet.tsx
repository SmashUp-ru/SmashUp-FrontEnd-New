import Image from 'next/image';
import CloseIcon from '@/components/icons/CloseIcon';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import TrackContext from '@/providers/track';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MockMashup, Track } from '@/utils/types';
import PauseIcon from './icons/PauseIcon';
import { useTrackCache } from '@/hooks/repositories';
import Link from 'next/link';
import { usePlayerUtils } from '@/hooks/utils';

// TODO: rename to MashupSideSheet
export default function TrackSideSheet() {
    const { track, setTrack } = useContext(TrackContext);

    const playerUtils = usePlayerUtils();

    const transl = useTranslations('pages.track_side_sheet');

    const [tracks, setTracks] = useState<Track[]>();

    const mashup = track ? track : new MockMashup();

    const trackCache = useTrackCache();

    useEffect(() => {
        setTracks(undefined);
        if (!track || !track.tracks) {
            return;
        }

        trackCache.getMany(track.tracks).then((tracks) => {
            setTracks(tracks);
        });
    }, [track]);

    const handleEscapeKey = (event: any) => {
        if (event.key === 'Escape') {
            setTrack(undefined);
        }
    };

    useEffect(() => {
        if (track) {
            document.addEventListener('keydown', handleEscapeKey, true);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [track]);

    return (
        <div className='w-[468px] h-full flex flex-col items-center ml-5'>
            <div className='w-full flex flex-row justify-end h-[130px]'>
                <button
                    onClick={() => {
                        setTrack(undefined);
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
                    src={mashup.imageUrl + '_800x800.png'}
                    className='w-[420px] h-[236px] rounded-3xl object-cover'
                />

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-2.5 items-center'>
                        <span className='text-base font-semibold'>{mashup.name}</span>
                        <ExplicitIcon width={16} height={17} color='icon' />
                    </div>
                    {/* TODO: support for multipel authors */}
                    <Link href={`/profile/${mashup.authors[0]}`}>
                        <span className='text-base font-normal text-onSurfaceVariant'>
                            {mashup.authors.join(', ')}
                        </span>
                    </Link>
                </div>

                <div className='flex flex-row gap-5 items-center'>
                    <button
                        className='cursor-pointer'
                        onClick={() => {
                            // TODO: provide playlist from which this side sheet was opened
                            playerUtils.playMashup(mashup);
                        }}
                    >
                        {playerUtils.isPlaying(mashup) ? (
                            <PauseIcon width={48} height={48} color='primary' />
                        ) : (
                            <PlayIcon width={48} height={48} color='primary' />
                        )}
                    </button>
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
                                        src={item.imageUrl + '_100x100.png'}
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
