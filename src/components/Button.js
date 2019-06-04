import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 50px;
  cursor: pointer;
  margin: 0.2rem;
  padding: 5px;
  transition: all 0.5s ease-in-out;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    background: white;
    color: var(--mainBlue);
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
`;
