// React Theme — extracted from https://fluid.glass/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '8': string;
    '16': string;
    '32': string;
    '51.2': string;
    '25.6': string;
    '19.2': string;
    '14.4': string;
    '12.8': string;
    '11.2': string;
    '9.6': string;
 *   };
 *   space: {
    '2': string;
    '24': string;
    '48': string;
    '56': string;
    '64': string;
    '72': string;
    '96': string;
    '120': string;
    '128': string;
    '133': string;
    '144': string;
    '262': string;
    '360': string;
    '367': string;
 *   };
 *   radii: {
    lg: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#0b1012",
    "background": "#f3f0ec",
    "foreground": "#000000",
    "neutral50": "#212325",
    "neutral100": "#ffffff",
    "neutral200": "#000000",
    "neutral300": "#f3f0ec"
  },
  "fonts": {
    "body": "'Times New Roman', sans-serif",
    "mono": "'Aeonik Mono', monospace"
  },
  "fontSizes": {
    "8": "8px",
    "16": "16px",
    "32": "32px",
    "51.2": "51.2px",
    "25.6": "25.6px",
    "19.2": "19.2px",
    "14.4": "14.4px",
    "12.8": "12.8px",
    "11.2": "11.2px",
    "9.6": "9.6px"
  },
  "space": {
    "2": "2px",
    "24": "24px",
    "48": "48px",
    "56": "56px",
    "64": "64px",
    "72": "72px",
    "96": "96px",
    "120": "120px",
    "128": "128px",
    "133": "133px",
    "144": "144px",
    "262": "262px",
    "360": "360px",
    "367": "367px"
  },
  "radii": {
    "lg": "16px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#0b1012",
      "light": "hsl(197, 24%, 21%)",
      "dark": "hsl(197, 24%, 10%)"
    },
    "background": {
      "default": "#f3f0ec",
      "paper": "#212325"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#212325"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "32px"
    },
    "h2": {
      "fontSize": "25.6px",
      "fontWeight": "400",
      "lineHeight": "28.8px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "body2": {
      "fontSize": "14.4px",
      "fontWeight": "400",
      "lineHeight": "18.72px"
    }
  },
  "shape": {
    "borderRadius": 16
  },
  "shadows": []
};

export default theme;
