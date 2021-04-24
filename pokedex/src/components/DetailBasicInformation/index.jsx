import * as S from './styles'

const DetailBasicInformation = pokemon => {
  console.log(pokemon)
  return (
    <S.CardInformation>
      <S.BasicInformations>Informações Básicas</S.BasicInformations>
      <S.PokeName>Nome: {pokemon.name}</S.PokeName>
      <S.PokeHeight>Peso: {pokemon.height}kg</S.PokeHeight>
      <S.PokeWeight>Tamanho: {pokemon.weight}cm</S.PokeWeight>
      <S.PokeType>
        Tipo: {pokemon.types.map(i => i.type.name).join(' ')}
      </S.PokeType>
    </S.CardInformation>
  )
}

export default DetailBasicInformation
