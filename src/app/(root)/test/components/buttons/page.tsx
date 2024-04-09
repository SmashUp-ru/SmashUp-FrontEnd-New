import SmashUpButton from '@/components/smashup/Button/Button';
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
                    <SmashUpButton>Text</SmashUpButton>
                    <SmashUpButton disabled>Text</SmashUpButton>
                </div>

                {/*Type=Fill+Icon*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Fill+Icon</span>
                    <SmashUpButton icon={<SettingsIcon width={21} height={21} />}>
                        Text
                    </SmashUpButton>
                    <SmashUpButton icon={<SettingsIcon width={21} height={21} />} disabled>
                        Text
                    </SmashUpButton>
                </div>

                {/*Type=Stroke*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Stroke</span>
                    <SmashUpButton category='stoke'>Text</SmashUpButton>
                    <SmashUpButton category='stoke' disabled>
                        Text
                    </SmashUpButton>
                </div>

                {/*Type=Stroke+Icon*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='min-w-[170px]'>Type=Stroke+Icon</span>
                    <SmashUpButton category='stoke' icon={<SettingsIcon width={21} height={21} />}>
                        Text
                    </SmashUpButton>
                    <SmashUpButton
                        category='stoke'
                        icon={<SettingsIcon width={21} height={21} />}
                        disabled
                    >
                        Text
                    </SmashUpButton>
                </div>
            </div>
        </div>
    );
}
