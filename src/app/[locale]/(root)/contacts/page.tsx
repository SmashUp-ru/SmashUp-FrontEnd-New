import Link from 'next/link';
import React from 'react';

export default function Contacts() {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='font-semibold text-3xl'>Contacts</h1>
            <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-lg text-onSurface'>Main frontend developers:</h2>
                <span className='font-bold text-lg text-onSurfaceVariant'>
                    <Link href='https://github.com/LeonidMem'>LeonidM</Link>
                </span>
                <span className='font-bold text-lg text-onSurfaceVariant'>
                    <Link href='https://github.com/dmhd6219'>dmhd6219</Link>
                </span>
            </div>
        </div>
    );
}
