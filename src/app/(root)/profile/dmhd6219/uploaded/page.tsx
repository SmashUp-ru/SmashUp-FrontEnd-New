import React from 'react';
import { search } from '@/utils/data';
import Card from '@/components/Card';

export default function UploadPage() {
    return (
        <div className='px-8 flex flex-col gap-6'>
            {/* На модерации */}
            <div>
                <h2 className='font-semibold text-2xl text-gray-header pb-5'>На модерации</h2>

                <div className='w-full flex-wrap flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>

            {/* Принято */}
            <div>
                <h2 className='font-semibold text-2xl text-gray-header pb-5'>Принято</h2>

                <div className='w-full flex-wrap flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>

            {/* Отклонено */}
            <div>
                <h2 className='font-semibold text-2xl text-gray-header pb-5'>Отклонено</h2>

                <div className='w-full flex-wrap flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
