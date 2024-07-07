import * as React from "react";

export interface ColorModeContextType {
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export default ColorModeContext;