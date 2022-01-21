import { FC } from "react";
import { AccentTextStyled, StyledPage } from "../Styles/Components.styled";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { accentColor } from "../constants/constants";
import { AccentText } from "../constants/Components";
const NotFound: FC = () => {
  return (
    <StyledPage>
      <BsEmojiNeutralFill fontSize={"200px"} color={accentColor} />
      <AccentText fontSize={"30px"} margin="20px 0">
        We couldn't find the page you were looking for.
      </AccentText>
    </StyledPage>
  );
};

export default NotFound;
