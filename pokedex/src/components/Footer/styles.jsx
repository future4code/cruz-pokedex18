import styled from 'styled-components'
import {BsPeopleCircle} from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  bottom: 0;
  ${props => props.theme.fixedFooter && 'position: fixed'};

  display: grid;
  grid: 1fr 1fr / 1fr;
  place-items: center;
`

export const Footer = styled.footer`
  width: clamp(350px, 80%, 1400px);
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid: 1fr 1fr / repeat(auto-fit, minmax(80px, max-content));
  place-items: center;
  place-content: space-around;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
`

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const Social = styled.img`
  width: 90px;
  height: 90px;
`

export const Authors = styled(BsPeopleCircle)`
  width: 30px;
  height: 30px;
`

export const Footer2 = styled.div`
  width: clamp(350px, 80%, 1400px);
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  place-items: center;
  place-content: space-around;
`
