import CreateRoom from "../Screens/CreateRoom";
import HomeScreen from "../Screens/HomeScreen";
import { RoutesType } from "./Types";
const routes: RoutesType = {
  "*": () => <div>404 not found</div>,
  "/": HomeScreen,
  "create-meeting": CreateRoom,
  "join-meeting": () => <div>Join Meeting</div>,
  "meeting/:meetingId": () => <div>Meeting</div>,
};
const constants = {
  routes: routes,
  storagePrefix: "ONE_MEET_",
  accentColor: "#0099cc",
  appName: "One-Meet",
  getRandomKey: function (): string {
    let key: string = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitialize = letters.toUpperCase();
    const symbols = "!@#$%^&*()_+";
    const numbers = "0123456789";
    const fields = [letters, capitialize, symbols, numbers];
    for (let i = 0; i < 15; i++) {
      const randomField = fields[Math.floor(Math.random() * fields.length)];
      const randomKey =
        randomField[Math.floor(Math.random() * randomField.length)];
      key += randomKey;
    }

    return key;
  },
};

export default function getConstants<T extends keyof typeof constants>(
  param: T
): typeof constants[T] {
  return constants[param];
}

export const accentColor = getConstants("accentColor");
