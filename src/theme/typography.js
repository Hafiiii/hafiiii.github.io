// ----------------------------------------------------------------------

export function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
  }
  
  export function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  export function responsiveFontSizes({ sm, md, lg }) {
    return {
      '@media (min-width:600px)': {
        fontSize: pxToRem(sm),
      },
      '@media (min-width:900px)': {
        fontSize: pxToRem(md),
      },
      '@media (min-width:1200px)': {
        fontSize: pxToRem(lg),
      },
    };
  }
  
  const primaryFont = 'Roboto Condensed';
  // const primaryFont = '';
  
  // ----------------------------------------------------------------------
  
  const typography = {
    fontFamily: primaryFont,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      fontFamily: primaryFont,
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
      fontFamily: primaryFont,
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
      fontFamily: primaryFont,
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
      fontFamily: primaryFont,
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
      fontFamily: primaryFont,
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      fontFamily: primaryFont,
    },   
  };
  
  export default typography;