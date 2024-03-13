import React from 'react';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    className,
    href
}: {
    children: React.ReactNode;
    className?: string;
    href?: string;
}) {
    return (
        <>
            {href === undefined && (
                <button
                    className={twMerge(
                        'rounded-2xl bg-primary text-button-text font-semibold text-xl',
                        className
                    )}
                >
                    {children}
                </button>
            )}

            {href !== undefined && (
                <a
                    href={href}
                    className={twMerge(
                        'rounded-2xl bg-primary text-button-text font-semibold text-xl text-center',
                        className
                    )}
                >
                    {children}
                </a>
            )}
        </>
    );
}

export default Button;
