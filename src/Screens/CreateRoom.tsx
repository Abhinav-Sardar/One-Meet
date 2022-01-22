import { FC, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { FadedPageWrapper, Flex } from "../constants/Components";
import { ControlButton } from "../Styles/CreateRoom";
import {
  BsMic,
  BsMicMute,
  BsCameraVideo,
  BsCameraVideoOff,
} from "react-icons/bs";
import { accentColor } from "../constants/Constants";
import { useNavigate, useNavigationType } from "react-router-dom";

const CreateRoom: FC = () => {
  const [isMicOpen, setIsMicOpen] = useState<boolean>(true);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(true);
  const vidRef = useRef<HTMLVideoElement>();
  const initiateMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      vidRef.current!.srcObject = stream;
      vidRef.current!.play();
    } catch (e) {}
  };
  useEffect(() => {
    initiateMedia();
  }, []);
  return (
    <FadedPageWrapper>
      <Flex height="100vh" width="100vw" overflow="hidden">
        <Flex
          height="100%"
          width="50vw"
          border="1px solid black"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            height="55%"
            width="93%"
            background="#2e2e2e"
            borderRadius="10px"
            flexDirection="column"
          >
            <Flex height="80%" width="100%">
              <h1>EXP</h1>
            </Flex>
            <Flex
              borderTop="1px solid white"
              height="20%"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <ControlButton
                onClick={() => setIsMicOpen(!isMicOpen)}
                style={{
                  background: !isMicOpen ? accentColor : "transparent",
                }}
              >
                {isMicOpen ? <BsMic /> : <BsMicMute />}
              </ControlButton>
              <ControlButton
                onClick={() => setIsCameraOpen(!isCameraOpen)}
                style={{
                  background: !isCameraOpen ? accentColor : "transparent",
                }}
              >
                {isCameraOpen ? <BsCameraVideo /> : <BsCameraVideoOff />}
              </ControlButton>
            </Flex>
          </Flex>
        </Flex>
        <Flex height="100%" width="50vw" border="1px solid black">
          {/* @ts-ignore */}
          <video ref={vidRef} height="200px" width="400px"></video>
        </Flex>
      </Flex>
    </FadedPageWrapper>
  );
};

export default CreateRoom;
