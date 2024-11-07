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
        <Route path="portfolio/" element={<Pages.Portfolio />}>
          <Route index element={<Pages.PortfolioHome />} />
          <Route path="main-site" element={<Pages.MainSite />} />
          <Route path="express-app" element={<Pages.ExpressApp />} />
          <Route path="linux-vps" element={<Pages.LinuxVps />} />
          <Route path="overwatch-tools" element={<Pages.OverwatchTools />} />
        </Route>
        <Route path="contact" element={<Pages.Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
