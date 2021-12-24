import { Children, FC, CSSProperties } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { LogoWrapper, Page, StyledButton } from "../styles/Components.styled";
import { BsCameraVideoFill } from "react-icons/bs";
import { ButtonProps } from "./Types";
import { motion } from "framer-motion";
export const HOC: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <LogoWrapper
      style={{
        height: size * 15,
        width: size * 15,
      }}
    >
      <BsCameraVideoFill fontSize={size * 9} />
    </LogoWrapper>
  );
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      style={props.viewStyle}
      color={props.color}
      about={props.backgroundColor}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export const FadedAnimationWrapper: FC<{ style?: CSSProperties }> = ({
  children,
  style,
}) => {
  return (
    <Page
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      {children}
    </Page>
  );
};
