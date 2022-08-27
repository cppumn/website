import { extendTheme } from "@chakra-ui/react";

// default heading font: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
// default body font: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
// default mono font: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace

// defines fonts used throught the website
const theme = extendTheme({
  fonts: {
    heading: `"Ubuntu", sans-serif`,
    body: `"Noto Sans", sans-serif`
  }
});

export default theme
