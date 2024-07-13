'use client';

import { useApi } from '@/hooks/api';
import { useMashupCache } from '@/hooks/repositories';
import SearchContext from '@/providers/search';
import { Mashup } from '@/utils/types';
import { useContext, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import MashupCard from '../MashupCard';

export default function CrossoverSearchResults() {
    const transl = useTranslations('pages.search.results');
    const { crossoverEntries } = useContext(SearchContext);

    const [mashups, setMashups] = useState<Mashup[]>();

    const api = useApi();

    const mashupCache = useMashupCache();

    useEffect(() => {
        if (crossoverEntries.length < 1 || crossoverEntries.length > 4) {
            return;
        }

        let tracks: number[] | undefined = [];
        let trackAuthors: number[] | undefined = [];

        for (let entry of crossoverEntries) {
            if (entry.type === 'track') {
                tracks.push(entry.entity.id);
            } else if (entry.type === 'track_author') {
                trackAuthors.push(entry.entity.id);
            }
        }

        if (tracks.length === 0) {
            tracks = undefined;
        }

        if (trackAuthors.length === 0) {
            trackAuthors = undefined;
        }

        api.get('/mashup/crossover', {
            tracks: tracks?.join(','),
            track_authors: trackAuthors?.join(',')
        })
            .then((response) => {
                let mashupIds: number[] = response.data.response;
                return mashupCache.getMany(mashupIds);
            })
            .then((result) => {
                setMashups(result);
            });
    }, [crossoverEntries]);

    if (crossoverEntries.length < 1 || crossoverEntries.length > 4) {
        return <div className='flex flex-col gap-4'>Add from 1 to 4 sources!</div>;
    }

    return (
        <div>
            <h1 className='font-semibold text-3xl'>{transl('mashups')}</h1>
            <div className='flex flex-row items-center overflow-x-scroll overflow-y-hidden'>
                {mashups?.map((item, index) => <MashupCard key={index} mashup={item} />)}
            </div>
        </div>
    );
}
