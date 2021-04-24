import styled from 'styled-components'
import pokebolaBackground from 'assets/images/pokebola-background.png'

export const CardContainer = styled.div`
  width: 280px;
  height: 260px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  background: #65d6a5 url(${pokebolaBackground}) no-repeat;
  background-position: bottom right;
  background-color: ${props => props.typeColor || 'gray'};

  position: relative;
`
export const PokeName = styled.h2`
  font-weight: bold;
  color: #ffffff;
  display: flex;
  padding-left: 8px;
  text-transform: capitalize;
  font-size: 24px;
`

export const PokeId = styled.h2`
  font-weight: bold;
  color: #ffffff;
  display: flex;
  margin-top: 8px;
  padding-left: 8px;
`

export const PokeImg = styled.img`
  width: 205px;
  height: 205px;
  display: flex;
  align-self: center;
  padding-bottom: 16px;
  padding-left: 24px;
`
export const Pokebola = styled.img`
  width: 32px;
  position: absolute;
  left: 5%;
  bottom: 5%;
`
