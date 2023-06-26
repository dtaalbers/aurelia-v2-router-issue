module.exports = {
    content: [
        './src/**/*.{html,ts,txt}' //
    ],
    theme: {
        container: {
            screens: {
                'sm': '100%',
                'md': '100%',
                'lg': '100%',
                'xl': '100%',
                '2xl': '1280px'
            }
        },
        extend: {
            fontSize: {
                xxs: '.65rem'
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }), //
        require('@tailwindcss/typography')
    ]
};
