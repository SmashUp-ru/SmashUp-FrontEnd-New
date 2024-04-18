import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export default function getWarningToast(
    text: string,
    type: 'success' | 'error',
    className?: string
) {
    return toast.custom(
        (t) => (
            <div
                className={twMerge(
                    `cursor-pointer flex flex-row items-center justify-center rounded-xl relative`,
                    t.visible ? 'bottom-5' : '-bottom-96',
                    className,
                    type === 'success' ? 'bg-primary text-surface' : 'bg-error text-surface'
                )}
                onClick={() => toast.dismiss(t.id)}
            >
                <div className='flex flex-col items-start justify-center mx-12 my-4'>
                    <p>{text}</p>
                </div>
            </div>
        ),
        { id: 'unique-notification', position: 'bottom-center', duration: 2000 }
    );
}
