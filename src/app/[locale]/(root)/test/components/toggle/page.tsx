import SmashUpToggle from '@/components/smashup/Toggle/Toggle';

export default function ToggleOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Toggle*/}
            <div className='w-full flex flex-col gap-20'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='text-primary min-w-[200px]'>Toggle</span>
                    <span className='w-[400px]'>Off</span>
                    <span className='w-[400px]'>On</span>
                </div>

                {/*Type=Text+Toggle*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[200px]'>Type=Text+Toggle</span>
                    <SmashUpToggle defaultChecked={false} label='Text' className='w-[400px]' />
                    <SmashUpToggle defaultChecked={true} label='Text' className='w-[400px]' />
                </div>
            </div>
        </div>
    );
}
