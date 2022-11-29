import {
  Center,
  Text,
  Box,
  Flex,
  Button,
  createStyles,
  Title,
  MediaQuery,
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

function Hero() {
  const { classes } = useStyles();
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(26, 32, 44, 0.6), rgba(26, 32, 44, 0.6)), url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Center style={{ minHeight: "100vh" }}>
            <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <MediaQuery
                query="(max-width: 1200px)"
                styles={{
                  fontSize: 40,
                }}
              >
                <Title
                  align="center"
                  order={1}
                  size={60}
                  sx={(theme) => ({
                    color: theme.colors.primaryColor[0],
                  })}
                  transform="uppercase"
                >
                  brilliant future <br /> with brilliant education
                </Title>
              </MediaQuery>
              <Text ta="center" color="#fff" weight={300} size="lg">
                BackgroundImage component can be used to add any content on
                image.
              </Text>
              <Button className={classes.button}>Learn More</Button>
            </Flex>
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
