import * as S from './styles'
import pokebola from 'assets/images/pokebola.png'
import addButton from 'assets/images/add-button.png'
import removeButton from 'assets/images/remove-button.png'
import PokeCardType from 'components/PokeCardType'
import typesColor from 'constants/typesColor'
import {PokedexContext} from 'contexts/pokedex'
import {useContext, useState} from 'react'
import useGo from 'hooks/useGo'

const PokeCard = props => {
  const pokedex = useContext(PokedexContext)
  const go = useGo()
  const [icon, setIcon] = useState(addButton)

  const addPokedex = e => {
    e.preventDefault()
    e.stopPropagation()
    pokedex.dispatch({type: 'add', pokemon: props})
    setIcon(pokebola)
  }

  if (
    pokedex.list.some(pokemon => pokemon.name === props.name) &&
    icon !== pokebola
  ) {
    setIcon(pokebola)
  }

  return (
    <S.CardContainer
      typeColor={typesColor[props.types[0].type.name]}
      onClick={() => go.detail(props.name)}
    >
      <S.PokeId>#{props.id}</S.PokeId>
      <S.PokeName>{props.name}</S.PokeName>
      <PokeCardType types={props.types} />
      <S.Pokebola src={icon} onClick={addPokedex} />
      <S.PokeImg src={props.sprites.other['official-artwork'].front_default} />
    </S.CardContainer>
  )
}

export default PokeCard
