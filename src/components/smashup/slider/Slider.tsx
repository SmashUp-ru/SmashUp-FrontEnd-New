'use client';

import ReactSlider, { ReactSliderProps } from 'react-slider';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SliderProps extends ReactSliderProps {
    label?: string;
    markHints?: string[];
    amount: number;
}

export default function SmashUpSlider({
    label,
    markHints,
    amount,
    value,
    className,
    ...props
}: SliderProps) {
    const [sliderValue, setSliderValue] = useState(value ? value : 0);

    return (
        <div className={twMerge('flex flex-row gap-6 items-center justify-between', className)}>
            <span className='font-normal text-base text-icon'>{label}</span>
            <div className='flex flex-col gap-2'>
                <div className='w-[300px] flex flex-row justify-between'>
                    {markHints?.map((hint, index) => (
                        <span key={index} className='font-normal text-xs text-icon'>
                            {hint}
                        </span>
                    ))}
                </div>
                <ReactSlider
                    {...props}
                    className='w-[275px] h-2'
                    marks
                    markClassName='bg-outline rounded-sm w-0.5 h-5 -top-2/3'
                    min={0}
                    max={amount - 1}
                    value={sliderValue}
                    onChange={(val) => setSliderValue(val)}
                    thumbClassName='bg-white rounded-sm -top-2/3 w-2.5 h-5'
                    trackClassName=''
                    renderMark={(props) => {
                        return (
                            <span
                                {...props}
                                className={twMerge(
                                    props.className,
                                    (props.key as number) < sliderValue ? 'bg-primary' : ''
                                )}
                            />
                        );
                    }}
                    renderThumb={(props, state) => (
                        <div className='' {...props}>
                            {state.valueNow}
                        </div>
                    )}
                    renderTrack={(props, state) => {
                        if (state.index === 1) {
                            return <div {...props} className='h-2 bg-outline' />;
                        }
                        return <div {...props} className='h-2 bg-primary' />;
                    }}
                />
            </div>
        </div>
    );
}
