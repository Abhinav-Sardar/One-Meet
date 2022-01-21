import { ButtonHTMLAttributes, CSSProperties, FC } from "react";
import { AccentTextBase, ButtonBase } from "../Styles/Components.styled";
import { accentColor } from "./Constants";
import { BsCameraVideoFill } from "react-icons/bs";
import { ButtonProps } from "./Types";
export const AccentText: FC<CSSProperties> = ({ children, ...rest }) => {
  return (
    <AccentTextBase style={{ ...rest, color: accentColor }}>
      {children}
    </AccentTextBase>
  );
};

export const Flex: FC<CSSProperties> = ({ children, ...rest }) => {
  return <div style={{ display: "flex", ...rest }}>{children}</div>;
};

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <Flex
      height={10 * size}
      width={size * 10}
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
      backgroundColor={accentColor}
    >
      <BsCameraVideoFill fontSize={size * 5.5} color="white" />
    </Flex>
  );
};

export const Button: FC<ButtonProps> = ({
  children,
  background,
  foreGround,
  ...rest
}) => {
  return (
    <ButtonBase
      data-info={{
        color: foreGround,
        background: background,
      }}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
