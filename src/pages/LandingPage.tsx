import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Layouts/Navbar";
import Speak from "../components/Speak/Speak";
import StepsSection from "../components/Steps/StepsSection";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import FaqSection from "../components/FAQ/FaqSection";
import Footer from "../components/Layouts/Footer";
import { NavigationProgress } from "@mantine/nprogress";
import ScrollToTop from "../components/Layouts/ScrollToTop";

function Main() {
  return (
    <>
      <NavigationProgress />
      <Navbar position="fixed" />
      <Hero />
      <Features />
      <Speak />
      <StepsSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Main;
