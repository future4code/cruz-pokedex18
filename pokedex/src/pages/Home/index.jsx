import * as S from './styles'
import {useTheme} from 'styled-components'
import pokemonVideo from 'assets/videos/pokemon-opening-season1.webm'
import {useEffect} from 'react'
import pokebola from 'assets/images/pokebola.png'

const Home = () => {
  const theme = useTheme()
  console.log(theme.containerFull)

  useEffect(() => {
    theme.dispatch({
      type: 'set',
      prop: {
        containerFull: false,
        containerPadding: 0
      }
    })
    return () => {
      theme.dispatch({
        type: 'set',
        prop: {
          containerFull: true,
          containerPadding: '50px 0'
        }
      })
    }
  }, [])

  return (
    <S.Container>
      <S.Video autoPlay loop muted src={pokemonVideo} />
      <S.Shadow />
      <S.Content>
        <S.TitleTop align='start'>The nostalgic Pokemon is back...</S.TitleTop>
        <S.TitleBottom align='end'>
          See the infinite list and choose your Pokemon
        </S.TitleBottom>
        <S.Image src={pokebola} />
      </S.Content>
      <S.Arrow />
    </S.Container>
  )
}

export default Home
