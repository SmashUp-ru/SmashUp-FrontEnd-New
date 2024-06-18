import React from 'react';
import { useTranslations } from 'next-intl';

export default function Agreement() {
    const transl = useTranslations('agreement');
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl'>{transl('title')}</h1>
            <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-lg text-onSurface'>{transl('vk-title')}</h2>
                <div className='flex flex-col gap-6 mb-12'>
                    <span className='font-bold text-lg text-onSurfaceVariant'>
                        {transl('welcome')}
                    </span>
                    <span className='font-bold text-lg text-onSurfaceVariant'>
                        {transl('privacy')}
                    </span>
                    <span className='font-bold text-lg text-onSurfaceVariant'>
                        {transl('civil-code')}
                    </span>
                </div>

                <h3 className='font-bold text-lg text-onSurface'>{transl('terms-label')}</h3>
                <span className='font-medium text-base text-onSurfaceVariant'>
                    <h4 className='font-semibold text-base text-onSurface'>
                        {transl('term-title-1')}
                    </h4>
                    {transl('term-content-1')}
                </span>

                <h3 className='font-bold text-lg text-onSurface'>{transl('term-title-2')}</h3>
                <ul>
                    <li className='font-semibold text-base text-onSurface'>
                        {transl('term-content-2.t1')}
                    </li>
                    <li className='font-semibold text-base text-onSurface'>
                        {transl('term-content-2.t2')}
                    </li>
                    <li className='font-semibold text-base text-onSurface'>
                        {transl('term-content-2.t3')}
                    </li>
                    <li className='font-semibold text-base text-onSurface'>
                        {transl('term-content-2.t4')}
                    </li>
                </ul>
            </div>
        </div>
    );
}
