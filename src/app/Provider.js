import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setLayout } from "../stores";

import { Background } from "./styles";

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    dispatch(setLayout(isDesktop ? "desktop" : "mobile"));
  }, [isDesktop, dispatch]);
  return <Background>{children}</Background>;
};

export default AppProvider;
