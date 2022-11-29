import Lottie from "react-lottie";
import ErrorPage from "../components/data/404-error.json";
import { Button, Title, Text, Flex, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ErrorPage,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = createStyles((theme) => ({
  button: {
    background: "transparent",
    border: `1px solid ${theme.colors.secondaryColor[0]}`,
    color: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[0],
      color: theme.colors.primaryColor[0],
    },
  },
}));

function NotFound() {
  const { classes } = useStyles();
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      wrap="wrap"
      style={{ height: "100vh", width: "80vw", margin: "auto" }}
    >
      <Flex direction="column" gap={"1rem"} sx={{ width: "50vw" }}>
        <Title>Something is not right...</Title>
        <Text color="dimmed" size="lg">
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </Text>
        <Link to={"/"}>
          <Button
            size="md"
            mt="xl"
            sx={{ alignSelf: "flex-start" }}
            className={classes.button}
          >
            Get back to home page
          </Button>
        </Link>
      </Flex>
      <Lottie options={defaultOptions} width={400} />;
    </Flex>
  );
}

export default NotFound;
