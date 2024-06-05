import { siteConfig } from '@/config/site';

export default function Footer() {
    return (
        <div className='pb-5 flex flex-col gap-1'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-8'>
                    {siteConfig.footer.links.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className='text-onSurface font-bold text-base'
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <span className='text-primary font-bold text-base'>2024 SmashUp</span>
            </div>
            <span className='text-onSurfaceVariant font-medium text-base'>
                {siteConfig.footer.text}
            </span>
        </div>
    );
}
