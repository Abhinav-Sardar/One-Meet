import styled from "styled-components";

export const ControlButton = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 10px;
  transition: 400ms ease-in-out;
  cursor: pointer;
  svg {
    font-size: 25px;
  }
`;
