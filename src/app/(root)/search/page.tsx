import React from 'react';
import { search } from '@/utils/data';
import Card from '@/components/main/Card';

export default function Search() {
    return (
        <div className='flex flex-col px-8 gap-8'>
            {/* Поиск */}
            <div className='flex flex-row space-betwen gap-8'>
                {/* Лучший результат */}
                <div>
                    <h2 className='font-semibold text-2xl text-gray-header pb-5'>
                        Недавно прослушано
                    </h2>

                    <div className='flex flex-row gap-3 bg-sidebar-gray w-[790px] h-[238px] rounded-4xl px-6 py-6'></div>
                </div>

                {/* Мэшапы */}
                <div className='w-full'>
                    <div className='w-full flex flex-row justify-between'>
                        <h2 className='font-semibold text-2xl text-gray-header pb-5'>Мэшапы</h2>
                        <span className='font-bold text-sm text-gray-300 uppercase'>
                            Показать всё
                        </span>
                    </div>
                </div>
            </div>

            {/* Недавно прослушано */}
            <div>
                <div className='flex flex-row justify-between'>
                    <h2 className='font-semibold text-2xl text-gray-header pb-5'>
                        Недавно прослушано
                    </h2>
                    <span className='font-bold text-sm text-gray-300 uppercase'>Показать всё</span>
                </div>
                <div className='flex flex-row gap-7'>
                    {search.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
