/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    hover: 'var(--color-primary-hover)',
                    light: 'var(--color-primary-light)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    hover: 'var(--color-secondary-hover)',
                    light: 'var(--color-secondary-light)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent)',
                    hover: 'var(--color-accent-hover)',
                    light: 'var(--color-accent-light)',
                },
                danger: {
                    DEFAULT: 'var(--color-danger)',
                    hover: 'var(--color-danger-hover)',
                    light: 'var(--color-danger-light)',
                    bg: 'var(--color-danger-bg)',
                    border: 'var(--color-danger-border)',
                    text: 'var(--color-danger-text)',
                },
                'app-bg': {
                    DEFAULT: 'var(--color-background)',
                    card: 'var(--color-background-card)',
                    input: 'var(--color-background-input)',
                    hover: 'var(--color-background-hover)',
                },
                'app-text': {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    muted: 'var(--color-text-muted)',
                    placeholder: 'var(--color-text-placeholder)',
                },
                'app-border': {
                    DEFAULT: 'var(--color-border)',
                    light: 'var(--color-border-light)',
                },
                'app-focus': 'var(--color-focus)',
            },
        },
    },
}
