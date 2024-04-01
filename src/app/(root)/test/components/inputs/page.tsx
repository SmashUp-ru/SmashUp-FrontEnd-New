import Input from '@/components/smashup/Input';
import SettingsIcon from '@/components/icons/SettingsIcon';

export default function InputsOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Inputs*/}
            <div className='w-fill flex flex-col gap-20 w-full'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='text-primary min-w-[200px]'>Inputs</span>
                    <span className='w-[200px]'>Default</span>
                    <span className='w-[200px]'>Focus</span>
                    <span className='w-[200px]'>Filled</span>
                    <span className='w-[200px]'>Error</span>
                </div>

                {/*Type=Text*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='min-w-[200px]'>Type=Text</span>
                    <Input placeholder='Text' className='w-[200px]' />
                    <Input placeholder='Text' isFocused={true} className='w-[200px]' />
                    <Input defaultValue='Text' className='w-[200px]' />
                    <Input defaultValue='Text' isError={true} className='w-[200px]' />
                </div>

                {/*Type=Text+Helper*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='min-w-[200px]'>Type=Text+Helper</span>
                    <Input
                        placeholder='Text'
                        helper='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        helper='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        helper='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        helper='Вспомогательный текст'
                        className='w-[200px]'
                    />
                </div>

                {/*Type=Text+Icon*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='min-w-[200px]'>Type=Text+Icon</span>
                    <Input
                        placeholder='Text'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                </div>

                {/*Type=Text+Heading*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='min-w-[200px]'>Type=Text+Heading</span>
                    <Input
                        placeholder='Text'
                        heading='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        heading='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        heading='Вспомогательный текст'
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        heading='Вспомогательный текст'
                        className='w-[200px]'
                    />
                </div>

                {/*Type=Text+Icon+Heading*/}
                <div className='w-full flex flex-row gap-10 items-center'>
                    <span className='min-w-[200px]'>Type=Text+Icon+Heading</span>
                    <Input
                        placeholder='Text'
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                        className='w-[200px]'
                    />
                </div>
            </div>
        </div>
    );
}
