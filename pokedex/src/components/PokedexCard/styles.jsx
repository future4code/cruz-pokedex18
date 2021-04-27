import styled from 'styled-components'

export const PokedexCardContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  border: 5px solid #4e4d4e;
  border-radius: 10px;
  background-color: #e6e6e6;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /* padding: ${({theme}) => theme.space(1)}; */
`

export const Name = styled.p`
  font-size: 2rem;
`

export const Image = styled.img`
  width: 100%;
`
