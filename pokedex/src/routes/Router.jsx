import Container from 'components/Container'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route path='/' exact children={() => alert('ok')}>
              <Home />
            </Route>

            <Route path='/pokedex'>
              <Pokedex />
            </Route>

            <Route path='/detail/:id' children={() => console.log('ROTA')}>
              <Detail />
            </Route>

            <Route>
              <h1>erro 404 not found</h1>
            </Route>
            <Route
            // children={() => window.scroll({top: 0, behavior: 'smooth'})}
            />
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router
