import { useTranslations } from 'next-intl';

export default function ComponentsOverview() {
    const transl = useTranslations('test.components_overview');
    return (
        <div className='flex flex-col gap-5'>
            <a href='/test/components/inputs'>{transl('inputs')}</a>
            <a href='/test/components/password'>{transl('password')}</a>
            <a href='/test/components/buttons'>{transl('buttons')}</a>
            <a href='/test/components/upload_buttons'>{transl('upload-buttons')}</a>
            <a href='/test/components/toggle'>{transl('toggle')}</a>
            <a href='/test/components/checkbox'>{transl('checkbox')}</a>
            <a href='/test/components/slider'>{transl('slider')}</a>
            <a href='/test/components/popover'>{transl('popover')}</a>
        </div>
    );
}
