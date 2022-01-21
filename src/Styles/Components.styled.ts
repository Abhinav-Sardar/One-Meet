import styled from "styled-components";

export const AccentTextBase = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  &::selection {
    color: white;
    background: ${(props) => props.style?.color};
  }
`;

export const ButtonBase = styled.button`
  border: 0;
  height: 55px;
  width: 170px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 400ms ease-in-out;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => {
    // @ts-ignore
    return props["data-info"]?.color;
  }};
  background: ${(props) => {
    // @ts-ignore
    return props["data-info"]?.background;
  }};
  &:hover {
    color: ${(props) => {
      // @ts-ignore
      return props["data-info"]?.background;
    }};
    background: ${(props) => {
      // @ts-ignore
      return props["data-info"]?.color;
    }};
  }
`;
