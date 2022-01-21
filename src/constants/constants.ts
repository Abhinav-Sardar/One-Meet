const constants = {
  accentColor: "#0099cc",
  storageKey: "ONE_MEET_",
};

export function getConstants<T extends keyof typeof constants>(
  key: T
): typeof constants[T] {
  return constants[key];
}
export const accentColor = getConstants("accentColor");
