import { access } from "fs";
import { FC, useEffect, useState } from "react";
import { BsMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FadedAnimationWrapper, Logo } from "../Constants/Components";
import { accentColor } from "../Constants/Constants";
import { Selectable } from "../styles/Components.styled";
import {
  ControlButton,
  Controls,
  CreateMeetHeader,
  CreateRoomContent,
  JoinInfo,
  VideoContainer,
} from "../styles/CreateMeet.styled";

const CreateMeet: FC = () => {
  const [isGranted, setIsGranted] = useState<boolean>(false);
  const [isMicOpen, setIsMicOpen] = useState<boolean>(false);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const initiateCamera = async () => {};
  useEffect(() => {
    document.title = "Create Meet";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const navigate = useNavigate();
  return (
    <FadedAnimationWrapper>
      <CreateMeetHeader onClick={() => navigate("/")}>
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
            <video></video>

            <Controls>
              <ControlButton
                color={isMicOpen ? "transparent" : accentColor}
                className="ripple"
              >
                {isMicOpen ? <BsMicFill /> : <BsFillMicMuteFill />}
              </ControlButton>
              <ControlButton
                color={isCameraOpen ? "transparent" : accentColor}
              ></ControlButton>
            </Controls>
          </div>
        </VideoContainer>
        <JoinInfo />
      </CreateRoomContent>
    </FadedAnimationWrapper>
  );
};

export default CreateMeet;
