'use client';

import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import { useState } from 'react';

export default function Test() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className='flex flex-row gap-4'>
                <button onClick={() => setActiveTab(0)}>первая</button>
                <button onClick={() => setActiveTab(1)}>вторая</button>
            </div>
            <Tabs activeTab={activeTab}>
                <Tab className='bg-red-500'>
                    <div>first</div>
                </Tab>

                <Tab>
                    <div>second</div>
                </Tab>
            </Tabs>
        </div>
    );
}
