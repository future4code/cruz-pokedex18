import PokedexCard from 'components/PokedexCard'
import * as S from './styles'

const PokedexPokemons = ({pokemons, select}) => {
  return (
    <S.Container>
      {pokemons.map(i => (
        <PokedexCard pokemon={i} select={select} />
      ))}
    </S.Container>
  )
}

export default PokedexPokemons
