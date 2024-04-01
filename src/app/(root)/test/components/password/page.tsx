import Password from '@/components/smashup/Password';

export default function PasswordOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Inputs*/}
            <div className='w-full flex flex-col gap-20'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='text-primary min-w-[200px]'>Inputs</span>
                    <span className='w-[400px]'>Default</span>
                    <span className='w-[400px]'>Focus</span>
                    <span className='w-[400px]'>Filled</span>
                    <span className='w-[400px]'>Error</span>
                </div>

                {/*Type=Forgot*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Forgot</span>
                    <Password
                        value='1kLaSsRULIT6969'
                        disabled={true}
                        showForgotButton={true}
                        className='w-[400px]'
                    />
                    <Password
                        value='1kLaSsRULIT6969'
                        isFocused={true}
                        showPasswordButton={true}
                        showForgotButton={true}
                        className='w-[400px]'
                    />
                    <Password
                        value='1kLaSsRULIT6969'
                        showPasswordButton={true}
                        showForgotButton={true}
                        className='w-[400px]'
                    />
                    <Password
                        value='1kLaSsRULIT6969'
                        showPasswordButton={true}
                        showForgotButton={true}
                        isError={true}
                        className='w-[400px]'
                    />
                </div>

                {/*Type=No Forgot*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=No Forgot</span>
                    <Password value='1kLaSsRULIT6969' disabled={true} className='w-[400px]' />
                    <Password
                        value='1kLaSsRULIT6969'
                        isFocused={true}
                        showPasswordButton={true}
                        className='w-[400px]'
                    />
                    <Password
                        value='1kLaSsRULIT6969'
                        showPasswordButton={true}
                        className='w-[400px]'
                    />
                    <Password
                        value='1kLaSsRULIT6969'
                        showPasswordButton={true}
                        isError={true}
                        className='w-[400px]'
                    />
                </div>
            </div>
        </div>
    );
}
