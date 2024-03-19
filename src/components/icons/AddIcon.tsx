import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function AddIcon({ width, height, color }: IconComponentProps) {
    // w: 26, h: 26
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current`}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 0C13.6732 0 14.2189 0.545734 14.2189 1.21892V11.7811H24.7811C25.4543 11.7811 26 12.3268 26 13C26 13.6732 25.4543 14.2189 24.7811 14.2189H14.2189V24.7811C14.2189 25.4543 13.6732 26 13 26C12.3268 26 11.7811 25.4543 11.7811 24.7811V14.2189H1.21892C0.545734 14.2189 0 13.6732 0 13C0 12.3268 0.545734 11.7811 1.21892 11.7811H11.7811V1.21892C11.7811 0.545734 12.3268 0 13 0Z'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 0C13.6732 0 14.2189 0.545734 14.2189 1.21892V11.7811H24.7811C25.4543 11.7811 26 12.3268 26 13C26 13.6732 25.4543 14.2189 24.7811 14.2189H14.2189V24.7811C14.2189 25.4543 13.6732 26 13 26C12.3268 26 11.7811 25.4543 11.7811 24.7811V14.2189H1.21892C0.545734 14.2189 0 13.6732 0 13C0 12.3268 0.545734 11.7811 1.21892 11.7811H11.7811V1.21892C11.7811 0.545734 12.3268 0 13 0Z'
                fillOpacity='0.2'
            />
        </svg>
    );
}
