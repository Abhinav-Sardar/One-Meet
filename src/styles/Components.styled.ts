import { motion } from "framer-motion";
import styled from "styled-components";
import { accentColor } from "../Constants/Constants";

export const Page = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Selectable = styled.span`
  font-size: 40px;
  color: ${accentColor};
  font-family: "Raleway", sans-serif;
  &::selection {
    background: ${accentColor};
    color: white;
  }
`;
export const LogoWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${accentColor};
  svg {
    color: white;
  }
`;
export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0 0.7vw;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  height: 6vh;
  transition: 400ms ease-in-out;
  cursor: pointer;
  border: 1px solid ${(pr) => pr.about};
  background-color: ${(pr) => pr.about};
  color: ${(pr) => pr.color};
  &:hover {
    background-color: ${(pr) => pr.color};
    color: ${(pr) => pr.about};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
