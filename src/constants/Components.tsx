import React, { FC, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LogoWrapper } from "../styles/Components.styled";
import { BsCameraVideoFill } from "react-icons/bs";
export const HOC: FC = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [accentColor, setAccentColor] = useState("#bd14ca");

  return (
    <ThemeProvider
      theme={{
        theme,
        accentColor,
        setTheme,
        setAccentColor,
      }}
    >
      <BrowserRouter>
        <Routes>{children}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const Logo: FC<{ size: number; style?: React.CSSProperties }> = ({
  size,
  style,
}) => {
  return (
    <LogoWrapper style={{ ...style, height: size * 15, width: size * 15 }}>
      <BsCameraVideoFill fontSize={size * 9} />
    </LogoWrapper>
  );
};
