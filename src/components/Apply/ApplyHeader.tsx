import { Text, Box, Flex, SimpleGrid, Avatar } from "@mantine/core";
import ApplyCard from "./ApplyCard";

function ApplyHeader() {
  return (
    <>
      <Box
        sx={(theme) => ({
          background:
            "linear-gradient(0deg, rgba(26, 32, 44, 0.6), rgba(26, 32, 44, 0.6)), url(/university-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          color: theme.colors.primaryColor[0],
          position: "relative",
        })}
      >
        <Flex
          justify="flex-start"
          align="flex-start"
          direction="column"
          gap="xl"
          sx={{
            height: "100%",
            width: "90vw",
            margin: "auto",
            paddingTop: "3rem",
          }}
        >
          <Text size={30} weight={600}>
            Universities and Programs
          </Text>
          <SimpleGrid cols={2} spacing="xl">
            <Flex direction="column">
              <Text weight={500}>Deadline</Text>
              <Text weight={300}>Junary, September</Text>
            </Flex>
            <Flex direction="column">
              <Text weight={500}>Deadline</Text>
              <Text weight={300}>Junary, September</Text>
            </Flex>
          </SimpleGrid>
          <Flex align={"center"} justify={"center"} gap="sm">
            <Avatar src={"/paris-logo.jpg"} radius="xl" />
            <Text weight={500}>Univirsity of lile</Text>
          </Flex>
        </Flex>
        <ApplyCard />
      </Box>
    </>
  );
}

export default ApplyHeader;
