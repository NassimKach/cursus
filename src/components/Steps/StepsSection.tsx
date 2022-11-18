import { Box, Flex } from "@mantine/core";
import StepCard from "./StepCard";
function StepsSection() {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="space-around"
      align="center"
      direction="row"
      wrap="wrap"
      rowGap={"2rem"}
      sx={{ width: "90%", margin: "10rem auto" }}
    >
      <StepCard
        number="01"
        title="Sign up"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
        accusantium aspernatur"
      />
      <StepCard
        number="02"
        title="Submit Documents"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          accusantium aspernatur"
      />
      <StepCard
        number="03"
        title="Pick and Apply"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          accusantium aspernatur"
      />
      <StepCard
        number="04"
        title="Get accepted"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
        accusantium aspernatur"
      />
      <StepCard
        number="05"
        title="Apply for Visa"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          accusantium aspernatur"
      />
      <StepCard
        number="06"
        title="Begin your journey"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
        accusantium aspernatur"
      />
    </Flex>
  );
}

export default StepsSection;
