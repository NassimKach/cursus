import LandingPage from "./pages/LandingPage";
import ProgramsPage from "./pages/ProgramsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Demo from "./Demo";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  startNavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";
import { useEffect } from "react";

function App() {
  let location = useLocation();

  useEffect(() => {
    startNavigationProgress();
    completeNavigationProgress();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
