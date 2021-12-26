import React, { CSSProperties, ReactChildren, ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  color: string;
  backgroundColor: string;
  viewStyle?: CSSProperties;
}

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  contentContainerStyle?: CSSProperties;
  title: string;
}
