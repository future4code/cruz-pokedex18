import styled from 'styled-components'

export const DetailContainer = styled.div`
  height: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  place-items: center;
  place-content: center;
  /* justify-items: ; */
`
export const DetailImg = styled.img`
  width: 280px;
  background-color: #7c7c7c;
  margin-left: 40px;
`
