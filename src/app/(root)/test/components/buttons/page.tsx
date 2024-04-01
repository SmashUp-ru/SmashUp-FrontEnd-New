import Button from '@/components/smashup/Button';
import SettingsIcon from '@/components/icons/SettingsIcon';

export default function ButtonsOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Buttons*/}
            <div className='w-full flex flex-col gap-20'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='text-primary min-w-[200px]'>Buttons</span>
                    <span className='w-[400px]'>Default</span>
                    <span className='w-[400px]'>Disabled</span>
                </div>

                {/*Type=Fill*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Fill</span>
                    <Button>Text</Button>
                    <Button disabled>Text</Button>
                </div>

                {/*Type=Fill+Icon*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Fill+Icon</span>
                    <Button icon={<SettingsIcon width={21} height={21} />}>Text</Button>
                    <Button icon={<SettingsIcon width={21} height={21} />} disabled>
                        Text
                    </Button>
                </div>

                {/*Type=Stroke*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Stroke</span>
                    <Button category='stoke'>Text</Button>
                    <Button category='stoke' disabled>
                        Text
                    </Button>
                </div>

                {/*Type=Stroke+Icon*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Stroke+Icon</span>
                    <Button category='stoke' icon={<SettingsIcon width={21} height={21} />}>
                        Text
                    </Button>
                    <Button
                        category='stoke'
                        icon={<SettingsIcon width={21} height={21} />}
                        disabled
                    >
                        Text
                    </Button>
                </div>
            </div>
        </div>
    );
}
