import Image from 'next/image';
import profile from '/public/dev/profile.png';
import favorites from '/public/icons/like.png';
import Separator from '@/components/Separator';
import { profile_popular_tracks } from '@/utils/data';
import TrackItem from '@/components/TrackItem';

export default function Favorites() {
    return (
        <div className='flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={favorites}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-onSurface'>Мне нравится</h1>
                    <div className='flex gap-2'>
                        <Image src={profile} alt='dmhd6219' className='w-[24px] h-[24px] rounded' />
                        <span className='font-medium text-base text-onSurfaceVariant'>
                            dmhd6219
                        </span>
                        <Separator className='font-medium text-base text-onSurfaceVariant' />
                        <span className='font-medium text-base text-onSurfaceVariant'>
                            115 мэшапов
                        </span>
                    </div>
                </div>
            </div>

            {/* Мэшапы */}
            <div className='flex flex-col gap-1'>
                {profile_popular_tracks.map((item) => (
                    <TrackItem key={item.id} {...item} id={undefined} />
                ))}
                {profile_popular_tracks.map((item) => (
                    <TrackItem key={item.id} {...item} id={undefined} />
                ))}
                {profile_popular_tracks.map((item) => (
                    <TrackItem key={item.id} {...item} id={undefined} />
                ))}
            </div>
        </div>
    );
}
