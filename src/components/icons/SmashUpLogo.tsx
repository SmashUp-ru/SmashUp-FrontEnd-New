import React from 'react';
import { IconComponentProps } from '@/models/icons';
import { twMerge } from 'tailwind-merge';

export default function SmashUpLogo({ width, height, color, className }: IconComponentProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 82 42'
            xmlns='http://www.w3.org/2000/svg'
            className={twMerge(`text-${color} fill-current`, className)}
        >
            <path d='M82 0L46.7477 42L32.1869 26.25L0 42L8.04673 31.5L16.0935 21L24.1402 10.5L32.1869 0L46.7477 15.75L82 0Z' />
        </svg>
    );
}
