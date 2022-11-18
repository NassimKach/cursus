import { Anchor } from "@mantine/core";

function AnchorTag({ link }: { link: string }) {
  return (
    <>
      <Anchor
        href="#"
        underline={false}
        sx={(theme) => ({
          color: theme.colors.tertiaryColor[0],
        })}
      >
        {link}
      </Anchor>
    </>
  );
}

export default AnchorTag;
