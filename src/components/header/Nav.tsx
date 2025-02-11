import styled from 'styled-components'
import { NavCta } from './NavCta'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const StyledNav = styled.nav`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
`

const StyledNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  place-content: center;

  li {
    padding-left: 16px;
    padding-right: 16px;
  }

  &:hover {
    span {
      color: grey;
    }
  }
`

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: baseline;
  align-items: center;
  justify-content: center;
`

const NavDropdownButton = styled.button`
  display: flex;
  background: none;
  border: none;
  font-style: normal;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  gap: 8px;

  &:hover {
    span {
      color: black;
    }

    cursor: pointer;

    svg {
      transform: rotate(180deg);
    }
  }
`

const MenuChunk = styled.div<{ show?: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  padding-top: 16px;
  height: auto;
  left: 0px;
`

const NavContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 0px auto;
`

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  height: 20px;
  width: 20px;
  font-size: 12px;
  transition: transform 230ms ease-in-out;
`

const StyledMenuText = styled.span`
  transition: color 230ms ease-in-out;
`

const StyledMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  background-color: white;
`

const StyledNavListItem = styled.li`
  &:has(*:hover) {
    span {
      color: black;
    }
    svg {
      transform: rotate(180deg);
    }
  }
`

export const Nav = () => {
  return (
    <NavContainer>
      <StyledLogoContainer>logo</StyledLogoContainer>
      <StyledNav>
        <StyledNavList>
          <StyledNavListItem>
            <NavDropdownButton>
              <StyledMenuText>Product</StyledMenuText>
              <StyledChevronDownIcon />
            </NavDropdownButton>
            <div>
              <MenuChunk show={true}>
                <StyledMenuContainer>
                  <div>
                    <h3>Features</h3>
                    <ul>
                      <li>Business expense cards</li>
                      <li>Expense management</li>
                      <li>Invoices</li>
                      <li>Reimbursements</li>
                      <li>Apps & integrations</li>
                    </ul>
                  </div>
                </StyledMenuContainer>
              </MenuChunk>
            </div>
          </StyledNavListItem>
          <li>
            <NavDropdownButton>
              <StyledMenuText>Solutions</StyledMenuText>
              <StyledChevronDownIcon />
            </NavDropdownButton>
          </li>
          <li>
            <NavDropdownButton>
              <StyledMenuText>Resources</StyledMenuText>
              <StyledChevronDownIcon />
            </NavDropdownButton>
          </li>
          <li>
            <NavDropdownButton>
              <StyledMenuText>Partners</StyledMenuText>
              <StyledChevronDownIcon />
            </NavDropdownButton>
          </li>
          <li>
            <NavDropdownButton>
              <StyledMenuText>Pricing</StyledMenuText>
            </NavDropdownButton>
          </li>
        </StyledNavList>

        <NavCta />
      </StyledNav>
    </NavContainer>
  )
}
