import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    category?: 'fill' | 'stroke' | 'fill-default' | 'stroke-default';
    icon?: React.ReactNode;
}

export default function SmashUpButton({
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
                category === 'fill-default'
                    ? `bg-button-text text-white  ${disabled ? 'brightness-75' : ''}`
                    : '',
                category === 'stroke'
                    ? `bg-transparent text-secondary-text outline outline-primary hover:outline-primary-hover ${disabled ? 'brightness-75 outline-primary-disabled hover:outline-primary-disabled' : ''}`
                    : '',
                category === 'stroke-default'
                    ? `bg-transparent text-secondary-text outline outline-button-text ${disabled ? 'brightness-75' : ''}`
                    : '',
                className
            )}
        >
            {icon}
            {children}
        </button>
    );
}
