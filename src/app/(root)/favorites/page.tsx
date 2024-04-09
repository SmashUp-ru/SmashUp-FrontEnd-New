import Image from 'next/image';
import profile from '/public/dev/profile.png';
import favorites from '/public/icons/like.png';
import Separator from '@/components/Separator';
import PlayIcon from '@/components/icons/PlayIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { profile_popular } from '@/utils/data';
import HeartIcon from '@/components/icons/HeartIcon';
import WatchIcon from '@/components/icons/WatchIcon';
import TrackItem from '@/components/TrackItem';

export default function Favorites() {
    return (
        <div className='px-8'>
            {/* Профиль */}
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={favorites}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>Мне нравится</h1>
                    <div className='flex gap-2'>
                        <Image src={profile} alt='dmhd6219' className='w-[24px] h-[24px] rounded' />
                        <span className='font-medium text-base text-icon'>dmhd6219</span>
                        <Separator className='font-medium text-base text-icon' />
                        <span className='font-medium text-base text-icon'>115 мэшапов</span>
                    </div>
                </div>
            </div>

            {/* Действия */}
            <div className='flex flex-row gap-5 items-center mt-5 mb-7'>
                <PlayIcon width={48} height={48} color='primary' />
                <HeartIcon width={26} height={22} color='icon' />
                <ShareIcon width={26} height={22} color='icon' />
            </div>

            {/* Мэшапы */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <div className='flex flex-row justify-between py-6 border-b border-sidebar-gray pr-4'>
                        <div className='flex flex-row items-center'>
                            <div className='w-6 h-6 mx-4 flex flex-row items-center justify-center'>
                                <span className='text-icon'>#</span>
                            </div>
                            <span className='text-icon'>Название</span>
                        </div>

                        <div className='w-1/3 flex flex-row gap-2.5 justify-between'>
                            <span className='text-icon'>Прослушивания</span>
                            <span className='text-icon'>
                                <WatchIcon width={14} height={14} />
                            </span>
                        </div>
                    </div>

                    <div>
                        {profile_popular.map((item) => (
                            <TrackItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
