import styled from 'styled-components'
import {BsPeopleCircle} from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  bottom: 0;
  ${props => props.theme.fixedFooter && 'position: fixed'};
  display: grid;
  place-items: center;
`

export const Footer = styled.footer`
  width: clamp(350px, 80%, 1400px);
  display: grid;
  grid: 1fr 50px / repeat(3, minmax(80px, max-content));
  place-items: center;
  place-content: space-around;
  gap: 1rem;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
`

export const LogoContainer = styled.div``
export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const SocialContainer = styled.div``
export const Social = styled.img`
  width: 100px;
  height: 100px;
`

export const AuthorsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const Authors = styled.img`
  width: 50px;
  height: 50px;
  clip-path: circle(50%);
`

export const Message = styled.p`
  grid-column: 1 / 4;
  align-self: start;
  width: clamp(350px, 80%, 1280px);
  text-align: center;
  font-size: 1.5rem;
  color: white;
`
