import axios from 'axios'
import {useState, useEffect} from 'react'

const baseURL = 'https://pokeapi.co/api/v2/'
const pokeapi = axios.create({baseURL})

const usePokeapi = (...option) => {
  const [data, setData] = useState([])

  useEffect(() => {
    request(option)
  }, [])

  const request = options => {
    console.log('REQUEST', options)
    const [endpoint, prop] = options
    if (prop) getData(endpoint, prop)
    else getData(endpoint)
  }

  const getData = async (url, catchAll) => {
    try {
      let {data: r} = await pokeapi({url})

      if (catchAll) {
        switch (url.split('/')[0]) {
          case 'pokemon':
            r = await getAll(url, r.results, catchAll)
            break
          case 'type':
            r = await getAll(url, r.pokemon, catchAll)
            break
          default:
            console.log('FUDEO', url)
        }
      }

      setData(r)
    } catch (e) {
      console.error(e)
    }
  }

  const getAll = async (url, list, props) => {
    try {
      const r = await Promise.all(
        list.map(i => {
          // let url = `${url}/${i[props]}`
          console.log('ENTREI')
          if (typeof i[props] !== 'string') {
            console.log('EH SIM!', i[props])
            return pokeapi({url: `pokemon/${i[props].name}`})
            i[props].forEach(j => console.log(j.pokemon.name))
          }

          return pokeapi({url: `${url}/${i[props]}`})
        })
      )
      return r.map(i => i.data)
    } catch (e) {
      console.error(e)
    }
  }

  const update = (...option) => request(option)

  return [data, update]
}

export default usePokeapi
