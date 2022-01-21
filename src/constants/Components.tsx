import { CSSProperties, FC } from "react";
import { AccentTextStyled } from "../Styles/Components.styled";
import { BsCameraVideoFill } from "react-icons/bs";
import { accentColor } from "./constants";
export const AccentText: FC<CSSProperties> = ({ children, ...rest }) => {
  return <AccentTextStyled style={rest}>{children}</AccentTextStyled>;
};
export const Flex: FC<CSSProperties> = ({ children, ...rest }) => {
  return <div style={{ ...rest, display: "flex" }}>{children}</div>;
};

export const Logo: FC<{ size: number }> = ({ size }) => {
  return (
    <Flex
      height={10 * size}
      width={10 * size}
      borderRadius="50%"
      background={accentColor}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <BsCameraVideoFill fontSize={size * 5.5} color={"white"} />
    </Flex>
  );
};
