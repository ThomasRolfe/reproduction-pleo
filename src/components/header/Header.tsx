import styled from 'styled-components'
import { Nav } from './Nav'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  )
}
