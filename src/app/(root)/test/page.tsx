'use client';

import { Toaster, ToastBar } from 'react-hot-toast';
import getToast from '@/components/toast/Toast';

export default function TestPage() {
    const notify = getToast;

    return (
        <div className='px-8'>
            <div className='flex flex-col gap-2 text-center'>
                <a href='/test/components'>Открыть страницу со всеми компонентами</a>

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
                <a href='/profile/dmhd6219'>Открыть страницу профиля</a>
                <a href='/profile/settings'>Открыть страницу настроек профиля</a>
                <a href='/profile/dmhd6219/uploaded'>Открыть страницу загруженных мэшапов</a>
                <a href='/profile/moderation'>Открыть страницу модерации мэшапов</a>
                <a href='/upload/track'>Открыть страницу загрузки трека</a>
                <a href='/upload/mashup'>Открыть страницу загрузки мэшапа</a>
                <a href='/not-found'>Открыть страницу 404</a>
            </div>

            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
