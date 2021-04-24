import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.5);
  bottom: 0;
  ${props => props.theme.fixedFooter && 'position: fixed'};
`

export const Footer = styled.footer`
  width: clamp(350px, 80%, 1400px);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: 100px;
  place-items: center;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);
`

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const Social = styled.img`
  width: 100px;
  height: 100px;
  padding-top: 5px;
`

export const Authors = styled.img`
  width: 50px;
  height: 50px;
`
