import { Accordion, Box, Title, Text } from "@mantine/core";

function FaqSection() {
  return (
    <Box
      sx={{
        margin: "10rem auto 15rem auto",
        width: "90%",
      }}
    >
      <Title align="center">Frequently Asked Questions</Title>
      <Accordion
        variant="contained"
        radius="md"
        sx={{ margin: "2rem 0" }}
        styles={{
          item: {
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.06)",
          },

          chevron: {
            "&[data-rotate]": {
              transform: "rotate(-90deg)",
            },
          },
        }}
      >
        <Accordion.Item value="customization">
          <Accordion.Control>
            <Text weight={600}>Customization</Text>
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            necessitatibus blanditiis ducimus pariatur quibusdam nemo quis
            asperiores magni explicabo minima maxime illo
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>
            <Text weight={600}>Flexibility</Text>
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            necessitatibus blanditiis ducimus pariatur quibusdam nemo quis
            asperiores magni explicabo minima maxime illoyles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>
            <Text weight={600}>No annoying focus ring</Text>
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            necessitatibus blanditiis ducimus pariatur quibusdam nemo quis
            asperiores magni explicabo minima maxime illo
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Demo">
          <Accordion.Control>
            <Text weight={600}>Demo</Text>
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            necessitatibus blanditiis ducimus pariatur quibusdam nemo quis
            asperiores magni explicabo minima maxime illo
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}

export default FaqSection;
