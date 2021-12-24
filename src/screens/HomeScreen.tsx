import { motion } from "framer-motion";
import { FC, useEffect } from "react";
import { Button, Logo } from "../Constants/Components";
import { accentColor } from "../Constants/Constants";
import { Page, Selectable } from "../styles/Components.styled";
import { Header, MainContent } from "../styles/HomeScreen.styled";
const HomeScreen: FC = () => {
  useEffect(() => {
    document.title = "One-Meet";
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <Page>
      <Header>
        <Logo size={3.5} />.<Selectable>One-Meet</Selectable>
      </Header>
      <MainContent>
        <motion.div
          animate={{
            translateY: ["5vh", "0vh", "5vh"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Logo size={11} />
        </motion.div>
        <Selectable
          style={{
            fontWeight: 800,
            fontSize: "80px",
            marginTop: "6vh",
          }}
        >
          One-Meet
        </Selectable>
        <Selectable
          style={{
            fontWeight: 800,
            fontSize: "30px",
          }}
        >
          Best place for One-Time meetings with anyone in the world.
        </Selectable>
        <div
          className="btns-wrapper"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {}}
            color="white"
            backgroundColor={accentColor}
          >
            Create A Room
          </Button>
        </div>
      </MainContent>
    </Page>
  );
};
export default HomeScreen;
