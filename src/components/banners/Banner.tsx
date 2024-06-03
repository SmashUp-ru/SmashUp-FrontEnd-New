import React from 'react';

export default function Banner({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-[286px] flex flex-col justify-end items-center'>{children}</div>
    );
}
