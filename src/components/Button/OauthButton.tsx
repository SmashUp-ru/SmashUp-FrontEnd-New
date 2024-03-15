import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const OauthButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, children, ...props }, ref) => {
        return (
            <button
                type={type}
                className={twMerge(
                    'flex flex-row justify-center items-center gap-2 border-2 border-outline rounded-2xl bg-black text-white font-semibold text-xl',
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

OauthButton.displayName = 'Oauth Button';

export default OauthButton;
