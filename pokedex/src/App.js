import Router from './routes/Router'
import GlobalStyle from './styles/global'
import {PokedexProvider} from 'contexts/pokedex'
import PokeTheme from 'styles/PokeTheme'

function App() {
  return (
    <PokeTheme>
      <GlobalStyle />
      <PokedexProvider>
        <Router />
      </PokedexProvider>
    </PokeTheme>
  )
}

export default App
