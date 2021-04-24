import {Link} from 'react-router-dom'
import pikachu from '../../assets/images/pikachu-correninho.gif'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <Link to='/'>
          <S.Logo src={logo} />
        </Link>
        <S.Animation src={pikachu} />
        <S.Menu>
          <S.MenuItem to='/'>Home</S.MenuItem>
          <S.MenuItem to='/'>Database</S.MenuItem>
          <S.MenuItem to='/pokedex'>Pokedex</S.MenuItem>
          <S.MenuItem to='/types'>Types</S.MenuItem>
          <S.MenuItem to='/about'>About</S.MenuItem>
          <S.MenuItem to='/contact'>Contact</S.MenuItem>
        </S.Menu>
      </S.Header>
    </S.Container>
  )
}

export default Header
