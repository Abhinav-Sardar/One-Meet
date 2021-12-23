import { motion } from "framer-motion";
import styled, { ThemeConsumer } from "styled-components";
import { Theme } from "../constants/Types";

export const Titles = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway", sans-serif;
  color: ${(pr) => pr.theme.accentColor};
`;

export const HomePageHeader = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainSection = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
