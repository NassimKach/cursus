import {
  Flex,
  Text,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  createStyles,
  Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";

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

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password should have at least 6 letters" }),
});

function SignIn() {
  const { classes } = useStyles();

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });

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
      <Box sx={{ width: "100%" }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            placeholder="Email"
            radius="sm"
            size="lg"
            sx={{ width: "100%", marginBottom: "1rem" }}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            size="lg"
            radius="sm"
            withAsterisk
            sx={{ width: "100%", marginBottom: "1rem" }}
            {...form.getInputProps("password")}
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
          <Button
            type="submit"
            className={classes.button}
            sx={{ width: "100%", margin: "1rem 0" }}
          >
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
        </form>
      </Box>
    </Flex>
  );
}

export default SignIn;
