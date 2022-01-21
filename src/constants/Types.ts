import { ButtonHTMLAttributes, FC } from "react";

type Routes =
  | "*"
  | "/"
  | "create-meeting"
  | "join-meeting"
  | "meeting/:meetingId";

export type RoutesType = {
  [key in Routes]: FC;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  background: string;
  foreGround: string;
}
