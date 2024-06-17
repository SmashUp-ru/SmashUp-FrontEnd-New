import Image from 'next/image';
import favorites from '/public/icons/like.png';
import { profile_popular_tracks } from '@/utils/data';
import TrackItem from '@/components/TrackItem';
import PlayIcon from '@/components/icons/PlayIcon';
import HideIcon from '@/components/icons/HideButton';
import ShareIcon from '@/components/icons/ShareIcon';
import { useTranslations } from 'next-intl';

export default function Favorites() {
    const transl = useTranslations('favorites');
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

                <div className='flex flex-col justify-center gap-6'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>{transl('playlist')}</span>
                        <h1 className='font-bold text-4xl text-onSurface'>{transl('title')}</h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <PlayIcon width={48} height={48} color='primary' />
                        <HideIcon
                            width={26}
                            height={28}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        />
                        <ShareIcon
                            width={26}
                            height={22}
                            color='onSurfaceVariant'
                            className='w-8 h-8'
                        />
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
