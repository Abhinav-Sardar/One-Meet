import styled from "styled-components";
import { accentColor, getConstants } from "../constants/constants";

export const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AccentTextStyled = styled.span`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  color: ${accentColor};
  font-weight: 500;
  &::selection {
    color: white;
    background-color: ${accentColor};
  }
`;
