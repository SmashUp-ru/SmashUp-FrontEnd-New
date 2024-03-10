import { IconComponentProps } from '@/models/icons';
import React from 'react';

export interface RouteType {
    // eslint-disable-next-line no-unused-vars
    icon(props: IconComponentProps): React.JSX.Element;

    label: string;
    active: boolean;
    href: string;
}
