import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/pokedex'>
          <Pokedex />
        </Route>

        <Route path='/detail/:id'>
          <Detail />
        </Route>

        <Route>
          <h1>erro 404 not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
