import {useEffect, useState} from 'react'
import useGo from 'hooks/useGo'
import axios from 'axios'
import * as S from './styles'

const Home = () => {
  const [pokemonList, setPokemonList] = useState([])
  const go = useGo()
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    axios.get(baseUrl).then(r => {
      r.data.results.forEach(pokemon => {
        axios
          .get(pokemon.url)
          .then(r => setPokemonList(prev => [...prev, r.data]))
      })
    })
  }, [])

  return (
    <>
      <S.Text>Home</S.Text>
      <button onClick={go.pokedex}>Ir para Pokedex</button>
      {pokemonList.length &&
        pokemonList
          .sort((a, b) => a.id - b.id)
          .map(pokemon => (
            <div>
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
              />
              <p>
                {pokemon.name}{' '}
                <button onClick={() => go.detail(pokemon.name)}>ver</button>
              </p>
            </div>
          ))}
    </>
  )
}

export default Home
