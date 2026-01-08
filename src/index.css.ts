import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

globalStyle(':root', {
  vars: {
    '--white': '#ffffff',
    '--title-grey': '#474646',
    '--text-grey': '#7d7c7b',
    '--decoration-grey': '#efefef',
    '--background': '#f7f5f2',
    '--green': '#3e7f6d'  
  },

  margin: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
})

export const vars = createGlobalTheme(':root', {
  colors: {
    orange: '#cd5f4a'
  }
})


