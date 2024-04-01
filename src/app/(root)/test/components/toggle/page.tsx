import SmashUpToggle from '@/components/smashup/toggle/Toggle';

export default function ButtonsOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Buttons*/}
            <div className='w-full flex flex-col gap-20'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='text-primary min-w-[200px]'>Toggle</span>
                    <span className='w-[400px]'>Off</span>
                    <span className='w-[400px]'>On</span>
                </div>

                {/*Off*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <SmashUpToggle defaultChecked={false} label='Text' />
                </div>

                {/*On*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <SmashUpToggle defaultChecked={true} label='Text' />
                </div>
            </div>
        </div>
    );
}
