import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Layouts/Navbar";
import { NavigationProgress } from "@mantine/nprogress";
import { Flex } from "@mantine/core";

function PricingPage() {
  return (
    <>
      <NavigationProgress />
      <Navbar position="sticky" />
      <Flex
        justify="center"
        align={"space-between"}
        direction="row"
        sx={{ padding: "1rem 0" }}
      >
        <Pricing />
      </Flex>
    </>
  );
}

export default PricingPage;
