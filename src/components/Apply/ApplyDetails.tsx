import {
  Text,
  Paper,
  Flex,
  createStyles,
  Title,
  Image,
  Divider,
  Box,
} from "@mantine/core";
import { IconPin, IconHome2 } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  paperColor: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.whiteColor[0],
  },

  iconColor: {
    color: theme.colors.secondaryColor[0],
  },
}));

function ApplyDetails({ data }: { data: any }) {
  const { classes } = useStyles();
  return (
    <Flex
      direction="column"
      gap="xl"
      sx={{
        width: "60%",
        margin: "auto 4rem",
        padding: "2rem 0",
      }}
    >
      <Paper
        shadow="sm"
        radius={0}
        p="lg"
        className={classes.paperColor}
        withBorder
      >
        <Flex direction="column" gap="lg" p={20}>
          <Title size={25}>ABOUT PROGRAM</Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            aliquam eaque consequatur repellendus optio iusto eos perferendis
            omnis atque unde?
          </Text>
        </Flex>
      </Paper>

      <Paper
        shadow="sm"
        radius={0}
        p="lg"
        className={classes.paperColor}
        withBorder
      >
        <Flex direction="column" gap="lg" p={20}>
          <Title size={25}>PROGRAM DETAILS</Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            aliquam eaque consequatur repellendus optio iusto eos perferendis
            omnis atque unde?
          </Text>
        </Flex>

        <>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Name</Title>
            <Text>{data.name}</Text>
          </Flex>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Degree</Title>
            <Text>{data.degree}</Text>
          </Flex>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Study Type</Title>
            <Text>{data.type}</Text>
          </Flex>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Duration</Title>
            <Text>{data.duration} years</Text>
          </Flex>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Tuition Fee</Title>
            <Text>{data.fees}</Text>
          </Flex>
          <Flex direction="column" gap="lg" p={20}>
            <Title size={20}>Language</Title>
            <Text>{data.language}</Text>
          </Flex>
        </>
      </Paper>
      <Paper shadow="sm" radius={0} className={classes.paperColor} withBorder>
        <Image height={200} src={`/${data.university}`} />
        <Flex
          align={"center"}
          justify={"center"}
          direction="column"
          gap="lg"
          p={20}
        >
          <Title size={20}>{data.name}</Title>
        </Flex>
        <Divider
          my="xs"
          labelPosition="center"
          label={
            <>
              <IconPin size={12} className={classes.iconColor} />
              <Box ml={5}>{data.location}</Box>
            </>
          }
          sx={{ width: "60%", margin: "auto" }}
        />
        <Flex align={"center"} justify={"center"}>
          <IconHome2 size={12} className={classes.iconColor} />
          <Text size={12}>Visit university profile</Text>
        </Flex>
      </Paper>
    </Flex>
  );
}

export default ApplyDetails;
