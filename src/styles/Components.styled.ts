import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: linear-gradient(60deg, ${(pr) => pr.theme.accentColor}, #fff);
`;

export const Selectable = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  &::selection {
    color: white;
    background-color: ${(pr) => pr.theme.accentColor};
  }
  color: ${(pr) => pr.theme.accentColor};
`;
export const LogoWrapper = styled(motion.div)`
  background-color: ${(pr) => pr.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  svg {
    color: white;
  }
`;
