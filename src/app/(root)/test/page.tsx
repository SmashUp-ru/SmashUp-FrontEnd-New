'use client';

import toast, { Toaster, ToastBar } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export default function TestPage() {
    const notify = () =>
        toast.custom(
            (t) => (
                <div
                    className={twMerge(
                        `w-64 h-12 flex flex-row items-center justify-center bg-primary px-4 py-6 text-button-text  rounded-xl relative`,
                        t.visible ? 'bottom-5' : '-bottom-96',
                        'cursor-pointer'
                    )}
                    onClick={() => toast.dismiss(t.id)}
                >
                    <div className='flex flex-col items-start justify-center'>
                        <p>Добавлено в плейлист</p>
                    </div>
                </div>
            ),
            { id: 'unique-notification', position: 'bottom-center' }
        );

    return (
        <div className='px-8'>
            <button onClick={() => notify()}>Открыть попап</button>
            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
        </div>
    );
}
