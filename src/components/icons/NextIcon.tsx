import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function NextIcon({ width, height, color, onClick }: IconComponentProps) {
    // w: 16, h: 16
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M13.3333 6.446V2C13.3333 1.26363 13.9303 0.666671 14.6667 0.666671C15.4029 0.666671 16 1.26363 16 2V14C16 14.7364 15.4029 15.3333 14.6667 15.3333C13.9303 15.3333 13.3333 14.7364 13.3333 14V9.554L2.46857 15.7788C1.37143 16.4073 0 15.6216 0 14.3644V1.63556C0 0.378391 1.37143 -0.407356 2.46857 0.221231L13.3333 6.446Z'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M13.3333 6.446V2C13.3333 1.26363 13.9303 0.666671 14.6667 0.666671C15.4029 0.666671 16 1.26363 16 2V14C16 14.7364 15.4029 15.3333 14.6667 15.3333C13.9303 15.3333 13.3333 14.7364 13.3333 14V9.554L2.46857 15.7788C1.37143 16.4073 0 15.6216 0 14.3644V1.63556C0 0.378391 1.37143 -0.407356 2.46857 0.221231L13.3333 6.446Z'
                fill-opacity='0.2'
            />
        </svg>
    );
}
