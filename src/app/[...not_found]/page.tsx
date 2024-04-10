'use client';
import OutlineSmashUpLogo from '@/components/icons/OutlineSmashUpLogo';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-8 py-4'>
            <OutlineSmashUpLogo />
            <div className='z-10'>
                <h1 className='text-primary font-bold text-9xl'>404</h1>
                <p className='text-gray-header font-normal text-2xl'>Что-то пошло не так</p>
            </div>
            <SmashUpButton className='w-[90%] max-w-[400px] z-10' onClick={() => router.push('/')}>
                Вернуться на главную
            </SmashUpButton>
        </div>
    );
}
