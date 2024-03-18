'use client';

import { Toaster, ToastBar } from 'react-hot-toast';
import getToast from '@/components/toast/Toast';

export default function TestPage() {
    const notify = getToast;

    return (
        <div className='px-8'>
            <div className='flex flex-col gap-2 text-center'>
                <button onClick={() => notify('Добавлено в плейлист', 'success')}>
                    Открыть добрый попап
                </button>
                <button onClick={() => notify('Ебать 400 рублей', 'error')}>
                    Открыть злой попап
                </button>

                <a href='/login'>Открыть страницу входа</a>
                <a href='/register'>Открыть страницу регистрации</a>
                <a href='/restore'>Открыть страницу восстановления пароля</a>
                <a href='/confirm-mail'>Открыть страницу подтверждения аккаунта</a>
                <a href='/update-password'>
                    Открыть страницу смены пароля после подтверждения аккаунта
                </a>
                <a href='/search'>Открыть страницу поиска</a>
                <a href='/not-found'>Открыть страницу 404</a>
            </div>

            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
