import { constants } from "buffer";

const storageKey = "one-meet-accent-color";
export let accentColor = localStorage.getItem(storageKey) || "#bd14ca";
