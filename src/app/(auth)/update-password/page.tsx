import React from 'react';
import SmashUpPassword from '@/components/smashup/Password/Password';
import SmashUpButton from '@/components/smashup/Button/Button';

export default function UpdatePage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center flex flex-col gap-2.5'>
                <h1 className='text-4xl md:text-5xl text-primary font-semibold'>
                    Восстановление пароля
                </h1>
                <p className='text-onSurface font-medium text-xl'>Не забывайте!</p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-8 w-full'>
                    {/* Первый пароль */}
                    <SmashUpPassword showPasswordButton placeholder='12345qwerty' />

                    {/* Второй пароль */}
                    <SmashUpPassword
                        heading='Подтверждение пароля'
                        showPasswordButton
                        placeholder='12345qwerty'
                    />

                    <div className='w-full flex flex-col gap-5'>
                        <SmashUpButton>Подтвердить</SmashUpButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
