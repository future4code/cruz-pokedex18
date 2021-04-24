import {Link} from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import squirtle from '../../assets/images/squirtle-baby.png'
import charmander from '../../assets/images/charmander-baby.png'
import bulbasaur from '../../assets/images/bulbasaur-basy.png'
import {BsPeopleCircle} from 'react-icons/bs'

const Footer = () => {
  return (
    <S.Container>
      <S.Footer>
        <Link to='/'>
          <S.Logo src={logo} />
        </Link>
        <Link url='http://www.facebook.com'>
          <S.Social src={squirtle} />
        </Link>
        <Link url='http://www.twitter.com'>
          <S.Social src={charmander} />
        </Link>
        <Link url='http://www.instagram.com'>
          <S.Social src={bulbasaur} />
        </Link>
        <S.Authors src={BsPeopleCircle} />
      </S.Footer>
    </S.Container>
  )
}

export default Footer
