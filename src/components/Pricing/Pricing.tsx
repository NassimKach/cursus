import FreePlanCard from "./FreePlanCard";
import BasicPlanCard from "./BasicPlanCard";
import AdvencedPlanCard from "./AdvencedPlanCard";
import { Flex } from "@mantine/core";

function Pricing() {
  return (
    <>
      <Flex
        mih={50}
        gap="2rem"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <FreePlanCard />
        <BasicPlanCard />
        <AdvencedPlanCard />
      </Flex>
    </>
  );
}

export default Pricing;
