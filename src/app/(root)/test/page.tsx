'use client';

import { Toaster, ToastBar } from 'react-hot-toast';
import getToast from '@/components/toast/Toast';

export default function TestPage() {
    const notify = getToast;

    return (
        <div className='px-8'>
            <button onClick={() => notify('Добавлено в плейлист', 'success')}>
                Открыть добрый попап
            </button>
            <br />
            <button onClick={() => notify('Ебать 400 рублей', 'error')}>Открыть злой попап</button>
            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
