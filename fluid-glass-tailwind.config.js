/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#0b1012'
        },
        'neutral-50': '#212325',
        'neutral-100': '#ffffff',
        'neutral-200': '#000000',
        'neutral-300': '#f3f0ec',
        background: '#f3f0ec',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Aeonik Pro',
            'sans-serif'
        ],
        mono: [
            'Aeonik Mono',
            'sans-serif'
        ],
        body: [
            'Times New Roman',
            'sans-serif'
        ]
    },
    fontSize: {
        '8': [
            '8px',
            {
                lineHeight: 'normal'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '32px',
                letterSpacing: '-0.64px'
            }
        ],
        '51.2': [
            '51.2px',
            {
                lineHeight: '51.2px',
                letterSpacing: '-1.536px'
            }
        ],
        '25.6': [
            '25.6px',
            {
                lineHeight: '28.8px',
                letterSpacing: '-0.512px'
            }
        ],
        '19.2': [
            '19.2px',
            {
                lineHeight: '23.04px'
            }
        ],
        '14.4': [
            '14.4px',
            {
                lineHeight: '18.72px'
            }
        ],
        '12.8': [
            '12.8px',
            {
                lineHeight: '16.64px'
            }
        ],
        '11.2': [
            '11.2px',
            {
                lineHeight: '14.56px',
                letterSpacing: '1.12px'
            }
        ],
        '9.6': [
            '9.6px',
            {
                lineHeight: '8px',
                letterSpacing: '0.768px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '12': '24px',
        '24': '48px',
        '28': '56px',
        '32': '64px',
        '36': '72px',
        '48': '96px',
        '60': '120px',
        '64': '128px',
        '72': '144px',
        '131': '262px',
        '180': '360px',
        '133px': '133px',
        '367px': '367px'
    },
    borderRadius: {
        lg: '16px'
    },
    screens: {
        sm: '640px'
    },
    transitionDuration: {
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        linear: 'linear',
        default: 'ease'
    }
},
  },
};
