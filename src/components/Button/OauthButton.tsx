import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnchorProps } from '@/components/Button/LinkButton';

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const OauthButton = forwardRef<HTMLAnchorElement, AnchorProps>(
    ({ className, href, children, ...props }) => {
        return (
            <a
                className={twMerge(
                    'flex flex-row justify-center items-center gap-2 border-2 border-outline rounded-2xl bg-black text-white font-semibold text-xl',
                    className
                )}
                href={href}
                {...props}
            >
                {children}
            </a>
        );
    }
);

OauthButton.displayName = 'Oauth Button';

export default OauthButton;
