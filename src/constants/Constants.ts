import { constants } from "buffer";

const storageKey = "one-meet-accent-color";
export let accentColor = localStorage.getItem(storageKey) || "#bd14ca";
// export a function light that takes a color and reduces the lightness by 10%
// no libraries used
