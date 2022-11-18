import { Text, Paper, Title, Flex } from "@mantine/core";

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <Paper
      withBorder
      shadow="sm"
      radius="lg"
      p="md"
      sx={{ width: "350px", height: "auto" }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="left"
        align="center"
        direction="row"
        wrap="wrap"
        sx={{ padding: "1rem 0" }}
      >
        <Title
          size="3rem"
          sx={(theme) => ({
            color: theme.colors.secondaryColor[0],
          })}
        >
          {number}
        </Title>
        <Title
          size="1.5rem"
          sx={(theme) => ({
            color: theme.colors.textColor[0],
          })}
        >
          {title}
        </Title>
      </Flex>

      <Text>{text}</Text>
    </Paper>
  );
}

export default StepCard;
