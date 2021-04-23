import { useParams } from 'react-router'
import * as S from './styles'

const Detail = () => {
  const { id } = useParams()
  return <S.Text>Detail, vc digitou: {id}</S.Text>
}

export default Detail
