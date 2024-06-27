'use client';
import { useEffect, useState } from 'react';
import { changeArray, incrementArray } from '@/utils/arrays';
import axios, { AxiosResponse } from 'axios';
import { MockUser, User } from '@/utils/types';
import Cookies from 'js-cookie';

export function useUserApi(query: number[]): {
    data: User[];
    loading: boolean;
    error: boolean;
} {
    const [data, setData] = useState<User[]>([]);
    const [load, setLoad] = useState<{ id: number; value: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // @ts-ignore
        for (const index in query) {
            const i = query[index];
            const cookie = Cookies.get(i.toString());

            if (cookie === undefined) {
                setLoad(incrementArray(load, { id: index, value: i }));
            } else {
                setLoad(incrementArray(load, { id: index, value: i }));
                setData(incrementArray(data, new MockUser()));
            }
        }

        axios
            .get(`https://api.smashup.ru/user/get_many?id=${load.map((i) => i.value).join(',')}`)
            .then((res: AxiosResponse<User[]>) => {
                for (const i of res.data) {
                    setData(changeArray(data, data[i.id], i));
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [data, load, error]);

    return { data, loading, error };
}
