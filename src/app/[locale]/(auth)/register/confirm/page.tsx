'use client';

import getWarningToast from '@/components/toast/Warning';
import { useApi } from '@/hooks/api';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { ToastBar, Toaster } from 'react-hot-toast';

export default function RegisterConfirm() {
    const router = useRouter();

    const transl = useTranslations('pages.register.confirm');

    const api = useApi();

    const searchParams = useSearchParams();

    const warning = getWarningToast;

    useEffect(() => {
        api.post('/register/confirm', {}, { id: searchParams.get('id') })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.response.token);
                    router.push('/');
                }
            })
            .catch((response) => {
                warning(response.response.data.message, 'error');
            });
    });
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center flex flex-col gap-2.5'>
                <h1 className='text-primary font-semibold text-5xl'>{transl('title')}</h1>
                <p className='text-onSurface font-medium text-xl'>{transl('welcome')}</p>
            </div>
        </div>
    );
}
