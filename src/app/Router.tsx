import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import * as Pages from "./pages";
import { DesktopLayout, MobileLayout } from "../components";

//types
import { RootState } from "../stores";

const AppRouter: React.FC = () => {
  const layout = useSelector((state: RootState) => state.layout);

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