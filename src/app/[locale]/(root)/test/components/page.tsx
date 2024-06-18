import Link from 'next/link';

export default function ComponentsOverview() {
    return (
        <div className='flex flex-col gap-5'>
            <Link href='/test/components/inputs'>Открыть страницу с Inputs</Link>
            <Link href='/test/components/password'>Открыть страницу с Password</Link>
            <Link href='/test/components/buttons'>Открыть страницу с Buttons</Link>
            <Link href='/test/components/upload_buttons'>Открыть страницу с Upload Buttons</Link>
            <Link href='/test/components/toggle'>Открыть страницу с Toggle</Link>
            <Link href='/test/components/checkbox'>Открыть страницу с CheckBox</Link>
            <Link href='/test/components/slider'>Открыть страницу с Slider (Bit Toggle)</Link>
            <Link href='/test/components/popover'>Открыть страницу с Popover</Link>
        </div>
    );
}
