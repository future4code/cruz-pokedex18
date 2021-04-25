import styled from 'styled-components'
// import pokedex from 'assets/images/PokeContainer.png'

export const Text = styled.h2`
  color: tomato;
  font-size: 4rem;
`

export const PokedexContainer = styled.div`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  min-height: 100vh;
  border: gold 3px solid;
  position: relative;
  display: grid;
  grid: 1fr 3fr / 1fr 1fr;
  /* place-items: center; */
`

export const Pokedex = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`

export const Title = styled.h2`
  font-size: 2rem;
  grid-column: 1 / 3;
  /* background-color: aqua; */
  align-self: center;
  margin-left: 5%;
`

export const Screen = styled.div`
  width: 400px;
  height: 40vh;
  border: 3px solid #333;
  position: relative;
  /* background-color: #fff; */
  justify-self: center;
  margin-top: 10vh;
`

export const ScreenImage = styled.img`
  width: 90%;
  margin: auto;
`

export const ScreenType = styled.span`
  width: 20%;
  position: absolute;
  top: 0;
  right: 0;
`

export const PokeCardContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 3px solid #fff; */
  /* background-color: gold; */
  display: flex;
  flex-flow: row wrap;
  flex-basis: 20%;
  gap: 1rem;
  padding: 3rem;
`
