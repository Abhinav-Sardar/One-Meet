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
  border: 1px solid black;
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
  }
`;
export const JoinInfo = styled.div`
  border: 1px solid black;
  flex: 1;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 1px solid white;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ControlButton = styled.button`
  height: 10.5vh;
  width: 10.5vh;
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
    font-size: 2vw;
  }
  transition: 400ms ease-in-out;
  &:hover {
  }
`;
