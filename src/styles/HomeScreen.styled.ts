import styled from "styled-components";
import { accentColor } from "../Constants/Constants";

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.main`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background: linear-gradient(60deg, ${accentColor}, #fff);
`;
