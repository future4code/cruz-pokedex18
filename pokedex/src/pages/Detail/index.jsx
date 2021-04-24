import usePokeapi from 'hooks/usePokeapi'
import {useParams} from 'react-router'
import * as S from './styles'

const Detail = props => {
  const {id} = useParams()
  const [pokemon] = usePokeapi(`pokemon/${id}`)

  console.log({pokemon})

  return (
    <S.DetailContainer>
      Nome: {pokemon.name && <strong>{pokemon.name}</strong>}
      Type:{' '}
      {pokemon.name && (
        <strong>{pokemon.types.map(i => i.type.name).join(' ')}</strong>
      )}
    </S.DetailContainer>
  )
}

export default Detail
