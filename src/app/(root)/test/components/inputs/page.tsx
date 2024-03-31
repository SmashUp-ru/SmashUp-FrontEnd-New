import Input from '@/components/smashup/Input';
import SettingsIcon from '@/components/icons/SettingsIcon';

export default function InputsOverview() {
    return (
        <div className='px-8 py-8 w-full'>
            {/*Inputs*/}
            <div className='w-fill flex flex-col gap-20 w-full'>
                {/*Заголовок*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span className='text-primary'>Inputs</span>
                    <span>Default</span>
                    <span>Focus</span>
                    <span>Filled</span>
                    <span>Error</span>
                </div>

                {/*Type=Text*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span>Type=Text</span>
                    <Input placeholder='Text' />
                    <Input placeholder='Text' isFocused={true} />
                    <Input defaultValue='Text' />
                    <Input defaultValue='Text' isError={true} />
                </div>

                {/*Type=Text+Helper*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span>Type=Text+Helper</span>
                    <Input placeholder='Text' helper='Вспомогательный текст' />
                    <Input placeholder='Text' isFocused={true} helper='Вспомогательный текст' />
                    <Input defaultValue='Text' helper='Вспомогательный текст' />
                    <Input defaultValue='Text' isError={true} helper='Вспомогательный текст' />
                </div>

                {/*Type=Text+Icon*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span>Type=Text+Icon</span>
                    <Input
                        placeholder='Text'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        defaultValue='Text'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                </div>

                {/*Type=Text+Heading*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span>Type=Text+Heading</span>
                    <Input placeholder='Text' heading='Вспомогательный текст' />
                    <Input placeholder='Text' isFocused={true} heading='Вспомогательный текст' />
                    <Input defaultValue='Text' heading='Вспомогательный текст' />
                    <Input defaultValue='Text' isError={true} heading='Вспомогательный текст' />
                </div>

                {/*Type=Text+Icon+Heading*/}
                <div className='w-full flex flex-row justify-around items-center'>
                    <span>Type=Text+Icon+Heading</span>
                    <Input
                        placeholder='Text'
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        placeholder='Text'
                        isFocused={true}
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        defaultValue='Text'
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                    <Input
                        defaultValue='Text'
                        isError={true}
                        heading='Вспомогательный текст'
                        icon={<SettingsIcon width={21} height={21} color='icon' />}
                    />
                </div>
            </div>
        </div>
    );
}
