import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export default function getToast(text: string, type: 'success' | 'error', className?: string) {
    return toast.custom(
        (t) => (
            <div
                className={twMerge(
                    `cursor-pointer w-64 h-12 flex flex-row items-center justify-center px-4 py-6 rounded-xl relative`,
                    t.visible ? 'bottom-5' : '-bottom-96',
                    className,
                    type === 'success' ? 'bg-primary text-button-text' : 'bg-error text-button-text'
                )}
                onClick={() => toast.dismiss(t.id)}
            >
                <div className='flex flex-col items-start justify-center'>
                    <p>{text}</p>
                </div>
            </div>
        ),
        { id: 'unique-notification', position: 'bottom-center', duration: 2000 }
    );
}
