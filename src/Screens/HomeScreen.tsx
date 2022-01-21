import { FC, ReactElement } from "react";
import { AccentText, Flex, Logo } from "../constants/Components";
import { accentColor } from "../constants/constants";
const HomeScreen: FC = () => {
  document.body.style.overflow = "hidden";
  return (
    <Flex flexDirection="column" overflow="hidden">
      <Flex
        height="10vh"
        width="100%"
        border="1px solid black"
        alignItems="center"
        justifyContent="center"
      >
        <AccentText fontSize="35px" marginRight="1rem">
          One-Meet
        </AccentText>
        <Logo size={5} />
      </Flex>
      <Flex
        background={`rgba(0, 0, 0, 0) linear-gradient(60deg, ${accentColor}, rgb(255, 255, 255))`}
        height="90vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Logo size={17} />
        <AccentText fontSize="5rem" fontFamily="'Raleway', sans-serif">
          One-Meet
        </AccentText>
        <AccentText fontSize="2rem" fontFamily="'Raleway', sans-serif">
          Best place for One-Time meetings with anyone in the world.
        </AccentText>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
