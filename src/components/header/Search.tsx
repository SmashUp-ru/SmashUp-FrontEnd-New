'use client';

import SearchIcon from '@/components/icons/SearchIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';

export default function Search() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

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

    return (
        <div onClick={() => {}} className='py-[1px] flex-grow'>
            <SmashUpInput
                placeholder='Поиск'
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
    );
}
