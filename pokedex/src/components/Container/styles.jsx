import styled, {keyframes} from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  /* background-color: gray; */
  /* background-color: #e3e3e3; */
`

export const Content = styled.div`
  width: clamp(350px, 80%, 1280px);
  margin: auto;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  padding-top: 50px;
`
