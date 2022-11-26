import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Layouts/Navbar";
import { NavigationProgress } from "@mantine/nprogress";
import { Flex } from "@mantine/core";

function PricingPage() {
  return (
    <>
      <NavigationProgress />
      <Navbar />
      <Flex
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        sx={{ height: "100%", width: "100%", padding: "2rem" }}
      >
        <Pricing />
      </Flex>
    </>
  );
}

export default PricingPage;
