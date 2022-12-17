import LandingPage from "./pages/LandingPage";
import ProgramsPage from "./pages/ProgramsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ApplyPage from "./pages/ApplyPage";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  startNavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";
import { useEffect, useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";

function App() {
  let location = useLocation();

  useEffect(() => {
    startNavigationProgress();
    completeNavigationProgress();
  }, [location.pathname]);

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...theme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/:id" element={<ApplyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
