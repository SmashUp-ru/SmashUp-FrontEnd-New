import React from 'react';
import UploadIcon from '@/components/icons/UploadIcon';
import { twMerge } from 'tailwind-merge';
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import { useTranslations } from 'next-intl';

export interface UploadButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    loading?: number;
    label: string;
}

export default function SmashUpUploadButton({
    loading,
    label,
    className,
    ...props
}: UploadButtonProps) {
    const transl = useTranslations('upload_button');
    return (
        <div
            className={twMerge(
                'cursor-pointer w-[764px] h-[64px] bg-surfaceVariant rounded-2xl flex justify-start items-center relative',
                className
            )}
        >
            <div className='px-7 flex flex-row gap-12 items-center cursor-pointer'>
                <div className='flex flex-row gap-4'>
                    <UploadIcon width={20} height={19} className='cursor-pointer' />
                    <label className='cursor-pointer'>{label}</label>
                </div>
                {loading && (
                    <div className='flex flex-row gap-4'>
                        <SpinnerIcon width={20} height={20} />
                        <span>{transl('progress')}{loading}%</span>
                    </div>
                )}
            </div>
            <input
                {...props}
                type='file'
                placeholder={label}
                className='file:cursor-pointer cursor-pointer w-full opacity-0 absolute -z-1'
            />
        </div>
    );
}
