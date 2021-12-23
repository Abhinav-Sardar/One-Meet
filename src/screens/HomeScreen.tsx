import { FC } from "react";
import { useTheme } from "styled-components";
import { Page, Selectable } from "../styles/Components.styled";
import { HomePageHeader, MainSection, Titles } from "../styles/HomePage.styled";
import { BsCameraVideoFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Theme } from "../constants/Types";
import { Logo } from "../constants/Components";
const HomePage: FC = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Page>
      <HomePageHeader>
        <Logo
          size={3}
          style={{
            margin: "0 .5vw",
          }}
        />
        <Selectable
          style={{
            margin: "0 .5vw",
          }}
        >
          One-Meet
        </Selectable>
      </HomePageHeader>
      <MainSection>
        <motion.div
          animate={{
            translateY: ["5vh", "0vh", "5vh"],
          }}
          transition={{
            type: "tween",
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <Logo size={10} />
        </motion.div>
        <Titles>
          <Selectable
            style={{
              fontSize: "80px",
            }}
          >
            One-Meet
          </Selectable>
          <Selectable
            style={{
              fontSize: "35px",
            }}
          >
            Best place for One-Time meetings with anyone in the world.
          </Selectable>
        </Titles>
      </MainSection>
    </Page>
  );
};
export default HomePage;
