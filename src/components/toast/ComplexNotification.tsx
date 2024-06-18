import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import avatarka from '/public/dev/notification/avatarka.png';
import SmashUpButton from '@/components/smashup/Button/Button';

export default function ComplexNotificationToast(title: string, text: string, className?: string) {
    const transl = useTranslations('complex_notification');
    return toast.custom(
        (t) => (
            <div className={twMerge('bg-surface rounded-2xl', className)}>
                <div className='flex flex-col gap-2.5'>
                    <span className='px-5 py-4 font-bold text-base text-white'>
                        {transl('title')} (35)
                    </span>
                </div>

                <div className='flex flex-row justify-center w-[350px] px-5 py-2.5 gap-4'>
                    <Image src={avatarka} alt={title} className='w-8 h-8' />
                    <div className='flex flex-col gap-2.5'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-semibold text-base text-white'>{title}</h3>
                            <p className='font-normal text-sm text-onSurfaceVariant'>{text}</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-center w-[350px] px-5 py-2.5 gap-4'>
                    <Image src={avatarka} alt={title} className='w-8 h-8' />
                    <div className='flex flex-col gap-2.5'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-semibold text-base text-white'>{title}</h3>
                            <p className='font-normal text-sm text-onSurfaceVariant'>{text}</p>
                        </div>
                        <SmashUpButton
                            className='w-[259px] h-[27px] font-semibold text-xs'
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Ok
                        </SmashUpButton>
                    </div>
                </div>

                <div className='flex flex-row justify-center w-[350px] px-5 py-2.5 gap-4'>
                    <Image src={avatarka} alt={title} className='w-8 h-8' />
                    <div className='flex flex-col gap-2.5'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-semibold text-base text-white'>{title}</h3>
                            <p className='font-normal text-sm text-onSurfaceVariant'>{text}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <SmashUpButton
                                className='w-[149px] h-[27px] font-semibold text-xs'
                                onClick={() => toast.dismiss(t.id)}
                            >
                                {transl('button1')}
                            </SmashUpButton>

                            <SmashUpButton
                                className='w-[100px] h-[27px] font-semibold text-xs'
                                onClick={() => toast.dismiss(t.id)}
                                category='stroke'
                            >
                                {transl('button2')}
                            </SmashUpButton>
                        </div>
                    </div>
                </div>
            </div>
        ),
        { position: 'bottom-right', duration: 4000 }
    );
}
