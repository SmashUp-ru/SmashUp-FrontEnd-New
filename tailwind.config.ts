import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            borderRadius: {
                '4xl': '32px'
            },
            padding: {
                '15': '3.75rem',
                '17': '4.5rem'
            },
            colors: {
                current: 'currentColor',
                vk: '#0077FF'
            }
        }
    },
    plugins: [
        require('tailwindcss-themer')({
            defaultTheme: {
                extend: {
                    colors: {
                        background: '#020202',
                        onBackground: '#f5f5f5',
                        onSurface: '#ebebeb',
                        surface: '#121212',
                        onSurfaceVariant: '#bcbcbc',
                        primary: '#a37df3',
                        onPrimary: '#191919',
                        primaryVariant: '#b07df3',
                        secondary: '#5d2fdc',
                        secondaryVariant: '#7168db',
                        onSecondary: '#eeeeee',
                        error: '#db4e4e',
                        onError: '#0b0b0b',
                        surfaceVariant: '#0a0a0a'
                    }
                }
            },

            themes: [
                {
                    name: 'test-theme',
                    extend: {
                        colors: {
                            primary: '#0077FF'
                        }
                    }
                }
            ]
        })
    ]
};
export default config;
