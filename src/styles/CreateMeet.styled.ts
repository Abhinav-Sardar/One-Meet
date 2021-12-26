import styled from "styled-components";
import { accentColor } from "../Constants/Constants";
export const CreateMeetHeader = styled.header`
  display: flex;
  cursor: pointer;
  height: 7vh;
  align-items: center;
  margin-left: 1vw;
`;

export const CreateRoomContent = styled.main`
  height: 93vh;
  width: 100%;
  display: flex;
`;
export const VideoContainer = styled.div`
  flex: 1.5;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  .video-container {
    width: 80%;
    background-color: #262626;
    height: 65%;
    border-radius: 10px;
    position: relative;
    video {
      position: absolute;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
`;
export const JoinInfo = styled.div`
  flex: 1;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ControlButton = styled.button`
  height: 65px;
  width: 65px;
  border: 0;
  outline: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1vw;
  border: 1px solid white;
  background: ${(pr) => pr.color};
  svg {
    color: white;
    font-size: 1.7vw;
  }
  transition: 400ms ease-in-out;
  &:hover {
  }
`;

export const MediaStatusText = styled.span`
  font-size: 24px;
  color: white;
  text-align: center;
  font-family: Poppins;
  top: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
