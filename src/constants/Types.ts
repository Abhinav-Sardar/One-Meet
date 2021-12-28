import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactChildren,
  ReactNode,
} from "react";

export interface ButtonProps {
  onClick: () => void;
  color: string;
  backgroundColor: string;
  viewStyle?: CSSProperties;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  contentContainerStyle?: CSSProperties;
  title: string;
}
