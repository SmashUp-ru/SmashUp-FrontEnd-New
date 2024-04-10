'use client';

import { Popover } from 'react-tiny-popover';
import { useState } from 'react';
import React from 'react';
import ExitIcon from '@/components/icons/ExitIcon';

export default function SmashUpPopover({
    icon,
    content
}: {
    icon: React.JSX.Element;
    content: React.JSX.Element;
}) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
            padding={10}
            content={
                <div className='p-16 bg-button-text rounded-2xl max-w-[737px] relative'>
                    <div
                        className='absolute cursor-pointer right-8 top-8'
                        onClick={() => setIsPopoverOpen(false)}
                    >
                        <ExitIcon width={28} height={28} />
                    </div>
                    {content}
                </div>
            }
        >
            <div className='cursor-pointer' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                {icon}
            </div>
        </Popover>
    );
}
