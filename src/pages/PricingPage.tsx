import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Layouts/Navbar";
import { NavigationProgress } from "@mantine/nprogress";

function PricingPage() {
  return (
    <>
      <NavigationProgress />
      <Navbar />
      <Pricing />
    </>
  );
}

export default PricingPage;
