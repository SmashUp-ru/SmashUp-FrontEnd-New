'use client';

import SearchIcon from '@/components/icons/SearchIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Popover } from 'react-tiny-popover';
import Image from 'next/image';
import SearchContext, { CrossoverEntry } from '@/providers/search';
import { Track, TrackAuthor, trackAuthorFromObject, trackFromObject } from '@/utils/types';
import { useApi } from '@/hooks/api';
import { Holder, useTrackAuthorCache, useTrackCache } from '@/hooks/repositories';

export default function Search() {
    const router = useRouter();

    const { query, setQuery, type, crossoverEntries, setCrossoverEntries } =
        useContext(SearchContext);

    const searchRef = useRef<HTMLInputElement | null>(null);

    const [searchValue, setSearchValue] = useState<string>(query);

    // TODO: maybe move to another component
    const [crossoverTracks, setCrossoverTracks] = useState<Track[]>([]);
    const [crossoverTrackAuthors, setCrossoverTrackAuthors] = useState<TrackAuthor[]>([]);

    const api = useApi();

    const trackAuthorCache = useTrackAuthorCache();
    const trackCache = useTrackCache();

    // TODO: maybe move to another component
    const crossoverSearch = (query: string) => {
        if (type === 'crossover') {
            setCrossoverTracks([]);
            setCrossoverTrackAuthors([]);

            if (query.length >= 4 && query.length <= 32) {
                api.get('/track_author/search', { query }).then((response) => {
                    // TODO: limit at API
                    let trackAuthors: TrackAuthor[] =
                        response.data.response.map(trackAuthorFromObject);
                    if (trackAuthors.length > 5) {
                        trackAuthors = trackAuthors.slice(0, 5);
                    }
                    setCrossoverTrackAuthors(trackAuthors);
                    for (let trackAuthor of trackAuthors) {
                        trackAuthorCache.storage.set(trackAuthor.id, new Holder(trackAuthor));
                    }
                });

                api.get('/track/search', { query }).then((response) => {
                    // TODO: limit at API
                    let tracks: Track[] = response.data.response.map(trackFromObject);
                    if (tracks.length > 5) {
                        tracks = tracks.slice(0, 5);
                    }
                    setCrossoverTracks(tracks);
                    for (let track of tracks) {
                        trackCache.storage.set(track.id, new Holder(track));
                    }
                });
            }
        }
    };

    const handleSearch = useDebouncedCallback((term: string) => {
        setQuery(term);

        // TODO: maybe move to another component
        crossoverSearch(term.trim());
    }, 300);

    useEffect(() => {
        // TODO: maybe move to another component
        crossoverSearch(query);
    }, [type]);

    const t = useTranslations('components.header.search');

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const crossoverToggleEntry = (item: Track | TrackAuthor, type: 'track' | 'track_author') => {
        return () => {
            if (crossoverEntries.length >= 4) {
                // TODO: show error popup
                return;
            }

            let displayName;
            if (type === 'track_author') {
                displayName = item.name;
            } else {
                let temp: any = item;
                let track: Track = temp;
                displayName = track.authors.join(', ') + ' — ' + track.name;
            }

            let entry: CrossoverEntry = {
                entity: item,
                type: type,
                displayName: displayName
            };

            let index = 0;
            for (let entry of crossoverEntries) {
                if (entry.entity.id === item.id && entry.type === type) {
                    crossoverEntries.splice(index, 1);
                    setCrossoverEntries([...crossoverEntries]);
                    return;
                }

                index++;
            }

            crossoverEntries.push(entry);
            setCrossoverEntries([...crossoverEntries]);
        };
    };

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
                        {/*Исполнители*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>
                                Исполнители
                            </span>
                            <div className='flex flex-col gap-4 py-2.5'>
                                {crossoverTrackAuthors.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='flex flex-row items-center gap-4 cursor-pointer'
                                            onClick={crossoverToggleEntry(item, 'track_author')}
                                        >
                                            <Image
                                                src={item.imageUrl + '_100x100.png'}
                                                width={32}
                                                height={32}
                                                alt='Иконка профиля'
                                                className='w-8 h-8 rounded'
                                            />
                                            <span className='font-medium text-base text-icon'>
                                                {item.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/*Треки*/}
                        <div className='px-5'>
                            <span className='font-semibold text-base text-white py-2.5'>Треки</span>
                            <div className='flex flex-col gap-4 py-2.5'>
                                {crossoverTracks.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='flex flex-row items-center gap-4 cursor-pointer'
                                            onClick={crossoverToggleEntry(item, 'track')}
                                        >
                                            <Image
                                                src={item.imageUrl + '_100x100.png'}
                                                width={32}
                                                height={32}
                                                alt='Иконка профиля'
                                                className='w-8 h-8 rounded'
                                            />
                                            <span className='font-medium text-base text-icon'>
                                                {item.authors.join(', ') + ' — ' + item.name}
                                            </span>
                                        </div>
                                    );
                                })}
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
                        router.push('/search');
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
