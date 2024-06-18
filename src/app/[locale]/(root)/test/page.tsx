'use client';

import { Toaster, ToastBar } from 'react-hot-toast';
import getWarningToast from '@/components/toast/Warning';
import getNotificationToast from '@/components/toast/Notification';
import ComplexNotificationToast from '@/components/toast/ComplexNotification';
import Link from 'next/link';

export default function TestPage() {
    const warning = getWarningToast;
    const notification = getNotificationToast;
    const complexNotification = ComplexNotificationToast;

    return (
        <div className='px-8'>
            <div className='flex flex-col gap-2 text-center'>
                <Link href='/test/components'>Открыть страницу со всеми компонентами</Link>

                <button onClick={() => warning('Добавлено в плейлист', 'success')}>
                    Открыть добрый попап
                </button>
                <button onClick={() => warning('Ебать 400 рублей', 'error')}>
                    Открыть злой попап
                </button>

                <button
                    onClick={() =>
                        notification(
                            'Title',
                            'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'
                        )
                    }
                >
                    Добавить уведомление
                </button>

                <button
                    onClick={() =>
                        complexNotification(
                            'Title',
                            'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'
                        )
                    }
                >
                    Добавить большое уведомление
                </button>

                <Link href='/login'>Открыть страницу входа</Link>
                <Link href='/register'>Открыть страницу регистрации</Link>
                <Link href='/restore'>Открыть страницу восстановления пароля</Link>
                <Link href='/confirm-mail'>Открыть страницу подтверждения аккаунта</Link>
                <Link href='/update-password'>
                    Открыть страницу смены пароля после подтверждения аккаунта
                </Link>
                <Link href='/search'>Открыть страницу поиска</Link>
                <Link href='/profile/dmhd6219'>Открыть страницу профиля</Link>
                <Link href='/profile/settings'>Открыть страницу настроек профиля</Link>
                <Link href='/profile/dmhd6219/uploaded'>Открыть страницу загруженных мэшапов</Link>
                <Link href='/profile/moderation'>Открыть страницу модерации мэшапов</Link>
                <Link href='/upload/track'>Открыть страницу загрузки трека</Link>
                <Link href='/upload/mashup'>Открыть страницу загрузки мэшапа</Link>
                <Link href='/not-found'>Открыть страницу 404</Link>
            </div>

            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
