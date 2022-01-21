import { FC } from "react";
import HomeScreen from "../Screens/HomeScreen";
import NotFound from "../Screens/NotFound";

type Routes = "/" | "/create-meeting" | "/join-meeting" | "/meeting" | "*";
type RouteData = {
  [K in Routes]: FC;
};
export const RoutesData: RouteData = {
  "/": HomeScreen,
  "/create-meeting": HomeScreen,
  "/join-meeting": HomeScreen,
  "/meeting": HomeScreen,
  "*": NotFound,
};
