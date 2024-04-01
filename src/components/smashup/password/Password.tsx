'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PasswordIcon from '@/components/icons/PasswordIcon';
import HideIcon from '@/components/icons/HideButton';
import ShowIcon from '@/components/icons/ShowButton';

export interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    isError?: boolean;
    showPassword?: boolean;
    showPasswordButton?: boolean;
    showForgotButton?: boolean;
}

export default function SmashUpPassword({
    className,
    disabled,
    isFocused,
    isError,
    children,
    value,
    showPassword,
    showPasswordButton,
    showForgotButton,
    defaultValue,
    ...props
}: PasswordProps) {
    const [focus, setFocus] = useState<boolean>(isFocused ? isFocused : false);
    const [error] = useState<boolean>(isError ? isError : false);

    const [inputValue, setInputValue] = useState<string>(
        typeof value === 'string' && value
            ? value
            : typeof defaultValue === 'string' && defaultValue
              ? defaultValue
              : ''
    );

    const [showPasswordValue, setShowPasswordValue] = useState<boolean>(
        showPassword ? showPassword : false
    );

    return (
        <div className={twMerge('w-full flex flex-col gap-2.5', className)}>
            <div className='w-full flex flex-row justify-between'>
                <span className='font-normal text-xs text-icon'>Пароль</span>
                {showForgotButton && (
                    <a className='font-normal text-xs text-primary' href='/restore'>
                        Забыл пароль?
                    </a>
                )}
            </div>

            <div className='w-full flex justify-start items-center relative'>
                <input
                    onFocus={() => {
                        if (isFocused === undefined) setFocus(true);
                    }}
                    onBlur={() => {
                        if (isFocused === undefined) setFocus(false);
                    }}
                    className={twMerge(
                        'w-full bg-input py-[17.5px] pl-[25px] rounded-2xl z-10',
                        'font-normal text-base text-icon placeholder-input-text',
                        'pl-14',
                        focus ? 'border-none outline outline-2 ring-0 outline-primary' : '',
                        error ? 'border-none outline outline-2 ring-0 outline-red-600' : ''
                    )}
                    type={!showPasswordValue ? 'password' : 'text'}
                    value={inputValue}
                    disabled={disabled}
                    onChange={(e) => setInputValue(e.target.value)}
                    {...props}
                >
                    {children}
                </input>
                <div className='absolute w-full px-6 flex flex-row justify-between items-center'>
                    <PasswordIcon width={20} height={17} className='z-20' />
                    {!disabled && showPasswordButton && (
                        <button
                            onClick={() => {
                                setShowPasswordValue(!showPasswordValue);
                            }}
                            className='z-20'
                        >
                            {showPasswordValue ? (
                                <HideIcon width={28} height={28} />
                            ) : (
                                <ShowIcon width={28} height={26} />
                            )}
                        </button>
                    )}
                </div>
            </div>

            <span className='w-full font-normal text-xs text-icon'>
                Пароль должен содержать 8 - 32 символа и может содержать: Прописные и строчные буквы
                латиницы, цифры и спец. символы.
            </span>
        </div>
    );
}
