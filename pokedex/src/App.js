import Container from 'components/Container'
import Header from 'components/Header'
import {ThemeProvider} from 'styled-components'
import Router from './routes/Router'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import {PokedexProvider} from 'contexts/pokedex'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PokedexProvider>
        <Router />
      </PokedexProvider>
    </ThemeProvider>
  )
}

export default App
