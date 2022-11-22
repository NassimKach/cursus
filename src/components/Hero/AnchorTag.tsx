import { Anchor } from "@mantine/core";

function AnchorTag({ link }: { link: string }) {
  return (
    <>
      <Anchor
        underline={false}
        sx={(theme) => ({
          color: theme.colors.tertiaryColor[0],
          textDecoration: "none",
        })}
      >
        {link}
      </Anchor>
    </>
  );
}

export default AnchorTag;
