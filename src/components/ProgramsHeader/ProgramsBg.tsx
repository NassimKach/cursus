import { Text, Box, Flex } from "@mantine/core";

function ProgramsBg() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(26, 32, 44, 0.6), rgba(26, 32, 44, 0.6)), url(/university-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "30vh",
      }}
    >
      <Flex
        justify="flex-start"
        align="flex-end"
        sx={{
          height: "100%",
          width: "90vw",
          margin: "auto",
          paddingBottom: "1rem",
        }}
      >
        <Text
          size={20}
          weight={500}
          sx={(theme) => ({
            color: theme.colors.primaryColor[0],
          })}
        >
          Universities and Programs
        </Text>
      </Flex>
    </Box>
  );
}

export default ProgramsBg;
