import styled from 'styled-components'
import pokedex from 'assets/images/PokeContainer.png'

export const Text = styled.h2`
  color: tomato;
  font-size: 4rem;
`

export const PokedexContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${pokedex}) no-repeat;
  background-size: contain;
  background-position: center;
`

export const PokedexCardContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  top: 240px;
  left: 600px;
  border: 5px solid #4e4d4e;
  border-radius: 10px;
  background-color: #e6e6e6;
`
