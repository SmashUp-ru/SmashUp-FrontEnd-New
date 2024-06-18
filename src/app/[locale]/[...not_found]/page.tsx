'use client';
import OutlineSmashUpLogo from '@/components/icons/OutlineSmashUpLogo';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const router = useRouter();
    const transl = useTranslations('not_found');

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-8 py-4'>
            <OutlineSmashUpLogo />
            <div className='z-10'>
                <h1 className='text-primary font-bold text-9xl'>404</h1>
                <p className='text-onSurface font-normal text-2xl'>{transl('title')}</p>
            </div>
            <SmashUpButton className='w-[90%] max-w-[400px] z-10' onClick={() => router.push('/')}>
                {transl('back')}
            </SmashUpButton>
        </div>
    );
}
