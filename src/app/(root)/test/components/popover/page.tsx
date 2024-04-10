import SmashUpPopover from '@/components/smashup/Popover/Popover';
import InfoIcon from '@/components/icons/InfoIcon';
import React from 'react';

export default function PopoverOverview() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <SmashUpPopover
                icon={<InfoIcon width={20} height={21} />}
                content={
                    <div className='flex flex-col gap-7'>
                        <h1 className='font-semibold text-2xl'>
                            Жанры выбираются в соответствии с жанром оригинального трека, однако это
                            не подходит для следующих категорий:
                        </h1>
                        <div className='flex flex-col gap-1'>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Мемы -</span> Если в мэшапе активно
                                использовались мемы, например, &ldquo;Случай в казино&ldquo;
                            </span>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Мегамэшап -</span> Если использовалось
                                очень много разных треков и мемов
                            </span>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Cover -</span> Если мэшап был записан
                                вживую с вашим голосом
                            </span>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Soundclown -</span> Если мэшап
                                представляет из себя не совсем музыкальную композицию
                            </span>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Morph -</span> Если в мэшапе активно
                                использовался такой эффект, как &ldquo;morphing&ldquo;
                            </span>
                            <span className='font-medium text-lg text-icon'>
                                <span className='text-white'>Shitpost -</span> Если мэшап был создан
                                исключительно как шутка без долгой работы над ним
                            </span>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
