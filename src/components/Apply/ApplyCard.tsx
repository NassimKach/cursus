import {
  Text,
  Flex,
  Divider,
  Button,
  Card,
  Image,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

function ApplyCard() {
  const { classes } = useStyles();

  return (
    <>
      <Card
        shadow="sm"
        p="lg"
        radius="sm"
        sx={{
          minWidth: "20vw",

          position: "absolute",
          top: "20%",
          right: "5%",
        }}
      >
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Flex
          align="flex-start"
          justify="center"
          direction="column"
          sx={{ paddingTop: "1rem" }}
        >
          <Text weight={400}>Tuision Fees</Text>

          <Text
            size="sm"
            weight={600}
            sx={(theme) => ({
              color: theme.colors.secondaryColor[0],
            })}
          >
            $1000
          </Text>
        </Flex>
        <Divider my="sm" sx={{ opacity: "50%" }} />
        <Flex align="flex-start" justify="center" direction="column">
          <Text weight={400}>Program duration</Text>

          <Text
            size="sm"
            weight={600}
            sx={(theme) => ({
              color: theme.colors.secondaryColor[0],
            })}
          >
            4 years
          </Text>
        </Flex>
        <Button className={classes.button} fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </>
  );
}

export default ApplyCard;
