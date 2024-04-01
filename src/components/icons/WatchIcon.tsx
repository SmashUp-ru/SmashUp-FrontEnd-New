import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function WatchIcon({ width, height }: IconComponentProps) {
    // w: 14, h: 14
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1.5C3.9624 1.5 1.5 3.9624 1.5 7C1.5 10.0376 3.9624 12.5 7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.9624 10.0376 1.5 7 1.5ZM0 7C0 3.134 3.134 0 7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7ZM6.25 3C6.44891 3 6.63968 3.07902 6.78033 3.21967C6.92098 3.36032 7 3.55109 7 3.75V7.267L9.3104 8.3172C9.48861 8.40132 9.62655 8.55219 9.69442 8.73721C9.76228 8.92222 9.75461 9.1265 9.67307 9.30591C9.59153 9.48531 9.44266 9.62542 9.25865 9.69594C9.07464 9.76647 8.87026 9.76175 8.6897 9.6828L5.9397 8.4328C5.80859 8.37322 5.69741 8.27714 5.61943 8.15606C5.54146 8.03498 5.5 7.89401 5.5 7.75V3.75C5.5 3.55109 5.57902 3.36032 5.71967 3.21967C5.86032 3.07902 6.05109 3 6.25 3Z'
                fill='#EBEBEB'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1.5C3.9624 1.5 1.5 3.9624 1.5 7C1.5 10.0376 3.9624 12.5 7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.9624 10.0376 1.5 7 1.5ZM0 7C0 3.134 3.134 0 7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7ZM6.25 3C6.44891 3 6.63968 3.07902 6.78033 3.21967C6.92098 3.36032 7 3.55109 7 3.75V7.267L9.3104 8.3172C9.48861 8.40132 9.62655 8.55219 9.69442 8.73721C9.76228 8.92222 9.75461 9.1265 9.67307 9.30591C9.59153 9.48531 9.44266 9.62542 9.25865 9.69594C9.07464 9.76647 8.87026 9.76175 8.6897 9.6828L5.9397 8.4328C5.80859 8.37322 5.69741 8.27714 5.61943 8.15606C5.54146 8.03498 5.5 7.89401 5.5 7.75V3.75C5.5 3.55109 5.57902 3.36032 5.71967 3.21967C5.86032 3.07902 6.05109 3 6.25 3Z'
                fill='#020202'
                fillOpacity='0.2'
            />
        </svg>
    );
}