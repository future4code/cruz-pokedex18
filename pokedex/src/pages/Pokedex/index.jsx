import * as S from './styles'
import {PokedexContext} from 'contexts/pokedex'
import {useContext} from 'react'

const Pokedex = () => {
  const pokedex = useContext(PokedexContext)
  return (
    <S.PokedexContainer>
      <S.PokedexCardContainer>
        {pokedex.list.map(i => (
          <p>{i.name}</p>
        ))}
        {/* <S.PokedexCardPokemon></S.PokedexCardPokemon> */}
      </S.PokedexCardContainer>
    </S.PokedexContainer>
  )
}

export default Pokedex
