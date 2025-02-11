import styled from 'styled-components'

export const RoundedButton = styled.button`
  padding: 14px 28px;
  border-radius: 50px;
  height: auto;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: 0px;
`
export const BlackRoundedButton = styled(RoundedButton)`
  background-color: rgb(34, 34, 34);
  color: white;

  &:hover {
    background-color: black;
  }
`
