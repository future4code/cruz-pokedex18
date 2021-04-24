import {useEffect, useState} from 'react'
import useGo from 'hooks/useGo'
import * as S from './styles'
import PokeCard from 'components/PokeCard'
import usePokeapi from 'hooks/usePokeapi'
import useInput from 'hooks/useInput'
import Filter from 'components/Filter'

const filterInitialValues = {
  search: '',
  type: '',
  order: ''
}

const Home = () => {
  const go = useGo()
  const filter = useInput(filterInitialValues)

  const [pokemonList, setPokemonList] = usePokeapi('pokemon', 'name')

  useEffect(() => {
    if (filter.type) {
      console.log('partiu', filter.type)
      setPokemonList(`type/${filter.type}`, 'pokemon')
    }
  }, [filter])

  return (
    <>
      <Filter filter={filter} />
      <S.CardContainer>
        {pokemonList.length &&
          pokemonList
            .sort((a, b) => a.id - b.id)
            .map(pokemon => <PokeCard key={pokemon.id} {...pokemon} />)}
      </S.CardContainer>
    </>
  )
}

export default Home
