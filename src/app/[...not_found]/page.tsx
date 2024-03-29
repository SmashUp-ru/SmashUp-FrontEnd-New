import OutlineSmashUpLogo from '@/components/icons/OutlineSmashUpLogo';

import LinkButton from '@/components/Button/LinkButton';

export default function NotFound() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-8 py-4'>
            <OutlineSmashUpLogo />
            <div className='z-10'>
                <h1 className='text-primary font-bold text-9xl'>404</h1>
                <p className='text-gray-header font-normal text-2xl'>Что-то пошло не так</p>
            </div>
            <LinkButton href='/' className='w-[90%] max-w-[400px] py-4 z-10'>
                Вернуться на главную
            </LinkButton>
        </div>
    );
}
