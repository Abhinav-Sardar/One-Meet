import { Children, FC } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export const HOC: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};
