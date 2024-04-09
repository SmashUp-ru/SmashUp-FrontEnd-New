import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';

export default function CheckboxOverview() {
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

                {/*Type=Text+Checkbox*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[200px]'>Type=Text+Checkbox</span>
                    <SmashUpCheckBox label='Text' className='w-[400px]' />
                    <SmashUpCheckBox label='Text' checked={true} className='w-[400px]' />
                </div>
            </div>
        </div>
    );
}
