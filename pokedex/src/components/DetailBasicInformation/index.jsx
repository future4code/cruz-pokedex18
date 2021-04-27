import * as S from './styles'
import DetailButtons from 'components/DetailButtons'
// import DetailAttributes from 'components/DetailAttributes'

const DetailBasicInformation = pokemon => {
  // console.log(pokemon)
  return (
    <S.CardInformation>
      <S.BasicInformations>Basic Information</S.BasicInformations>
      <p>{pokemon.description}</p>
      <p>Shape: {pokemon.shape}</p>
      <p>Live: {pokemon.habitat}</p>
      <S.PokeWeight>Tamanho: {pokemon.weight}cm</S.PokeWeight>
      <S.PokeHeight>Peso: {pokemon.height}kg</S.PokeHeight>
      <S.PokeAbilitys>
        Abilities:
        {pokemon.abilities.map(i => (
          <DetailButtons color={pokemon.color}>{i.ability.name}</DetailButtons>
        ))}
      </S.PokeAbilitys>
    </S.CardInformation>
  )
}

export default DetailBasicInformation
