import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
export const vars = createGlobalTheme(':root', {
  colors: {
    orange: '#cd5f4a',
    white: '#ffffff',
    titleGrey: '#474646',
    textGrey: '#7d7c7b',
    decorationGrey: '#efefef',
    background: '#f7f5f2',
    green: '#3e7f6d'  
  }
})

globalStyle(':root', {
  margin: '32px 56px',
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  backgroundColor: vars.colors.background
})

globalStyle('h1', {
  color: vars.colors.titleGrey,
  fontSize: '1.2em'
})

globalStyle('h2', {
  color: vars.colors.titleGrey,
  fontSize: '1.0em'
})

globalStyle('p', {
  color: vars.colors.textGrey,
  fontWeight: 500,
  fontSize: '0.6em'
})




