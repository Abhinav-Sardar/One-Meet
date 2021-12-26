import { access } from "fs";
import { addListener } from "process";
import { FC, useEffect, useState } from "react";
import {
  BsMicFill,
  BsFillMicMuteFill,
  BsCameraVideoFill,
  BsCameraVideoOffFill,
  BsCameraVideoOff,
  BsMicMute,
  BsMic,
  BsCameraVideo,
  BsFillGearFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FadedAnimationWrapper,
  Logo,
  Modal,
} from "../Constants/Components";
import { accentColor } from "../Constants/Constants";
import { Selectable } from "../styles/Components.styled";
import {
  ControlButton,
  Controls,
  CreateMeetHeader,
  CreateRoomContent,
  JoinInfo,
  MediaStatusText,
  VideoContainer,
} from "../styles/CreateMeet.styled";

const CreateMeet: FC = () => {
  const [isGranted, setIsGranted] = useState<boolean>(false);
  const [isMicOpen, setIsMicOpen] = useState<boolean>(true);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const initiateCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      const video = document.getElementById(
        "video-preview"
      ) as HTMLVideoElement;
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };

      setIsGranted(true);
    } catch (e) {}
  };
  useEffect(() => {
    initiateCamera();
    document.title = "Create Meet";
    // initiateCamera();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const navigate = useNavigate();
  return (
    <FadedAnimationWrapper>
      <CreateMeetHeader
        onClick={() => {
          window.location.assign("/");
        }}
      >
        <Logo size={2.5} />
        <Selectable
          style={{
            fontSize: "30px",
            marginLeft: "1vw",
          }}
        >
          One-Meet
        </Selectable>
      </CreateMeetHeader>
      <CreateRoomContent>
        <VideoContainer>
          <div className="video-container">
            <video
              id="video-preview"
              muted={!isMicOpen}
              style={{
                visibility: isCameraOpen ? "visible" : "hidden",
              }}
            ></video>
            <MediaStatusText>
              {!isGranted && "Please allow camera and microphone access"}
              {!isCameraOpen && "Camera Closed"}
            </MediaStatusText>
            <Controls>
              <ControlButton
                color={isMicOpen ? "transparent" : accentColor}
                className="ripple"
                onClick={() => setIsMicOpen(!isMicOpen)}
              >
                {isMicOpen ? <BsMic /> : <BsMicMute />}
              </ControlButton>
              <ControlButton
                color={isCameraOpen ? "transparent" : accentColor}
                onClick={() => setIsCameraOpen(!isCameraOpen)}
              >
                {isCameraOpen ? <BsCameraVideo /> : <BsCameraVideoOff />}
              </ControlButton>
            </Controls>
          </div>
          <Button
            backgroundColor={accentColor}
            color="white"
            onClick={() => {
              setIsModalOpen(true);
            }}
            viewStyle={{
              height: "5vh",
              fontSize: "17px",
              borderRadius: "100px",
              marginTop: "1vh",
            }}
          >
            <BsFillGearFill
              style={{
                margin: "0 .3vw",
              }}
            />{" "}
            <span>Audio And Video Settings</span>
          </Button>
        </VideoContainer>
        <JoinInfo></JoinInfo>
      </CreateRoomContent>

      <Modal
        onClose={() => setIsModalOpen(false)}
        visible={isModalOpen}
        title="Settings"
        contentContainerStyle={{
          width: "50vw",
        }}
      >
        <h1>NPNPNP</h1>
      </Modal>
    </FadedAnimationWrapper>
  );
};

export default CreateMeet;
