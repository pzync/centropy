import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
require('typeface-inter')

// the following overrides are based on Dan Abramov's Overreacted.io's 
// github repo at:
// https://github.com/gaearon/overreacted.io/blob/master/src/utils/typography.js

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: "#06f"
    },
    body: {
      fontFamily: "Inter,-apple-system,BlinkMacSystemFont,sans-serif",
      fontSize: "1.1rem",
      textRendering: "optimizeLegibility",
      '-webkitFontSmoothing': "antialiased"
    },
    'h1 , h2 , h3 , h4 , h5 , h6 ' : {
      fontFamily: "Inter,-apple-system,BlinkMacSystemFont,sans-serif"
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale