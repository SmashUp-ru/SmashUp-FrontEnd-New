'use client';

import ReactSlider, { ReactSliderProps } from 'react-slider';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SliderProps extends ReactSliderProps {
    label?: string;
    markHints?: string[];
    amount: number;
    width?: string;
    height?: string;
}

export default function SmashUpSlider({
    label,
    markHints,
    amount,
    value,
    className,
    width,
    height,
    ...props
}: SliderProps) {
    const [sliderValue, setSliderValue] = useState(value ? value : 0);

    return (
        <div className={twMerge('flex flex-row gap-6 items-center', className)}>
            <span className='font-normal text-base text-onSurfaceVariant'>{label}</span>
            <div className='flex flex-col gap-2'>
                <div className='w-[300px] flex flex-row justify-between'>
                    {markHints?.map((hint, index) => (
                        <span key={index} className='font-normal text-xs text-onSurfaceVariant'>
                            {hint}
                        </span>
                    ))}
                </div>
                <ReactSlider
                    {...props}
                    className={twMerge('w-[275px] h-2', `w-${width} h-${height}`)}
                    marks
                    markClassName='bg-onPrimary rounded-sm w-0.5 h-5 -top-2/3'
                    min={0}
                    max={amount - 1}
                    value={sliderValue}
                    onChange={(val) => setSliderValue(val)}
                    thumbClassName='bg-white rounded-sm -top-2/3 w-2.5 h-5'
                    renderMark={(props) => {
                        return (
                            <span
                                {...props}
                                className={twMerge(
                                    props.className,
                                    (props.key as number) < sliderValue ? 'bg-primary' : ''
                                )}
                                key={props.key}
                            />
                        );
                    }}
                    renderThumb={(props, state) => (
                        <div className='' {...props} key={props.key}>
                            {state.valueNow}
                        </div>
                    )}
                    renderTrack={(props, state) => {
                        return (
                            <div
                                {...props}
                                className={twMerge(
                                    'h-2',
                                    state.index === 0 ? 'bg-primary' : 'bg-onPrimary'
                                )}
                                key={props.key}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
}
