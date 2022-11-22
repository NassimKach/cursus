import { Flex, Paper, Text, Button, createStyles } from "@mantine/core";
import { AiFillCheckCircle } from "react-icons/ai";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

function FreePlanCard() {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="md" p="md" sx={{ maxWidth: "25vw" }}>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Text size={26} weight={600}>
          Free
        </Text>
        <Text align="center" size={14}>
          Organize across <br /> all apps by hand
        </Text>
        <Text
          align="center"
          weight={600}
          size={24}
          sx={(theme) => ({
            color: theme.colors.secondaryColor[0],
          })}
        >
          0$
        </Text>
        <Flex align="center" direction="row" wrap="wrap">
          <AiFillCheckCircle size={25} color="4FD1C5" />
          <Text size={15}>5 Applys</Text>
        </Flex>
        <Flex align="start" direction="row" wrap="wrap">
          <AiFillCheckCircle size={25} color="4FD1C5" />
          <Text size={15} align="center">
            Live support
          </Text>
        </Flex>
        <Flex align="start" direction="row" wrap="wrap">
          <AiFillCheckCircle size={25} color="4FD1C5" />
          <Text size={15} align="center">
            Language courses
          </Text>
        </Flex>
        <Flex align="start" direction="row" wrap="wrap">
          <AiFillCheckCircle size={25} color="BDBDBD" />
          <Text size={15} align="center">
            Doing all paper work
          </Text>
        </Flex>
        <Flex
          align="start"
          direction="row"
          wrap="wrap"
          sx={{ width: "60%", margin: "auto" }}
        >
          <AiFillCheckCircle size={25} color="BDBDBD" />
          <Text size={15} align="center">
            Community support
          </Text>
        </Flex>
        <Button className={classes.button}>Try for Free</Button>
      </Flex>
    </Paper>
  );
}

export default FreePlanCard;
