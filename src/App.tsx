import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

import Routes from './routes';

const theme = extendTheme({
  colors: {
    bug: '#8CB330',
    backgroundBug: '#8BD674',
    dark: '#58575F',
    backgroundDark: '#6F6E78',
    dragon: '#0F6AC0',
    backgroundDragon: '#7383B9',
    electric: '#EED535',
    backgroundElectric: '#F2CB55',
    fairy: '#ED6EC7',
    backgroundFairy: '#EBA8C3',
    fighting: '#D04164',
    backgroundFighting: '#EB4971',
    fire: '#FD7D24',
    backgroundFire: '#FFA756',
    flying: '#748FC9',
    backgroundFlying: '#83A2E3',
    ghost: '#556AAE',
    backgroundGhost: '#8571BE',
    grass: '#62B957',
    backgroundGrass: '#8BBE8A',
    ground: '#DD7748',
    backgroundGround: '#F78551',
    ice: '#61CEC0',
    backgroundIce: '#91D8DF',
    normal: '#9DA0AA',
    backgroundNormal: '#B5B9C4',
    poison: '#A552CC',
    backgroundPoison: '#9F6E97',
    psychic: '#EA5D60',
    backgroundPsychic: '#FF6568',
    rock: '#BAAB82',
    backgroundRock: '#D4C294',
    steel: '#417D9A',
    backgroundSteel: '#4C91B2',
    water: '#4A90DA',
    backgroundWater: '#58ABF6',
    textBlack: '#17171B',
    textGrey: '#747476',
    textNumber: 'rgba(23, 23, 27, 0.6)',
    backgroundDefaultInput: '#F2F2F2',
    backgroundPressedInput: '#E2E2E2',
    backgroundModal: 'rgba(23, 23, 27, 0.5)',
    heightLight: '#FFC5E6',
    heightMedium: '#AEBFD7',
    heightHeavy: '#AAACB8',
    weightLight: '#AAACB8',
    weightMedium: '#57B2DC',
    weightHeavy: '#5A92A5',
  },
  fontSize: {
    title: 32,
    name: 26,
    description: 16,
    type: 12,
  },
  fonts: {
    heading: 'SFProDisplayBold',
    body: 'SFProDisplayRegular',
    mono: 'SFProDisplayMedium',
  },
});

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;
