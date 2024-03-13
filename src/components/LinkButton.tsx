import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkButton = forwardRef<HTMLAnchorElement, AnchorProps>(
    ({ className, href, type, children, ...props }, ref) => {
        return (
            <a
                href={href}
                type={type}
                className={twMerge(
                    'rounded-2xl bg-primary text-button-text font-semibold text-xl text-center',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </a>
        );
    }
);

LinkButton.displayName = 'Link';

export default LinkButton;
