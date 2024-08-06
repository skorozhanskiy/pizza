import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const theme = Object.freeze({
  // apply ant design theme
  token: {
    // primary color
    // colorPrimary: '#FF5E00',
    // colorLink: 'green',
    // hover color
    // colorPrimaryHover: '#5C469C',
    // colorLinkActive: '#00AA67',
    // colorLinkHover: '#00AA67',
    // wireframe: false,
    // fontSize: 14,
    // borderRadius: 4,
    // sizeStep: 4,

    fontFamily: `${nunito.style.fontFamily}`,
    // lineHeight: 1.5714285714285714,
    // colorError: '#ED0131',
    // lineWidthFocus: 1,
  },
  components: {
    Radio: {
      // orange color
      // colorPrimary: 'orange',
    },
    Input: {
      // controlHeight: 48,
      // borderRadius: 4,
    },
    Button: { lineWidthFocus: 1 },
    Select: {
      // colorPrimaryHover: '#fff',
      // colorPrimaryActive: '#fff',
      // colorPrimary: '#fff',
    },
    Form: {
      // controlHeight: 48,
    },
  },
});
