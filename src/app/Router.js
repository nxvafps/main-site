import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLayout } from "../stores";

import * as Pages from "./pages";
import { DesktopLayout, MobileLayout } from "../components";

const AppRouter = () => {
  const layout = useLayout();

  return (
    <Routes>
      <Route
        path="/"
        element={layout === "desktop" ? <DesktopLayout /> : <MobileLayout />}
      >
        <Route index element={<Pages.Home />} />
        <Route path="about" element={<Pages.About />} />
        <Route path="portfolio" element={<Pages.Portfolio />} />
        <Route path="contact" element={<Pages.Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
