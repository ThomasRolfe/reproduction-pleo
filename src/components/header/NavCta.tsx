import styled from 'styled-components'
import { BlackRoundedButton } from '../common/Button'

const StyledNavCta = styled.div`
  flex-basis: auto;
  align-items: center;
  display: flex;
  margin-left: auto;
`

const StyledCtaButtonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  place-content: center;
  list-style: none;
  li {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const NavCta = () => {
  return (
    <StyledNavCta>
      <StyledCtaButtonList>
        <li>Log in</li>
        <li>Contact sales</li>
      </StyledCtaButtonList>
      <BlackRoundedButton>Get started</BlackRoundedButton>
    </StyledNavCta>
  )
}
