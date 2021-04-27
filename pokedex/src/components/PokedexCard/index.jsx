import * as S from './styles'
const PokedexCard = ({pokemon, select}) => (
  <S.PokedexCardContainer onClick={() => select(pokemon)}>
    <S.Image src={pokemon?.sprites?.front_default} />
  </S.PokedexCardContainer>
)

export default PokedexCard
