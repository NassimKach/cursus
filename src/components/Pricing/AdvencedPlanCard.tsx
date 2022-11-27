import { Flex, Paper, Text, Button, createStyles, List } from "@mantine/core";
import { AiFillCheckCircle } from "react-icons/ai";

const useStyles = createStyles((theme) => ({
  button: {
    background: "transparent",
    border: `1px solid ${theme.colors.secondaryColor[0]}`,
    color: theme.colors.secondaryColor[0],
    cursor: "pointer",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
      color: theme.colors.primaryColor[0],
    },
  },
}));

function AdvencedPlanCard() {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="md" p="md" withBorder>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        sx={{ padding: "2rem" }}
      >
        <Text size={26} weight={600}>
          Advenced
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
          400$
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={<AiFillCheckCircle size={25} color="4FD1C5" />}
        >
          <List.Item>5 Applys</List.Item>
          <List.Item>Live Support 24/7</List.Item>
          <List.Item>Language courses</List.Item>
          <List.Item>Help with paper work</List.Item>
          <List.Item>Help with housing</List.Item>
        </List>
        <Button className={classes.button}>Select The Plan</Button>
      </Flex>
    </Paper>
  );
}

export default AdvencedPlanCard;
