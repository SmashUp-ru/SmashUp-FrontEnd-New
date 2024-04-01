'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    isError?: boolean;
    helper?: string;
    icon?: React.ReactNode;
    heading?: string;
}

export default function SmashUpInput({
    className,
    isFocused,
    isError,
    helper,
    icon,
    heading,
    children,
    value,
    defaultValue,
    ...props
}: InputProps) {
    const [focus, setFocus] = useState<boolean>(isFocused ? isFocused : false);
    const [error] = useState<boolean>(isError ? isError : false);

    const [inputValue, setInputValue] = useState<string>(
        typeof value === 'string' && value
            ? value
            : typeof defaultValue === 'string' && defaultValue
              ? defaultValue
              : ''
    );

    return (
        <div className={twMerge('w-full flex flex-col gap-2.5', className)}>
            <span className='font-normal text-xs text-icon'>{heading}</span>

            <div className='w-full flex justify-start items-center relative'>
                <input
                    onFocus={() => {
                        if (isFocused === undefined) setFocus(true);
                    }}
                    onBlur={() => {
                        if (isFocused === undefined) setFocus(false);
                    }}
                    className={twMerge(
                        'w-full bg-input py-[17.5px] pl-[25px] rounded-2xl',
                        'font-normal text-base text-icon placeholder-input-text',
                        icon ? 'pl-14' : '',
                        focus ? 'border-none outline outline-2 ring-0 outline-primary' : '',
                        error ? 'border-none outline outline-2 ring-0 outline-red-600' : ''
                    )}
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    {...props}
                >
                    {children}
                </input>
                <div className='absolute ml-6'>{icon}</div>
            </div>

            <span className='font-normal text-xs text-icon'>{helper}</span>
        </div>
    );
}
