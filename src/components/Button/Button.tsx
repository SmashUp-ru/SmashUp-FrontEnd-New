import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, children, ...props }, ref) => {
        return (
            <button
                type={type}
                className={twMerge(
                    'rounded-2xl bg-primary text-Button-text font-semibold text-xl',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
