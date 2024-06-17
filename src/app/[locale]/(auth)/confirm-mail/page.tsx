import React from 'react';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useTranslations } from 'next-intl';

export default function ConfirmMail() {
    const transl = useTranslations('confirmation_mail');
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center flex flex-col gap-2.5'>
                <h1 className='text-4xl md:text-5xl text-primary font-semibold'>
                    {transl('title')}
                </h1>
                <p className='text-onSurfaceVariant font-medium text-xl'>
                    {transl('label')}
                </p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-8 w-full'>
                    <div className='w-full flex flex-col gap-5'>
                        <SmashUpButton>{transl('button')}</SmashUpButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
