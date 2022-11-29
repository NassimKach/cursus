import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Layouts/Navbar";
import { NavigationProgress } from "@mantine/nprogress";
import { Flex } from "@mantine/core";

function PricingPage() {
  return (
    <>
      <NavigationProgress />
      <Navbar position="relative" />
      <Flex
        justify="center"
        align={"space-between"}
        direction="row"
        sx={{ height: "100%", width: "100%", padding: "1rem 0" }}
      >
        <Pricing />
      </Flex>
    </>
  );
}

export default PricingPage;
