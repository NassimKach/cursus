import { Title } from "@mantine/core";

function FooterTitle({ title }: { title: string }) {
  return (
    <Title
      size={"1.5rem"}
      weight={500}
      sx={(theme) => ({
        color: theme.colors.primaryColor[0],
      })}
    >
      {title}
    </Title>
  );
}

export default FooterTitle;
