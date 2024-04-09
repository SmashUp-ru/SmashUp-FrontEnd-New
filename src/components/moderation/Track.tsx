import Image from 'next/image';
import track from '/public/dev/moderation/track.png';
import ExplicitIcon from '@/components/icons/ExplicitIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import Button from '@/components/Button/Button';
import EditIcon from '@/components/icons/EditIcon';
import ExpandIcon from '@/components/icons/ExpandIcon';
import React from 'react';
import LinkIcon from '@/components/icons/LinkIcon';

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
                    <Button className='w-[140px] h-[36px] font-semibold text-base'>Принять</Button>

                    <Button className='w-[140px] h-[36px] font-semibold text-base bg-outline text-secondary-text'>
                        Отклонить
                    </Button>

                    <button>
                        <EditIcon width={20} height={20} />
                    </button>

                    <button onClick={() => setExpanded(!expanded)}>
                        <ExpandIcon width={12} height={7} />
                    </button>
                </div>
            </div>

            {/* Expanded TrackSideSheet */}
            {expanded && (
                <div className='w-full flex flex-row flex-wrap gap-8 py-6'>
                    <Image src={track} alt='Я устал' className='w-[182px] h-[182px]' />

                    {/* Название, авторы */}
                    <div className='flex flex-col justify-between'>
                        <div className='w-full flex flex-col gap-2.5'>
                            <label className='text-left text-icon font-medium text-base'>
                                Название
                            </label>
                            <div className='w-full flex justify-start items-center relative'>
                                <input
                                    type='text'
                                    placeholder='Я устал'
                                    className='px-6 py-[15px] w-[304px] rounded-2xl focus:outline-none'
                                    disabled={true}
                                />
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-2.5'>
                            <label className='text-left text-icon font-medium text-base'>
                                Мэшаперы
                            </label>
                            <div className='w-full flex justify-start items-center relative'>
                                <input
                                    type='text'
                                    placeholder='MeowOnidMuuuow, 3awarka'
                                    className='px-6 py-[15px] w-[304px] rounded-2xl focus:outline-none'
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Исходники */}
                    <div className='flex flex-col gap-2.5 w-[313px] h-[182px] overflow-y-scroll overflow-x-hidden flex-shrink-0'>
                        <span className='text-icon font-medium text-base'>Исходники</span>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text flex flex-row gap-6 py-2 pl-6 items-center'>
                            <span>1</span>
                            <Image
                                src={track}
                                alt='Tous Les Mêmes'
                                className='w-[40px] h-[40px]'
                            ></Image>
                            <div className='flex flex-col '>
                                <span className='font-normal text-sm'>Tous Les Mêmes</span>
                                <span className='font-normal text-sm text-icon'>Stromae</span>
                            </div>
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text flex flex-row gap-6 py-2 pl-6 items-center'>
                            <span>1</span>
                            <Image
                                src={track}
                                alt='Tous Les Mêmes'
                                className='w-[40px] h-[40px]'
                            ></Image>
                            <div className='flex flex-col '>
                                <span className='font-normal text-sm'>Tous Les Mêmes</span>
                                <span className='font-normal text-sm text-icon'>Stromae</span>
                            </div>
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text flex flex-row gap-6 py-2 pl-6 items-center'>
                            <span>1</span>
                            <Image
                                src={track}
                                alt='Tous Les Mêmes'
                                className='w-[40px] h-[40px]'
                            ></Image>
                            <div className='flex flex-col '>
                                <span className='font-normal text-sm'>Tous Les Mêmes</span>
                                <span className='font-normal text-sm text-icon'>Stromae</span>
                            </div>
                        </div>
                        <div className='w-[304px] min-h-[49px] rounded-xl bg-button-text flex flex-row gap-6 py-2 pl-6 items-center'>
                            <span>1</span>
                            <Image
                                src={track}
                                alt='Tous Les Mêmes'
                                className='w-[40px] h-[40px]'
                            ></Image>
                            <div className='flex flex-col '>
                                <span className='font-normal text-sm'>Tous Les Mêmes</span>
                                <span className='font-normal text-sm text-icon'>Stromae</span>
                            </div>
                        </div>
                    </div>

                    {/* Жанры */}
                    <div className='flex flex-col gap-2.5 w-[313px] h-[182px] overflow-y-scroll overflow-x-hidden flex-shrink-0'>
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
                    <div className='flex flex-col justify-between w-[313px] h-[182px]'>
                        <div className='w-full flex flex-col gap-2.5'>
                            <label className='text-left text-icon font-medium text-base'>
                                Дополнительно
                            </label>
                            <div className='w-full bg-outline h-[49px] rounded-xl flex flex-row items-center gap-1.5'>
                                <input
                                    type='checkbox'
                                    className='w-[32px] h-[32px] ml-4'
                                    value={1}
                                    disabled={true}
                                />
                                <span>Explixit (Мат, Банворды)</span>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-2.5'>
                            <label className='text-left text-icon font-medium text-base'>
                                Ссылка на пост ВК (Основа, Альт)
                            </label>
                            <div className='w-full flex justify-start items-center relative'>
                                <input
                                    type='text'
                                    placeholder='https'
                                    className='px-11 py-[15px] w-[304px] rounded-xl focus:outline-none'
                                    disabled={true}
                                />

                                <LinkIcon width={20} height={19} className='absolute ml-4' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
