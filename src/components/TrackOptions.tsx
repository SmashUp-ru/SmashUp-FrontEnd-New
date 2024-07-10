'use client';

import { Popover } from 'react-tiny-popover';
import { useState } from 'react';

export default function TrackOptions() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['left']}
            content={
                <div className='bg-surface p-4 m-4 flex flex-col gap-4'>
                    <p>красный</p>
                    <Popover
                        isOpen={isPopoverOpen2}
                        positions={['left']}
                        content={
                            <div className='bg-surface p-4 m-4 flex flex-col gap-4'>
                                <p>синий</p>
                                <div
                                    onClick={() => {
                                        setIsPopoverOpen2(false);
                                    }}
                                >
                                    {isPopoverOpen2.toString()}
                                </div>
                            </div>
                        }
                    >
                        <div
                            onClick={() => {
                                setIsPopoverOpen2(!isPopoverOpen2);
                            }}
                        >
                            {isPopoverOpen2.toString()}
                        </div>
                    </Popover>
                </div>
            }
        >
            <div
                onClick={() => {
                    setIsPopoverOpen(!isPopoverOpen);
                    setIsPopoverOpen2(false);
                }}
            >
                {isPopoverOpen.toString()}
            </div>
        </Popover>
    );
}
