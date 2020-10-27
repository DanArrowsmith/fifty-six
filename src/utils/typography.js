import Typography from "typography";
import sutroTheme from 'typography-theme-sutro'

sutroTheme.bodyFontFamily = ['Roboto']
sutroTheme.headerFontFamily = ['Walkway']
sutroTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h2,h3': {
    textTransform: 'uppercase',
  }
})
sutroTheme.scaleRatio = 4
sutroTheme.baseFontSize = '20px'

const typography = new Typography(
sutroTheme
);
export default typography;
