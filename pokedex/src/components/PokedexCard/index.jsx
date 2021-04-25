import * as S from './styles'
const PokedexCard = ({pokemon, select}) => {
  return (
    <S.PokedexCardContainer onClick={() => select(pokemon)}>
      <S.Image src={pokemon.sprites.front_default} />
      {/* <S.Name>{pokemon.name}</S.Name> */}
    </S.PokedexCardContainer>
  )
}

export default PokedexCard
