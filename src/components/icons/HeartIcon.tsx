import React from 'react';
import { IconComponentProps } from '@/models/icons';

export interface HeartIconProps extends IconComponentProps {
    filled?: boolean;
}

export default function HeartIcon({
    width,
    height,
    color,
    filled,
    className,
    onClick
}: HeartIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 20 17'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current ${filled} ${className}`}
            onClick={onClick}
        >
            <path
                fill=''
                d='M13.9918 0.00598621C12.5405 0.0698058 11.2389 0.643336 10.111 1.69952L9.994 1.813L9.87226 1.69501C8.66256 0.576055 7.2746 0 5.73438 0C2.57716 0 0 2.56027 0 5.71723C0 8.80463 1.12733 10.2688 6.18242 14.263L8.87045 16.3607C9.53455 16.8783 10.4655 16.8783 11.1296 16.3607L13.4937 14.5182L14.4269 13.7784C18.9647 10.144 20 8.67599 20 5.71723C20 2.56027 17.4228 0 14.2656 0L13.9918 0.00598621ZM14.2656 1.8C16.4314 1.8 18.2 3.55704 18.2 5.71723L18.1951 6.01083C18.1192 8.16744 17.1332 9.35205 12.686 12.8631L10.0231 14.941C10.0095 14.9515 9.9905 14.9515 9.97695 14.941L7.6128 13.0984L6.73899 12.4066C2.59678 9.09768 1.8 7.96676 1.8 5.71723C1.8 3.55704 3.56863 1.8 5.73438 1.8C7.06729 1.8 8.24077 2.41758 9.30377 3.71525C9.66623 4.15771 10.3441 4.15426 10.702 3.70812C11.7389 2.41565 12.9087 1.8 14.2656 1.8Z'
            />
        </svg>
    );
}
