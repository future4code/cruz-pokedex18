import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  overflow: overlay;
`

export const Header = styled.header`
  width: clamp(350px, 80%, 1400px);
  /* margin-top: 2rem; */
  height: 100px;
  margin: auto;
  display: grid;
  grid: 85px / 1fr 2fr 5fr;
  place-items: center;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const Animation = styled.img`
  width: 100px;
`

export const Menu = styled.nav`
  width: 100%;
  display: grid;
  grid: 1fr / repeat(6, minmax(100px, 1fr));
  gap: 0.5rem;
  place-items: center;
`

export const MenuItem = styled(Link)`
  color: white;
  font-size: 1.4rem;
`
