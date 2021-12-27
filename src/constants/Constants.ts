import { constants } from "buffer";

const storageKey = "one-meet-accent-color";
export let accentColor = localStorage.getItem(storageKey) || "#bd14ca";
// export a function that takes a hex color and reduces its lightness by 10%
export const reduceLightness = (hex: string) => {
  const color = hex.replace("#", "");
  const R = parseInt(color.substring(0, 2), 16);
  const G = parseInt(color.substring(2, 4), 16);
  const B = parseInt(color.substring(4, 6), 16);
  const HEX =
    "#" +
    (
      (0 | ((1 << 8) + R + R * 0.25)) +
      (0 | ((1 << 8) + G + G * 0.25)) +
      (0 | ((1 << 8) + B + B * 0.25))
    )
      .toString(16)
      .slice(1);
  return HEX;
};
