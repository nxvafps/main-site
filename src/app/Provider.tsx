import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setLayout } from "../stores";

import { Background } from "./styles";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    dispatch(setLayout(isDesktop ? "desktop" : "mobile"));
  }, [isDesktop, dispatch]);
  return <Background>{children}</Background>;
};

export default AppProvider;
