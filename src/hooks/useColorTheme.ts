import * as React from "react";
import ColorModeContext, { ColorModeContextType } from "../providers/ColorModeContext";

const useColorTheme = (): ColorModeContextType => {
  const context = React.useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

export default useColorTheme;
