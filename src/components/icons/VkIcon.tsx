import React from 'react';
import { IconComponentProps } from '@/models/icons';
import { twMerge } from 'tailwind-merge';

export default function VkIcon({ width, height, color, className }: IconComponentProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={twMerge(`text-${color} fill-current`, className)}
        >
            <g clipPath='url(#clip0_4832_3959)'>
                <path
                    d='M0.5 12.02C0.5 6.5894 0.5 3.87413 2.18707 2.18707C3.87413 0.5 6.5894 0.5 12.02 0.5H12.98C18.4106 0.5 21.1259 0.5 22.813 2.18707C24.5 3.87413 24.5 6.5894 24.5 12.02V12.98C24.5 18.4106 24.5 21.1259 22.813 22.813C21.1259 24.5 18.4106 24.5 12.98 24.5H12.02C6.5894 24.5 3.87413 24.5 2.18707 22.813C0.5 21.1259 0.5 18.4106 0.5 12.98V12.02Z'
                    fill='#0077FF'
                />
                <path
                    d='M13.2707 17.7908C7.80073 17.7908 4.68078 14.0408 4.55078 7.80078H7.29078C7.38078 12.3808 9.40073 14.3208 11.0007 14.7208V7.80078H13.5808V11.7508C15.1608 11.5808 16.8206 9.78078 17.3806 7.80078H19.9607C19.5307 10.2408 17.7307 12.0408 16.4507 12.7808C17.7307 13.3808 19.7808 14.9508 20.5608 17.7908H17.7207C17.1107 15.8908 15.5908 14.4208 13.5808 14.2208V17.7908H13.2707Z'
                    fill='#EBEBEB'
                />
            </g>
            <defs>
                <clipPath id='clip0_4832_3959'>
                    <rect width='24' height='24' fill='white' transform='translate(0.5 0.5)' />
                </clipPath>
            </defs>
        </svg>
    );
}
