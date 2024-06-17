'use client';

import { Toaster, ToastBar } from 'react-hot-toast';
import getWarningToast from '@/components/toast/Warning';
import getNotificationToast from '@/components/toast/Notification';
import getComplexNotificationToast from '@/components/toast/ComplexNotification';
import { useTranslations } from 'next-intl';

export default function TestPage() {
    const warning = getWarningToast;
    const notification = getNotificationToast;
    const complexNotification = getComplexNotificationToast;
    const transl = useTranslations('test');

    return (
        <div className='px-8'>
            <div className='flex flex-col gap-2 text-center'>
                <a href='/test/components'>{transl('open')}</a>

                <button onClick={() => warning('Добавлено в плейлист', 'success')}>
                    {transl('good_popup')}
                </button>
                <button onClick={() => warning('Ебать 400 рублей', 'error')}>
                    {transl('bad_popup')}
                </button>

                <button
                    onClick={() =>
                        notification(
                            'Title',
                            'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'
                        )
                    }
                >
                    {transl('notification')}
                </button>

                <button
                    onClick={() =>
                        complexNotification(
                            'Title',
                            'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'
                        )
                    }
                >
                    {transl('big_notification')}
                </button>

                <a href='/login'>{transl('links.login')}</a>
                <a href='/register'>{transl('links.register')}</a>
                <a href='/restore'>{transl('links.restore')}</a>
                <a href='/confirm-mail'>{transl('links.confirm-mail')}</a>
                <a href='/update-password'>{transl('links.update-password')}</a>
                <a href='/search'>{transl('links.search')}</a>
                <a href='/profile/dmhd6219'>{transl('links.profile')}</a>
                <a href='/profile/settings'>{transl('links.settings')}</a>
                <a href='/profile/dmhd6219/uploaded'>{transl('links.uploaded')}</a>
                <a href='/profile/moderation'>{transl('links.moderation')}</a>
                <a href='/upload/track'>{transl('links.track')}</a>
                <a href='/upload/mashup'>{transl('links.mashup')}</a>
                <a href='/not-found'>{transl('links.not-found')}</a>
            </div>

            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
