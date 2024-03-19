import React from 'react';
import Button from '@/components/Button/Button';
import PasswordIcon from '@/components/icons/PasswordIcon';

export default function UpdatePage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center'>
                <h1 className='text-4xl md:text-5xl text-primary font-semibold'>
                    Восстановление пароля
                </h1>
                <p className='text-secondary-text font-medium text-xl'>Не забывайте!</p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-6 w-full'>
                    {/* Первый пароль */}
                    <div className='w-full flex flex-col gap-2.5'>
                        <label className='text-left'>Новый пароль</label>
                        <div className='w-full flex justify-start items-center relative'>
                            <input
                                type='password'
                                placeholder='12345qwerty'
                                className='px-10 py-4 w-full rounded-2xl focus:outline-none'
                            />

                            <PasswordIcon width={17} height={20} className='absolute ml-4' />
                        </div>
                    </div>

                    {/* Второй пароль */}
                    <div className='w-full flex flex-col gap-2.5'>
                        <label className='text-left'>Подтверждение пароля</label>
                        <div className='w-full flex justify-start items-center relative'>
                            <input
                                type='password'
                                placeholder='12345qwerty'
                                className='px-10 py-4 w-full rounded-2xl focus:outline-none'
                            />

                            <PasswordIcon width={17} height={20} className='absolute ml-4' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-5'>
                        <Button className='h-[54px]'>Подтвердить</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
