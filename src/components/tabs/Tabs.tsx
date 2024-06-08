import React, { JSX } from 'react';

export interface TabsProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
    activeTab: number;
}

export default function Tabs({ children, activeTab, className, ...props }: TabsProps) {
    return (
        <ul {...props} className={className}>
            {children &&
                React.Children.map(children, (child, index) =>
                    React.cloneElement(child as JSX.Element, {
                        key: index,
                        active: activeTab === index,
                        index: index
                    })
                )}
        </ul>
    );
}
