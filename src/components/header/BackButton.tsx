'use client';

import BackIcon from '@/components/icons/BackIcon';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <div
            className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-surface rounded-full cursor-pointer'
            onClick={() => router.back()}
        >
            <BackIcon width={11} height={18} />
        </div>
    );
}
