import { motion } from "framer-motion";
import { FC } from "react";
import { AccentText, Button, Flex, Logo } from "../constants/Components";
import getConstants, { accentColor } from "../constants/Constants";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const HomeScreen: FC = () => {
  const appName = getConstants("appName");
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column">
      <Flex
        height="10vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid black"
      >
        <AccentText marginRight={".5rem"}>{appName}</AccentText>
        <Logo size={5} />
      </Flex>
      <Flex
        background={`linear-gradient(60deg, ${accentColor}, #fff`}
        height="90vh"
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
      >
        <motion.div
          animate={{
            translateY: ["-5vh", "0vh", "-5vh"],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Logo size={14} />
        </motion.div>
        <AccentText
          fontFamily="'Raleway' , sans-serif"
          fontWeight={600}
          fontSize={"5rem"}
        >
          {appName}
        </AccentText>
        <AccentText fontFamily="'Raleway' , sans-serif">
          Best Place For One-Meetings Chats With Anyone In The World.
        </AccentText>
        <Flex justifyContent={"center"} alignItems="center" marginTop="50px">
          <Button
            onClick={() => navigate("/create-meeting")}
            foreGround="white"
            background={accentColor}
            style={{
              width: "250px",
              height: "70px",
              justifyContent: "space-around",
              margin: "0 30px",
            }}
          >
            Create A Meeting <FaPlus />
          </Button>
          <Button
            foreGround="white"
            background={accentColor}
            style={{
              width: "250px",
              height: "70px",
              justifyContent: "space-around",
              margin: "0 30px",
            }}
            onClick={() => navigate("/join-meeting")}
          >
            Join A Meeting <FaPlus />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
