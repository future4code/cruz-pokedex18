import styled, {css} from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #393939;
  margin: 50px auto;
  display: grid;
  grid: 1fr / 4fr 1fr 2fr 2fr;
  justify-items: start;
  align-items: center;
  padding: 0 3rem;
`
const grid = css`
  display: grid;
  grid: 1fr / 1fr;
  place-items: start;
`
const label = css`
  color: white;
  font-size: 2rem;
`

export const SearchContainer = styled.div`
  ${grid}
`
export const SearchLabel = styled.label`
  ${label}
`

export const SearchInput = styled.input`
  width: 100%;
`

export const Image = styled.img``

export const TypeContainer = styled.div`
  ${grid}
`
export const TypeLabel = styled.label`
  ${label}
`
export const TypeInput = styled.select``
export const TypeOption = styled.option``

export const OrderContainer = styled.div`
  ${grid}
`
export const OrderLabel = styled.label`
  ${label}
`
export const OrderInput = styled.select``
export const OrderOption = styled.option``
