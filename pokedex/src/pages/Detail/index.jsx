import DetailBasicInformation from 'components/DetailBasicInformation'
import usePokeapi from 'hooks/usePokeapi'
import {useParams} from 'react-router'
import * as S from './styles'

const Detail = props => {
  const {id} = useParams()
  const [pokemon] = usePokeapi(`pokemon/${id}`)

  console.log({pokemon})

  return (
    <S.DetailContainer>
      {pokemon.name && (
        <>
          <S.DetailImg
            src={pokemon.sprites.other['official-artwork'].front_default}
          />

          <DetailBasicInformation {...pokemon} />
        </>
      )}
    </S.DetailContainer>
  )
}

export default Detail
