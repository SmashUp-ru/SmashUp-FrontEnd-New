import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function PauseIcon({ width, height, color, onClick }: IconComponentProps) {
    // w: 48, h: 48
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <g clipPath='url(#clip0_833_4337)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z'
                    fill='#1A1A1A'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM21.1814 14.2137C20.9208 14.0743 20.6622 14 19.9489 14H18.0511C17.3379 14 17.0793 14.0743 16.8185 14.2137C16.5578 14.3532 16.3532 14.5578 16.2137 14.8185C16.0743 15.0793 16 15.3379 16 16.0511V31.9488C16 32.6622 16.0743 32.9208 16.2137 33.1814C16.3532 33.4422 16.5578 33.6468 16.8185 33.7862C17.0793 33.9258 17.3379 34 18.0511 34H19.9489C20.6622 34 20.9208 33.9258 21.1814 33.7862C21.4422 33.6468 21.6468 33.4422 21.7862 33.1814C21.9258 32.9208 22 32.6622 22 31.9488V16.0511C22 15.3379 21.9258 15.0793 21.7862 14.8185C21.6468 14.5578 21.4422 14.3532 21.1814 14.2137ZM31.1814 14.2137C30.9208 14.0743 30.6622 14 29.9488 14H28.0512C27.3378 14 27.0792 14.0743 26.8186 14.2137C26.5578 14.3532 26.3532 14.5578 26.2138 14.8185C26.0742 15.0793 26 15.3379 26 16.0511V31.9488C26 32.6622 26.0742 32.9208 26.2138 33.1814C26.3532 33.4422 26.5578 33.6468 26.8186 33.7862C27.0792 33.9258 27.3378 34 28.0512 34H29.9488C30.6622 34 30.9208 33.9258 31.1814 33.7862C31.4422 33.6468 31.6468 33.4422 31.7862 33.1814C31.9258 32.9208 32 32.6622 32 31.9488V16.0511C32 15.3379 31.9258 15.0793 31.7862 14.8185C31.6468 14.5578 31.4422 14.3532 31.1814 14.2137Z'
                />
            </g>
        </svg>
    );
}
