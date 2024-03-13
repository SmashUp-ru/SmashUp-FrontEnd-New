import React from 'react';
import { IconComponentProps } from '@/models/icons';
import { twMerge } from 'tailwind-merge';

function SearchIcon({ width, height, color, className }: IconComponentProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            className={twMerge(`text-${color} fill-current`, className)}
        >
            <path d='M12.6574 11.5473L15.3405 14.2303C15.6473 14.5371 15.6473 15.0346 15.3405 15.3414C15.0336 15.6483 14.5361 15.6483 14.2293 15.3414L11.5463 12.6584C10.3761 13.5878 8.89533 14.143 7.28488 14.143C3.49778 14.143 0.427734 11.0729 0.427734 7.28585C0.427734 3.49876 3.49778 0.428711 7.28488 0.428711C11.072 0.428711 14.142 3.49876 14.142 7.28585C14.142 8.8963 13.5868 10.3771 12.6574 11.5473ZM7.28488 12.5716C10.2041 12.5716 12.5706 10.2051 12.5706 7.28585C12.5706 4.36663 10.2041 2.00014 7.28488 2.00014C4.36566 2.00014 1.99916 4.36663 1.99916 7.28585C1.99916 10.2051 4.36566 12.5716 7.28488 12.5716Z' />
            <path
                d='M12.6574 11.5473L15.3405 14.2303C15.6473 14.5371 15.6473 15.0346 15.3405 15.3414C15.0336 15.6483 14.5361 15.6483 14.2293 15.3414L11.5463 12.6584C10.3761 13.5878 8.89533 14.143 7.28488 14.143C3.49778 14.143 0.427734 11.0729 0.427734 7.28585C0.427734 3.49876 3.49778 0.428711 7.28488 0.428711C11.072 0.428711 14.142 3.49876 14.142 7.28585C14.142 8.8963 13.5868 10.3771 12.6574 11.5473ZM7.28488 12.5716C10.2041 12.5716 12.5706 10.2051 12.5706 7.28585C12.5706 4.36663 10.2041 2.00014 7.28488 2.00014C4.36566 2.00014 1.99916 4.36663 1.99916 7.28585C1.99916 10.2051 4.36566 12.5716 7.28488 12.5716Z'
                fillOpacity='0.2'
            />
        </svg>
    );
}

export default SearchIcon;