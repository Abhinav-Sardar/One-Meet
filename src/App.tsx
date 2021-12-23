import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOC } from "./constants/Components";
import HomeScreen from "./screens/HomeScreen";
const App: FC = () => {
  return (
    <HOC>
      <Route element={<HomeScreen />} path="/" />
    </HOC>
  );
};
export default App;
