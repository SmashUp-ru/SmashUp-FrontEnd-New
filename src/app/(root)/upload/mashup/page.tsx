import Image from 'next/image';
import uploadIcon from '/public/icons/upload.png';
import Button from '@/components/Button/Button';
import UploadIcon from '@/components/icons/UploadIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import { coauthors, genres, upload } from '@/utils/data';
import { twMerge } from 'tailwind-merge';
import VkIcon from '@/components/icons/VkIcon';
import DoneIcon from '@/components/icons/DoneIcon';
import SmashUpPopover from '@/components/smashup/Popover/Popover';
import React from 'react';

export default function UploadMashup() {
    return (
        <div className='px-8 flex flex-col gap-8'>
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={uploadIcon}
                    width={188}
                    height={188}
                    alt='Загрузить трек'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>Название мэшапа</h1>
                    <span className='font-medium text-base text-icon'>dmhd6219</span>
                </div>
            </div>

            <form className='flex flex-col gap-8'>
                <div className='cursor-pointer w-[764px] h-[64px] bg-sidebar-gray rounded-2xl flex justify-start items-center relative'>
                    <div className='px-7 flex flex-row gap-4 items-center cursor-pointer'>
                        <UploadIcon width={20} height={19} className='cursor-pointer' />
                        <label className='cursor-pointer'>Загрузить мэшап ( mp3 )</label>
                    </div>
                    <input
                        type='file'
                        placeholder='Загрузить мэшап ( mp3 )'
                        className='file:cursor-pointer cursor-pointer w-full opacity-0 absolute -z-1'
                    />
                </div>

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    {/*Поиск использованных треков*/}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center gap-4'>
                            <h2 className='font-semibold text-2xl text-gray-header'>
                                Поиск использованных треков
                            </h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Shitpost -</span> Если
                                                мэшап был создан исключительно как шутка без долгой
                                                работы над ним
                                            </span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <input
                                type='text'
                                placeholder='Поиск'
                                className='focus:outline-none w-[764px] h-[64px] font-medium text-base bg-sidebar-gray text-icon rounded-2xl px-5'
                            />
                            <div className='flex flex-col gap-4'>
                                {upload.map((item) => (
                                    <div
                                        key={item.id}
                                        className='cursor-pointer flex flex-row justify-between items-center py-2 px-6 hover:bg-sidebar-gray rounded-2xl'
                                    >
                                        <div className='flex flex-row gap-6 '>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                className='w-[40px] h-[40px] rounded'
                                            ></Image>
                                            <div className='flex flex-col '>
                                                <span>{item.title}</span>
                                                <span>{item.author}</span>
                                            </div>
                                        </div>

                                        {item.chosen && <DoneIcon width={17} height={12} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*Выбор жанров*/}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center gap-4'>
                            <h2 className='font-semibold text-2xl text-gray-header'>
                                Выбор жанров
                            </h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Shitpost -</span> Если
                                                мэшап был создан исключительно как шутка без долгой
                                                работы над ним
                                            </span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                        <div className='grid grid-cols-4 gap-6'>
                            {genres.map((item) => (
                                <div
                                    key={item.id}
                                    className={twMerge(
                                        'cursor-pointer hover:bg-sidebar-gray rounded-2xl gap-y-6 gap-x-12 font-medium text-base text-icon flex flex-col justify-center items-center w-[172px] h-[66px]',
                                        item.chosen && 'bg-outline'
                                    )}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    {/*Добавить соавторов*/}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center gap-4'>
                            <h2 className='font-semibold text-2xl text-gray-header'>
                                Добавить соавторов
                            </h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Shitpost -</span> Если
                                                мэшап был создан исключительно как шутка без долгой
                                                работы над ним
                                            </span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <input
                                type='text'
                                placeholder='Поиск'
                                className='focus:outline-none w-[764px] h-[64px] font-medium text-base bg-sidebar-gray text-icon rounded-2xl px-5'
                            />
                            <div className='flex flex-col gap-4'>
                                {coauthors.map((item) => (
                                    <div
                                        key={item.id}
                                        className='cursor-pointer hover:bg-sidebar-gray rounded-2xl flex flex-row items-center justify-between px-6 py-5'
                                    >
                                        <span className='font-normal text-base'>Дора</span>

                                        {item.chosen && <DoneIcon width={17} height={12} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*Дополнительно*/}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center gap-4'>
                            <h2 className='font-semibold text-2xl text-gray-header'>
                                Дополнительно
                            </h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-icon'>
                                                <span className='text-white'>Shitpost -</span> Если
                                                мэшап был создан исключительно как шутка без долгой
                                                работы над ним
                                            </span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='w-[764px] h-[64px] flex flex-row items-center gap-4 px-5'>
                                <input type='checkbox' className='w-[32px] h-[32px]' />
                                <span className='text-icon font-medium text-base'>
                                    Explicit (Мат или Бан-ворды Twitch’а)
                                </span>
                            </div>

                            <div className='w-full flex justify-start items-center relative'>
                                <input
                                    type='text'
                                    placeholder='Ссылка на основу / alt ( Если есть )'
                                    className='px-14 py-4 w-full rounded-2xl focus:outline-none bg-transparent'
                                />

                                <VkIcon
                                    width={25}
                                    height={25}
                                    color='icon'
                                    className='absolute ml-4'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    {/*Условия и бла бла бла*/}
                    <div className='w-[764px] h-[64px] bg-sidebar-gray rounded-2xl flex flex-row items-center gap-4 px-5'>
                        <input type='checkbox' className='w-[32px] h-[32px]' />
                        <span className='text-icon font-medium text-base'>
                            Я прочитал(-а) и согласен(-на) с{' '}
                            <a className='text-primary underline' href='#'>
                                условиями пользовательского соглашения
                            </a>
                        </span>
                    </div>
                    <Button className='w-[764px] h-[64px]'>Подтвердить</Button>
                </div>
            </form>
        </div>
    );
}
