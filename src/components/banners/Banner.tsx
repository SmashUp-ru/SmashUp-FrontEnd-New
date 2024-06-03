import React from 'react';

export default function Banner({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-[286px] border-2 border-surface rounded-4xl flex flex-col justify-end items-center overflow-hidden'>
            {children}
        </div>
    );
}
