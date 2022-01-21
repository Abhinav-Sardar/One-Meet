import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutesData } from "./constants/Types";
import "./globals.css";
import NotFound from "./Screens/NotFound";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(RoutesData).map(([path, Component]) => {
          return <Route path={path} element={<Component />} key={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
