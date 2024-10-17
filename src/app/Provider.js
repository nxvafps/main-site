import React from "react";
import { LayoutProvider } from "../stores/contexts";

import { Background } from "./styles";

const AppProvider = ({ children }) => {
  return (
    <Background>
      <LayoutProvider>{children}</LayoutProvider>
    </Background>
  );
};

export default AppProvider;
