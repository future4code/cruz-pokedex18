import * as S from './styles'
import {PokedexContext} from 'contexts/pokedex'
import {useContext, useEffect, useState} from 'react'
import PokedexCard from 'components/PokedexCard'
import {useTheme} from 'styled-components'
import pokedexImage from 'assets/images/PokeContainer.png'

const Pokedex = () => {
  const theme = useTheme()
  const pokedex = useContext(PokedexContext)
  const [active, setActive] = useState({})

  useEffect(() => {
    theme.dispatch({
      type: 'set',
      prop: {
        containerFull: false,
        containerBackground: 'none'
      }
    })

    return () => {
      theme.dispatch({
        type: 'set',
        prop: {
          containerFull: true,
          containerBackground: '#fff'
        }
      })
    }
  }, [])

  return (
    <S.PokedexContainer>
      <S.Pokedex src={pokedexImage} />
      <S.Title>{active?.name || 'Select your pokemon'}</S.Title>
      <S.Screen>
        {active.name && (
          <>
            <S.ScreenImage
              src={
                active.sprites.versions['generation-v']['black-white'].animated
                  .front_default
              }
            />
          </>
        )}
      </S.Screen>
      <S.PokeCardContainer>
        {pokedex.list.map(pokemon => (
          <PokedexCard pokemon={pokemon} select={setActive} />
        ))}
      </S.PokeCardContainer>
    </S.PokedexContainer>
  )
}

export default Pokedex
