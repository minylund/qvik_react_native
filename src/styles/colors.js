import Color from 'color';

const grayBase = '#000000';

export const colorStyles = {
  brand: {
    primary: '#586BA4', // Blue Yonder
    secondary: '#3C3744', // Onyx
    success: '#FBFFF1', // Ivory
    info: '#B4C5E4', // Light Steel Blue
    warning: '#fff',
    danger: '#fff',
  },
  gray: {
    darker: Color(grayBase).lighten(0.13),
    dark: Color(grayBase).lighten(0.20),
    light: Color(grayBase).lighten(0.46),
    lighter: Color(grayBase).lighten(0.93),
    trueGray: Color(grayBase).lighten(0.33),
  },
  white: '#fff',
};
