import { Text, Paper, Rating, Flex, Avatar } from "@mantine/core";

function TestimonialCard({
  image,
  rate,
  text,
  name,
}: {
  image: string;
  rate: number;
  text: string;
  name: string;
}) {
  return (
    <Paper
      withBorder
      shadow="sm"
      radius="lg"
      sx={{ width: "400px", height: "auto", padding: "2rem 0" }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Avatar radius="xl" size="lg" color="dark" src={image} />
        <Text align="center">{text}</Text>
        <Rating value={rate} fractions={2} readOnly />
        <Text
          weight={400}
          sx={(theme) => ({
            color: theme.colors.secondaryColor[0],
          })}
        >
          {name}
        </Text>
      </Flex>
    </Paper>
  );
}

export default TestimonialCard;
