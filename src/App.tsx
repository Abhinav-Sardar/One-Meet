import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FadedPageWrapper } from "./constants/Components";
import getConstants from "./constants/Constants";
import "./globals.css";
const App: FC = () => {
  const routes = getConstants("routes");
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([path, Component]) => {
          return <Route path={path} element={<Component />} key={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
