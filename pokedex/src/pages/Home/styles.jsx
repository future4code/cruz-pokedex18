import styled, {css, keyframes} from 'styled-components'
import pokebola from 'assets/images/pokebola.png'
import {TiArrowDownThick} from 'react-icons/ti'

export const Container = styled.section`
  width: 100%;
  /* background-color: #222; */
  min-height: calc(100vh - 50px);
  position: relative;
`

export const Content = styled.section`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  /* background-color: #222; */
  min-height: calc(100vh - 50px);
  position: relative;
  padding: 2rem;
  display: grid;
  grid: repeat(2, min(150px, 20vh)) / 1fr;
  align-content: space-between;
`

export const Video = styled.video`
  position: absolute;
  /* padding: 1rem; */
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  margin: auto;
  /* display: block; */
  height: calc(100vh - 80px);
  object-fit: fill;
  filter: opacity(0.5);
`

export const Shadow = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: blue; */
  box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.8) inset;
  z-index: 1;
`

const titleStyle = css`
  font-size: max(1.5rem, 2vw);
  line-height: 1;
  text-align: center;
  justify-self: ${props => props.align};
`

export const TitleTop = styled.h2`
  ${titleStyle}
  /* color: ${({theme}) => theme.colors.text.secondary}; */
  color: ${({theme}) => theme.colors.primary};
  text-shadow: 5px 5px 5px rgba(255, 255, 0, 0.3);
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 20px;
  border: 3px solid ${({theme}) => theme.colors.text.secondary};
  padding: 5px 40px;
  transform: rotate(-15deg);
  margin-top: 70px;
`

export const TitleBottom = styled.h2`
  ${titleStyle}
  color: ${({theme}) => theme.colors.text.secondary};
  align-self: end;
  margin-bottom: 1rem;
`

const rotate = keyframes`
  0% {
      transform: rotate(0);
  }
  35% {
    transform: rotate(-30deg);
  }
  65% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0);
  }
`
export const Image = styled.img`
  animation: ${rotate} 2s ease-out infinite both;
  position: absolute;
  bottom: 5%;
  left: 5%;
`

export const Button = styled.button``

const upAndDown = keyframes`
  to {
    transform: translate(-50%, 20%)
  }
`

export const Arrow = styled(TiArrowDownThick)`
  color: black;
  font-size: 3rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  animation: ${upAndDown} 0.7s ease-in-out infinite alternate;
`
