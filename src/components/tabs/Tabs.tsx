import React, { JSX } from 'react';

export interface TabsProps {
    children: React.ReactNode;

    activeTab: number;
}

export default function Tabs({ children, activeTab, ...props }: TabsProps) {
    return (
        <ul {...props}>
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
