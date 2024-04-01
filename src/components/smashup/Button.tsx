import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    category?: 'fill' | 'stoke';
    icon?: React.ReactNode;
}

export default function Button({
    category,
    icon,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={twMerge(
                'w-[460px] h-[54px] rounded-2xl font-semibold text-xl',
                'flex flex-row justify-center items-center gap-2.5',
                category === undefined || category === 'fill'
                    ? `bg-primary hover:bg-primary-hover text-outline  ${disabled ? 'brightness-75 bg-primary-disabled hover:bg-primary-disabled' : ''}`
                    : '',
                category === 'stoke'
                    ? `bg-transparent text-secondary-text outline outline-primary hover:outline-primary-hover ${disabled ? 'brightness-75 outline-primary-disabled hover:outline-primary-disabled' : ''}`
                    : '',
                className
            )}
        >
            {icon}
            {children}
        </button>
    );
}
