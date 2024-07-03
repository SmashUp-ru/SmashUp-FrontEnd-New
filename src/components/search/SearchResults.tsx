'use client';

import React from 'react';
import Card from '@/components/Card';
import egor from '/public/dev/search/egor.png';
import { useTranslations } from 'next-intl';

export default function SearchResults({ q }: { q: string }) {
    const transl = useTranslations('pages.search_results');
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <h1 className='font-semibold text-3xl'>
                    {transl('best_results')}
                    {q}
                </h1>
                <div className='flex flex-row items-center overflow-hidden'>
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                    <Card id={0} title='Егор комсомольцев' author='Егор ЛетоОоО' image={egor} />
                </div>
            </div>
        </div>
    );
}
