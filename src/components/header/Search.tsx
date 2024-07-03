'use client';

import SearchIcon from '@/components/icons/SearchIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Popover } from 'react-tiny-popover';
import Image from 'next/image';
import egor from '/public/dev/search/egor.png';
import SearchContext from '@/providers/search';

export default function Search() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const { type } = useContext(SearchContext);

    const searchRef = useRef<HTMLInputElement | null>(null);

    const [searchValue, setSearchValue] = useState(
        searchParams.get('q') ? searchParams.get('q')?.toString() : ''
    );

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        setSearchValue(term);
        router.push(`${pathname}?${params.toString()}`);
    }, 300);

    useEffect(() => {
        setSearchValue(searchParams.get('q')?.toString());
    }, [searchParams]);

    const t = useTranslations('components.header.search');

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']} // preferred positions by priority
            content={
                <div
                    className={`bg-surface rounded-lg flex flex-col gap-2.5`}
                    style={{ width: searchRef.current?.clientWidth }}
                >
                    <a className='p-5 font-medium text-base' href='/search'>
                        Все результаты
                    </a>
                    <div>
                        {/*Мэшаперы*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>
                                Мэшаперы
                            </span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image
                                    src={egor}
                                    alt='Иконка профиля'
                                    className='w-8 h-8 rounded'
                                />
                                <span className='font-medium text-base text-icon'>dmhd6219</span>
                            </div>
                        </div>

                        {/*Мэшапы*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>
                                Мэшапы
                            </span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image src={egor} alt='Иконка мэшапа' className='w-8 h-8 rounded' />
                                <span className='font-medium text-base text-icon'>ДОРАДУЛО</span>
                            </div>
                        </div>

                        {/*Треки*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>Треки</span>
                            <div className='flex flex-row items-center gap-4 py-2.5'>
                                <Image src={egor} alt='Иконка трека' className='w-8 h-8 rounded' />
                                <span className='font-medium text-base text-icon'>Дора Дура</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            onClickOutside={() => setIsPopoverOpen(false)}
            padding={0}
        >
            <div
                onClick={() => {
                    if (type === 'crossover') {
                        setIsPopoverOpen(true);
                    }
                }}
                className='py-[1px] flex-grow'
            >
                <SmashUpInput
                    ref={searchRef}
                    placeholder={t('search')}
                    icon={<SearchIcon width={16} height={16} color='onSurface' />}
                    className=''
                    onClick={() => {
                        router.push(`/search${searchValue ? `?q=${searchValue}` : ''}`);
                    }}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    value={searchValue}
                />
            </div>
        </Popover>
    );
}
