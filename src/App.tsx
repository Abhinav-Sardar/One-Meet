import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOC } from "./Constants/Components";
import HomeScreen from "./screens/HomeScreen";
const App: FC = () => {
  return (
    <HOC>
      <Route element={<HomeScreen />} path="/" />
    </HOC>
  );
};
export default App;
