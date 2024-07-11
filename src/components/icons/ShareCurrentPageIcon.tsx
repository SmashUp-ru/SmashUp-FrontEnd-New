import React from 'react';
import { IconComponentProps } from '@/models/icons';
import ShareIcon from './ShareIcon';
import getWarningToast from '../toast/Warning';

export default function ShareCurrentIcon({ width, height, color, className }: IconComponentProps) {
    // w: 26; h: 22
    const warning = getWarningToast;

    return (
        <ShareIcon
            width={width}
            height={height}
            color={color}
            className={className + ' cursor-pointer'}
            onClick={() => {
                warning('Ссылка скопирована в буфер обмена', 'success');
                navigator.clipboard.writeText(window.location.href);
            }}
        />
    );
}
