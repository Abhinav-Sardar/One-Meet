import React, { Children, FC, CSSProperties, ReactPortal } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import {
  LogoWrapper,
  Page,
  Selectable,
  StyledButton,
} from "../styles/Components.styled";
import { BsCameraVideoFill } from "react-icons/bs";
import { ButtonProps, ModalProps } from "./Types";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
export const HOC: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <LogoWrapper
      style={{
        height: size * 15,
        width: size * 15,
      }}
    >
      <BsCameraVideoFill fontSize={size * 9} />
    </LogoWrapper>
  );
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      style={props.viewStyle}
      color={props.color}
      about={props.backgroundColor}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export const FadedAnimationWrapper: FC<{ style?: CSSProperties }> = ({
  children,
  style,
}) => {
  return (
    <Page
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      {children}
    </Page>
  );
};

export const Modal = (props: ModalProps) => {
  const modalRoot = document.getElementById("modal");
  const backDropVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const modalVariants = {
    initial: {
      height: "0vh",
      width: "0vw",

      opacity: 0,
    },
    animate: {
      height: props.contentContainerStyle?.height || "95vh",
      width: props.contentContainerStyle?.width || "70vw",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      height: "0vh",
      width: "0vw",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return createPortal(
    <AnimatePresence>
      {props.visible && (
        <>
          <motion.div
            variants={backDropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="modal-backdrop"
            onClick={props.onClose}
          />
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="modal"
            style={props.contentContainerStyle}
          >
            <div className="modal-header">
              <span />
              <Selectable>{props.title}</Selectable>
              <MdClose onClick={props.onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    // @ts-ignore
    modalRoot
  );
};
