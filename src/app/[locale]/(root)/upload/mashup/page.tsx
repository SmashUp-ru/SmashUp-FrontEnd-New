import Image from 'next/image';
import uploadIcon from '/public/icons/upload.png';
import InfoIcon from '@/components/icons/InfoIcon';
import { coauthors, genres, upload } from '@/utils/data';
import { twMerge } from 'tailwind-merge';
import DoneIcon from '@/components/icons/DoneIcon';
import SmashUpPopover from '@/components/smashup/Popover/Popover';
import React from 'react';
import SmashUpButton from '@/components/smashup/Button/Button';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';
import SmashUpUploadButton from '@/components/smashup/UploadButton/UploadButton';
import VkGrayIcon from '@/components/icons/VkGrayIcon';
import Link from 'next/link';

export default function UploadMashup() {
    return (
        <div className='px-8 flex flex-col gap-8'>
            <div className='flex flex-row bg-surfaceVariant w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={uploadIcon}
                    width={188}
                    height={188}
                    alt='Загрузить трек'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center gap-2.5'>
                    <h1 className='font-semibold text-5xl text-onSurface'>Название мэшапа</h1>
                    <span className='font-medium text-base text-onSurfaceVariant'>dmhd6219</span>
                </div>
            </div>

            <form className='flex flex-col gap-8'>
                <SmashUpUploadButton label='Загрузить мэшап ( mp3 )' />

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    {/*Поиск использованных треков*/}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center gap-4'>
                            <h2 className='font-semibold text-2xl text-onSurface'>
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
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
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
                            <SmashUpInput placeholder='Поиск' className='w-[764px]' />
                            <div className='flex flex-col gap-4'>
                                {upload.map((item) => (
                                    <div
                                        key={item.id}
                                        className='cursor-pointer flex flex-row justify-between items-center py-2 px-6 hover:bg-surfaceVariant rounded-2xl'
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
                            <h2 className='font-semibold text-2xl text-onSurface'>Выбор жанров</h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
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
                                        'cursor-pointer hover:bg-surfaceVariant rounded-2xl gap-y-6 gap-x-12 font-medium text-base text-onSurfaceVariant flex flex-col justify-center items-center w-[172px] h-[66px]',
                                        item.chosen && 'bg-onPrimary'
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
                            <h2 className='font-semibold text-2xl text-onSurface'>
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
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
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
                            <SmashUpInput placeholder='Поиск' className='w-[764px]' />
                            <div className='flex flex-col gap-4'>
                                {coauthors.map((item) => (
                                    <div
                                        key={item.id}
                                        className='cursor-pointer hover:bg-surfaceVariant rounded-2xl flex flex-row items-center justify-between px-6 py-5'
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
                            <h2 className='font-semibold text-2xl text-onSurface'>Дополнительно</h2>
                            <SmashUpPopover
                                icon={<InfoIcon width={20} height={21} />}
                                content={
                                    <div className='flex flex-col gap-7 max-w-[737px]'>
                                        <h1 className='font-semibold text-2xl'>
                                            Жанры выбираются в соответствии с жанром оригинального
                                            трека, однако это не подходит для следующих категорий:
                                        </h1>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мемы -</span> Если в
                                                мэшапе активно использовались мемы, например,
                                                &ldquo;Случай в казино&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Мегамэшап -</span> Если
                                                использовалось очень много разных треков и мемов
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Cover -</span> Если
                                                мэшап был записан вживую с вашим голосом
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Soundclown -</span>{' '}
                                                Если мэшап представляет из себя не совсем
                                                музыкальную композицию
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
                                                <span className='text-white'>Morph -</span> Если в
                                                мэшапе активно использовался такой эффект, как
                                                &ldquo;morphing&ldquo;
                                            </span>
                                            <span className='font-medium text-lg text-onSurfaceVariant'>
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
                                <SmashUpCheckBox label='Explicit (Мат или Бан-ворды Twitch’а)' />
                            </div>

                            <SmashUpInput
                                placeholder='Ссылка на основу / alt ( Если есть )'
                                icon={<VkGrayIcon width={25} height={25} />}
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap gap-12'>
                    {/*Условия и бла бла бла*/}
                    <div className='w-[764px] h-[64px] bg-surfaceVariant rounded-2xl flex flex-row items-center gap-4 px-5'>
                        <SmashUpCheckBox
                            label={
                                <span className='text-onSurfaceVariant font-medium text-base'>
                                    Я прочитал(-а) и согласен(-на) с{' '}
                                    <Link className='text-primary underline' href='#'>
                                        условиями пользовательского соглашения
                                    </Link>
                                </span>
                            }
                        />
                    </div>
                    <SmashUpButton className='w-[764px] h-[64px]'>Подтвердить</SmashUpButton>
                </div>
            </form>
        </div>
    );
}
