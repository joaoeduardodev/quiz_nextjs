import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  // Deixa branco no começo
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`

const theme = db.theme;

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

export default function App({ Component, pageProps }) {
  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
      
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        {/* o component muda para cada página 
        ele moveu o global style, para dentro do theme
        provider, pois desse modo vai funcionar tudo que 
        referência o tema, pois estará dentro do theme*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
