import {useEffect, useRef, useState} from 'react'
import useGo from 'hooks/useGo'
import * as S from './styles'
import PokeCard from 'components/PokeCard'
import usePokeapi from 'hooks/usePokeapi'
import useInput from 'hooks/useInput'
import Filter from 'components/Filter'
import {useTheme} from 'styled-components'
import Title from 'components/Title'

const filterInitialValues = {
  search: '',
  type: '',
  order: ''
}

const Database = props => {
  const theme = useTheme()
  const go = useGo()
  const filter = useInput(filterInitialValues)
  const option = useRef(filterInitialValues)
  const [pokemonList, setPokemonList, clearList, filterName] = usePokeapi(
    'pokemon',
    'name'
  )

  useEffect(() => {
    if (filter.type && filter.type !== option.current.type) {
      option.current.type = filter.type
      clearList()
      console.log('LIMPOU LISTA: ', pokemonList)
      console.log('partiu', filter.type)
      setPokemonList(`type/${filter.type}`, 'pokemon', 'clear')
    }

    if (filter.search.length >= 3 && filter.search !== option.current.search) {
      option.current.search = filter.search
      filterName(filter.search)
    }
  }, [filter])

  return (
    <>
      <Title>List of all Pokemons</Title>
      <Filter filter={filter} />
      <S.CardContainer>
        {pokemonList.length &&
          pokemonList
            .sort((a, b) => a.id - b.id)
            .map(pokemon => <PokeCard key={pokemon.id} {...pokemon} />)}
      </S.CardContainer>
      <S.ButtonMore onClick={() => setPokemonList()}>Load More</S.ButtonMore>
      {/* <S.ButtonMore onClick={() => filterName()}>Pegar Nomes</S.ButtonMore> */}
    </>
  )
}

export default Database
