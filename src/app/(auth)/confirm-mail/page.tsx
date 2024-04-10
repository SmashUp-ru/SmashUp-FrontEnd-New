import React from 'react';
import SmashUpButton from '@/components/smashup/Button/Button';

export default function ConfirmMail() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center'>
                <h1 className='text-4xl md:text-5xl text-primary font-semibold'>
                    Восстановление пароля
                </h1>
                <p className='text-secondary-text font-medium text-xl'>
                    На вашу почту было отправлено письмо с ссылкой на восстановление пароля.
                </p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-6 w-full'>
                    <div className='w-full flex flex-col gap-5'>
                        <SmashUpButton>Подтвердить</SmashUpButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
