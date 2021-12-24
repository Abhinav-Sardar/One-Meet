import { CSSProperties } from "react";

export interface ButtonProps {
  onClick: () => void;
  color: string;
  backgroundColor: string;
  viewStyle?: CSSProperties;
}
