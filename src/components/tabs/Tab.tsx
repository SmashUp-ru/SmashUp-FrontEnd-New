import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TabProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    active?: boolean;
    key?: number;
    index?: number;
}

export default function Tab({ children, active, className, ...props }: TabProps) {
    return (
        <li className={twMerge(className, !active && 'hidden')} {...props}>
            {children}
        </li>
    );
}
