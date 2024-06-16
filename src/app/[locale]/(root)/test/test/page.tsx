'use client';

import Tabs from '@/components/tabs/Tabs';
import Tab from '@/components/tabs/Tab';
import { useEffect, useState } from 'react';
import Fullscreen from '@/components/player/Fullscreen';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useUserCache } from '@/hooks/repositories';
import ArtistCard from '@/components/ArtistCard';
import { User } from '@/hooks/entities';

export default function Test() {
    const [activeTab, setActiveTab] = useState(0);

    const cache = useUserCache();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        cache.getMany([1, 2, 3, 4, 5]).then((result) => {
            setUsers(result);
            console.log(result[0].permissions);
            console.log(result[0].permissions.isAdmin);
            console.log(result[0].permissions.isAdmin());
        });
    }, [cache]);

    const [fullScreen, setFullScreen] = useState(false);
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

            <SmashUpButton className='' onClick={() => setFullScreen(true)}>
                Открыть
            </SmashUpButton>

            <Fullscreen active={fullScreen} setActive={setFullScreen} />

            {users.map((user) => (
                <ArtistCard
                    id={user.id}
                    key={user.id}
                    title={user.username}
                    description={
                        user.permissions.isAdmin()
                            ? 'Администратор'
                            : user.permissions.isModerator()
                              ? 'Модератор'
                              : user.permissions.isMashuper()
                                ? 'Мэшапер'
                                : 'Пользователь'
                    }
                    image={''}
                    /*image={'https://api.smashup.ru/uploads/user/' + user.imageUrl + '_800x800.png'}*/
                />
            ))}
        </div>
    );
}
