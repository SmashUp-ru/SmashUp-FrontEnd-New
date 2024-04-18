'use client';

import React from 'react';
import DoneIcon from '@/components/icons/DoneIcon';
import { twMerge } from 'tailwind-merge';

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.JSX.Element;
}

export default function SmashUpCheckBox({ label, className, checked, ...props }: CheckBoxProps) {
    const [isChecked, setIsChecked] = React.useState(checked ? checked : false);

    return (
        <div className={twMerge('flex items-center', className)}>
            <label
                className='flex items-center rounded-full cursor-pointer gap-4'
                htmlFor='checkbox'
            >
                <div className='relative flex items-center'>
                    <input
                        type='checkbox'
                        className='w-[32px] h-[32px] peer relative cursor-pointer appearance-none rounded-md  bg-surface'
                        {...props}
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />

                    <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                        <DoneIcon width={16} height={12} color='icon' />
                    </span>
                </div>

                <span className='text-left'>{label}</span>
            </label>
        </div>
    );
}
