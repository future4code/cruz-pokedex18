import * as S from './styles'
import pokebola from 'assets/images/pokebola.png'
import addButton from 'assets/images/add-button.png'
import PokeCardType from 'components/PokeCardType'
import typesColor from 'constants/typesColor'
import {PokedexContext} from 'contexts/pokedex'
import {useContext} from 'react'
import useGo from 'hooks/useGo'

const PokeCard = props => {
  const pokedex = useContext(PokedexContext)
  const go = useGo()

  return (
    <S.CardContainer
      typeColor={typesColor[props.types[0].type.name]}
      onClick={() => go.detail(props.name)}
    >
      <S.PokeId>#{props.id}</S.PokeId>
      <S.PokeName>{props.name}</S.PokeName>
      <PokeCardType types={props.types} />
      <S.Pokebola
        src={addButton}
        onClick={() => pokedex.dispatch({type: 'add', pokemon: props})}
      />
      <S.PokeImg src={props.sprites.other['official-artwork'].front_default} />
    </S.CardContainer>
  )
}

export default PokeCard
