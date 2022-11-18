import { Flex } from "@mantine/core";

function FooterFlex({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="space-between"
      align="start"
      direction="column"
      wrap="wrap"
      sx={{ flex: "1 200px" }}
    >
      {children}
    </Flex>
  );
}

export default FooterFlex;
