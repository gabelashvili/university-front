const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  settings: {
    containerMaxWidth: '1170px',
  },
  colors: {
    white: 'white',
    darkWhite: '#f0f0f0',
    lightGreen: '#26ae61',
    green: '#229C57',
    black: '#333',
    darkBlack: 'black',
    lightGrey: '#666',
    red: '#da4932',
    blue: '#337ab7',
    yellow: '#ffd43b',
  },
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
};

export default theme;
