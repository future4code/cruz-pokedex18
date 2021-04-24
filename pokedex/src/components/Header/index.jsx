import useGo from '../../hooks/useGo'
import pikachu from '../../assets/images/pikachu-correninho.gif'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => {
  const go = useGo()

  const menuItems = ['Home', 'Database', 'Pokedex', 'Types', 'About', 'Contact']

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} onClick={go.home} />
        <S.Animation src={pikachu} />
        <S.Menu>
          {menuItems.map(item => (
            <S.MenuItem key={item}>{item}</S.MenuItem>
          ))}
        </S.Menu>
      </S.Header>
    </S.Container>
  )
}

export default Header
