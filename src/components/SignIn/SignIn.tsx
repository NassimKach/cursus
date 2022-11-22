import {
  Flex,
  Text,
  Input,
  PasswordInput,
  Checkbox,
  Button,
  createStyles,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

const linkStyle = {
  textDecoration: "none",
  color: "#262626",
};

function SignIn() {
  const { classes } = useStyles();

  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
      sx={{ width: "40%", height: "100vh", margin: "auto" }}
    >
      <Link style={linkStyle} to={"/"}>
        <Text size={60} weight={700}>
          Cursus
        </Text>
      </Link>
      <Input
        placeholder="Email"
        radius="sm"
        size="lg"
        sx={{ width: "100%" }}
        required
      />
      <PasswordInput
        placeholder="Password"
        size="lg"
        radius="sm"
        withAsterisk
        sx={{ width: "100%" }}
      />
      <Flex
        justify={"space-between"}
        align="center"
        direction="row"
        wrap="wrap"
        sx={{ width: "100%" }}
      >
        <Checkbox label="Remember me" />
        <Text
          sx={(theme) => ({
            color: theme.colors.secondaryColor[0],
          })}
        >
          Forgot Password?
        </Text>
      </Flex>
      <Button className={classes.button} sx={{ width: "100%" }}>
        Sign In
      </Button>
      <Flex gap={10}>
        <Text>Don't have an account?</Text>
        <Link style={linkStyle} to={"/signup"}>
          <Text
            sx={(theme) => ({
              color: theme.colors.secondaryColor[0],
            })}
          >
            Sign Up
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default SignIn;
