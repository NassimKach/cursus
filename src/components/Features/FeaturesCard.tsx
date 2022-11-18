import { Text, Paper, Image, Title } from "@mantine/core";

function FeaturesCard({
  icon,
  text,
  title,
}: {
  icon: string;
  text: string;
  title: string;
}) {
  return (
    <Paper
      withBorder
      shadow="md"
      radius="lg"
      p="md"
      sx={{ width: "200px", height: "auto" }}
    >
      <Image width={37} height={38} radius="md" src={icon} />
      <Title order={3} sx={{ margin: "1rem 0" }}>
        {title}
      </Title>
      <Text>{text}</Text>
    </Paper>
  );
}

export default FeaturesCard;
