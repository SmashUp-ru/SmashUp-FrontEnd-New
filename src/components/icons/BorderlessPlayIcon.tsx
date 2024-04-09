import React from 'react';
import { IconComponentProps } from '@/models/icons';
import { twMerge } from 'tailwind-merge';

export default function BorderlessPlayIcon({
    width,
    height,
    color,
    className
}: IconComponentProps) {
    // w: 11, h: 12
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 11 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={twMerge(`text-${color} fill-current`, className)}
        >
            <path d='M10.4 4.99434C11.2 5.44567 11.2 6.55429 10.4 7.00562L1.83645 11.8368C1.02432 12.295 0 11.734 0 10.8312V1.16885C0 0.265955 1.02432 -0.294967 1.83644 0.163196L10.4 4.99434Z' />
        </svg>
    );
}
