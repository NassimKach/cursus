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

function ApplyCard({ img }: { img: any }) {
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
          <Image src={`/${img}`} height={160} alt="Norway" />
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
