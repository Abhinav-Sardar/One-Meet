import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOC } from "./Constants/Components";
import CreateMeet from "./screens/CreateMeet";
import HomeScreen from "./screens/HomeScreen";
const App: FC = () => {
  return (
    <HOC>
      <Route element={<HomeScreen />} path="/" />
      <Route element={<CreateMeet />} path="/create-meet" />
    </HOC>
  );
};
export default App;
