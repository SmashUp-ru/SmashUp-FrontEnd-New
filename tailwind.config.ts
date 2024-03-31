import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },

            colors: {
                current: 'currentColor',
                text: '#020202',
                'secondary-text': '#EBEBEB',
                'sidebar-gray': '#0A0A0A',
                'gray-header': '#EBEBEB',
                primary: '#A887F8',
                error: '#FF4545',
                'button-text': '#121212',
                outline: '#1A1A1A',
                'outline-text': '#FFFFFF',
                icon: '#bcbcbc',
                vk: '#0077FF',
                input: '#0B0B0B',
                'input-text': '#636363'
            },

            borderRadius: {
                '4xl': '32px'
            }
        }
    },
    plugins: []
};
export default config;
