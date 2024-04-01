'use client';

import Toggle, { ToggleProps } from 'react-toggle';
import { useState } from 'react';
import './toggle.css';
import { twMerge } from 'tailwind-merge';

export interface SmashupToggleProps extends ToggleProps {
    label?: string;
}

export default function SmashUpToggle({ defaultChecked, label, className }: SmashupToggleProps) {
    const [checked, setChecked] = useState(false);
    return (
        <label className={twMerge('flex flex-row items-center gap-5', className)}>
            <span className='font-medium text-base text-icon'>{label}</span>
            <Toggle
                defaultChecked={defaultChecked}
                icons={false}
                onChange={() => {
                    setChecked(!checked);
                }}
                className='toggle-primary'
            />
        </label>
    );
}
