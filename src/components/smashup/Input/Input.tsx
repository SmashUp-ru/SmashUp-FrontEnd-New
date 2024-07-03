'use client';

import React, { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    isError?: boolean;
    helper?: string;
    icon?: React.ReactNode;
    heading?: string;
    value?: string;
    defaultValue?: string;
}

const SmashUpInput = forwardRef(
    (
        {
            className,
            isFocused,
            isError,
            helper,
            icon,
            heading,
            value,
            defaultValue,
            onChange,
            ...props
        }: InputProps,
        ref: React.ForwardedRef<HTMLInputElement | null>
    ) => {
        const [focus, setFocus] = useState<boolean>(isFocused ? isFocused : false);
        const [error] = useState<boolean>(isError ? isError : false);

        return (
            <div className={twMerge('w-full flex flex-col gap-2.5', className)}>
                {heading && (
                    <span className='font-medium text-base text-onSurfaceVariant text-left'>
                        {heading}
                    </span>
                )}

                <div className='w-full flex justify-start items-center relative'>
                    <input
                        onFocus={() => {
                            if (isFocused === undefined) setFocus(true);
                        }}
                        onBlur={() => {
                            if (isFocused === undefined) setFocus(false);
                        }}
                        className={twMerge(
                            'w-full bg-surface py-[14px] pl-[25px] rounded-2xl',
                            'font-normal text-base text-onSurfaceVariant placeholder-onSurfaceVariant',
                            icon ? 'pl-14' : '',
                            focus ? 'border-none outline outline-primary' : '',
                            error ? 'border-none outline outline-red-600' : ''
                        )}
                        type='text'
                        value={value}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        ref={ref}
                        {...props}
                    />
                    <div className='absolute ml-5'>{icon}</div>
                </div>

                {helper && (
                    <span className='font-normal text-xs text-onSurfaceVariant'>{helper}</span>
                )}
            </div>
        );
    }
);

SmashUpInput.displayName = 'SmashUpInput';

export default SmashUpInput;
