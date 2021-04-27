import axios from 'axios'
import {useState, useEffect, useRef} from 'react'

const baseURL = 'https://pokeapi.co/api/v2/'
const pokeapi = axios.create({baseURL})

const usePokeapi = (...option) => {
  const [data, setData] = useState([])
  const [temp, setTemp] = useState(0)
  const [itemsPage, setItemsPage] = useState(20)
  const next = useRef('')
  const previous = useRef('')
  const filtered = useRef([])
  const allPokemonNames = useRef([])
  const [nextFiltered, setNextFiltered] = useState('')

  useEffect(() => {
    request(option)
    // allPokemonNames.current = getData(`pokemon`)
    // console.log(allPokemonNames)
  }, [])

  const request = (options = '') => {
    const [endpoint = '', prop = '', clear = ''] = options
    if (prop) getData(endpoint, prop, clear)
    else if (next.current) {
      getData(next.current)
    } else getData(endpoint)
  }

  const getData = async (url, catchAll, clear) => {
    const params = {limit: itemsPage}
    try {
      // if (url === 'pokemon' && catchAll === 'name') {
      //   console.error('PEGA TUDO!!!')
      //   url = 'pokemon?limit=1118'
      // }
      let {data: r} = await pokeapi({url, params})
      // console.warn('TODOS: ', r)
      // allPokemonNames.current = r.results
      next.current = r.next

      if (catchAll) {
        switch (url.split('/')[0]) {
          case 'pokemon':
            if (next.current && previous.current) {
              r = await getAll(next.current, r.results, 'name')
            } else {
              r = await getAll(url, r.results, catchAll)
            }
            break
          case 'type':
            r = await getAll(url, r.pokemon, catchAll)

            break
          default:
            console.log('FUDEO', url)
        }
      }

      if (next.current && previous.current) {
        r = await getAll(next.current, r.results, 'name')
      }

      previous.current = next.current
      if (clear) return setData([...r])

      console.log(Array.isArray(r), typeof r)
      if (!data.length && !Array.isArray(r)) setData(r)
      else {
        let PokeWithImages = r
        if (Array.isArray(r)) {
          PokeWithImages = r.filter(
            i => i.sprites?.other['official-artwork']?.front_default
          )
        }
        setData([...data, ...PokeWithImages])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getAll = async (url, list, props) => {
    console.log('all: ', url, list, props)
    if (url.includes('/')) url = 'pokemon'
    console.log('url: ', url)

    try {
      const allPokemons = list.map(i => {
        if (typeof i[props] !== 'string' && typeof i !== 'string') {
          console.log(i)
          filtered.current = [...filtered.current, i[props].name]
          return pokeapi({url: `pokemon/${i[props].name}`})
        }
        if (typeof i === 'string') {
          console.log('EH STRING', `${url}/${i}`)
          return pokeapi({url: `${url}/${i}`})
        }

        console.warn(`${url}/${i[props]}`)
        return pokeapi({url: `${url}/${i[props]}`})
      })

      const pagePokemons = allPokemons.slice(0, 20)
      // if (pagePokemons.length < 20) alert(pagePokemons.length)

      const r = await Promise.all(pagePokemons)
      return r.map(i => i.data)
    } catch (e) {
      console.error(e)
    }
  }

  const update = async (...option) => {
    if (filtered.current) {
      console.log(filtered.current)
      const nextFilter = filtered.current.slice(
        data.length,
        data.length + itemsPage
      )
      console.warn(nextFilter)
      const r = await getAll(`pokemon`, nextFilter, 'name')
      console.log(r)

      const PokeWithImages = r.filter(
        i => i.sprites?.other['official-artwork']?.front_default
      )

      setData([...data, ...PokeWithImages])
    }
    request(option)
  }

  const more = () => request
  const clear = () => {
    console.log('LIMPOU')
    setData([])
  }

  const filterByName = async search => {
    allPokemonNames.current = await pokeapi('pokemon?limit=1118')
    console.log(allPokemonNames)
    const filterPokemon = poke => poke.name.includes(search)
    const filtered = allPokemonNames.current.data.results.filter(filterPokemon)
    const r = await getAll(`pokemon`, filtered, 'name')

    const PokeWithImages = r.filter(
      i => i.sprites?.other['official-artwork']?.front_default
    )
    console.log(PokeWithImages)
    setData([...PokeWithImages])
  }

  return [data, update, clear, filterByName]
}

export {pokeapi}
export default usePokeapi
