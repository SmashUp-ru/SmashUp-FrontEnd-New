import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function PlayIcon({ width, height, color, onClick }: IconComponentProps) {
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
            <g clipPath='url(#clip0_4867_3484)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z'
                    fill='#020202'
                />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM34.0478 25.7352C35.3174 24.9678 35.3174 23.029 34.0478 22.2614L20.8244 14.266C19.5656 13.5049 18 14.4677 18 16.003V31.9938C18 33.529 19.5656 34.4918 20.8244 33.7306L34.0478 25.7352Z'
                />
            </g>
        </svg>
    );
}
