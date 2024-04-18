import Image from 'next/image';
import track from '/public/dev/moderation/track.png';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import EditIcon from '@/components/icons/EditIcon';
import ExpandIcon from '@/components/icons/ExpandIcon';
import React from 'react';
import LinkIcon from '@/components/icons/LinkIcon';
import SmashUpButton from '@/components/smashup/Button/Button';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';
import SmashUpInput from '@/components/smashup/Input/Input';
import { mashups_search } from '@/utils/data';
import TrackItem from '@/components/TrackItem';

export default function Track() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            {/* TrackSideSheet */}
            <div className='w-full h-[72px] px-4 bg-button-text rounded-2xl flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4'>
                    <Image src={track} alt='Я устал' className='size-12' />
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row gap-1.5 items-center'>
                            <span className='font-semibold text-base'>Я устал</span>
                            <ExplicitIcon width={12.35} height={12.35} />
                        </div>
                        <span className='font-normal text-xs text-icon'>MeowOnidMuuuow</span>
                    </div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <button>
                        <PlayIcon width={32} height={32} color='primary' />
                    </button>
                    <SmashUpButton className='w-[140px] h-[36px] font-semibold text-base'>
                        Принять
                    </SmashUpButton>

                    <SmashUpButton className='w-[140px] h-[36px] font-semibold text-base bg-outline text-secondary-text'>
                        Отклонить
                    </SmashUpButton>

                    <button>
                        <EditIcon width={20} height={20} />
                    </button>

                    <button onClick={() => setExpanded(!expanded)}>
                        <ExpandIcon
                            width={12}
                            height={7}
                            className={!expanded ? 'rotate-180' : ''}
                        />
                    </button>
                </div>
            </div>

            {/* Expanded TrackSideSheet */}
            {expanded && (
                <div className='w-full flex flex-row flex-wrap gap-8 py-6'>
                    <div className='flex flex-col justify-center'>
                        <Image src={track} alt='Я устал' className='w-[194px] h-[194px]' />
                    </div>

                    {/* Название, авторы */}
                    <div className='flex flex-col gap-2'>
                        <SmashUpInput
                            disabled
                            heading='Название'
                            placeholder='Я устал'
                            className='w-[304px]'
                        />

                        <SmashUpInput
                            disabled
                            heading='Мэшаперы'
                            placeholder='MeowOnidMuuuow, 3awarka'
                            className='w-[304px]'
                        />
                    </div>

                    {/* Исходники */}
                    <div className='flex flex-col gap-2.5 w-[313px] h-[194px] overflow-y-scroll overflow-x-hidden flex-shrink-0'>
                        <span className='text-icon font-medium text-base'>Исходники</span>
                        {mashups_search.map((item) => (
                            <TrackItem key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Жанры */}
                    <div className='flex flex-col gap-2.5 w-[313px] h-[194px] overflow-y-scroll overflow-x-hidden flex-shrink-0'>
                        <span className='text-icon font-medium text-base'>Жанры</span>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text text-center flex flex-col justify-center font-medium text-base text-icon'>
                            Мемы
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text text-center flex flex-col justify-center font-medium text-base text-icon'>
                            Щитпост
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text text-center flex flex-col justify-center font-medium text-base text-icon'>
                            Щитпост
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text text-center flex flex-col justify-center font-medium text-base text-icon'>
                            Щитпост
                        </div>
                    </div>

                    {/* Дополнительно, ссылка в вк */}
                    <div className='flex flex-col justify-between w-[313px] gap-2'>
                        <div className='w-full flex flex-col gap-2.5'>
                            <label className='text-left text-icon font-medium text-base'>
                                Дополнительно
                            </label>
                            <div className='w-full bg-sidebar-gray h-[49px] rounded-xl flex flex-row items-center gap-1.5 px-4'>
                                <SmashUpCheckBox label='Explixit (Мат, Банворды)' />
                            </div>
                        </div>

                        <SmashUpInput
                            heading='Ссылка на пост ВК (Основа, Альт)'
                            icon={<LinkIcon width={20} height={19} />}
                            placeholder='https'
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
