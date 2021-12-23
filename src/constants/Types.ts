import React from "react";

export interface Theme {
  theme: {
    accentColor: string;
    theme: "light" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
    setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  };
}
