import {
  Flex,
  Image,
  Text,
  Box,
  Title,
  PasswordInput,
  TextInput,
  Button,
  createStyles,
} from "@mantine/core";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";

const linkStyle = {
  textDecoration: "none",
};

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    width: "100%",
    height: "3rem",

    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Name should have at least 2 letters" }),
    lastName: z
      .string()
      .min(2, { message: "Name should have at least 2 letters" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password should have at least 6 letters" }),
    retypedPassword: z.string(),
  })
  .refine((data) => data.password === data.retypedPassword, {
    message: "Passwords do not match",
    path: ["retypedPassword"],
  });

function SignUp() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypedPassword: "",
    },
  });

  const { classes } = useStyles();

  return (
    <Box sx={{ maxHeight: "100vh" }}>
      <Flex>
        <Image
          src="student-bg.jpg"
          alt="Student Image"
          height={"100vh"}
          sx={{ flex: 1 }}
        />

        <Flex
          gap={"1rem"}
          justify="flex-start"
          align="center"
          direction="column"
          wrap="wrap"
          sx={{ flex: 1, padding: "1rem 6rem", width: "100vw" }}
        >
          <Flex
            align="Flex-start"
            direction="row"
            wrap="wrap"
            justify={"space-between"}
            sx={{ width: "100%" }}
          >
            <Link style={linkStyle} to={"/"}>
              <AiOutlineArrowLeft />
            </Link>
            <Flex gap={6}>
              <Text>A member?</Text>
              <Link style={linkStyle} to={"/login"}>
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
          <Title sx={{ padding: ".5rem 0" }}>Create An Account</Title>
          <Box sx={{ width: "100%" }}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                placeholder="First Name"
                radius="sm"
                size="md"
                sx={{ width: "100%", marginBottom: "1.2rem" }}
                {...form.getInputProps("firstName")}
              />
              <TextInput
                placeholder="Last Name"
                radius="sm"
                size="md"
                sx={{ width: "100%", marginBottom: "1.2rem" }}
                {...form.getInputProps("lastName")}
              />
              <TextInput
                placeholder="Email"
                withAsterisk
                radius="sm"
                size="md"
                sx={{ width: "100%", marginBottom: "1.2rem" }}
                {...form.getInputProps("email")}
              />
              <PasswordInput
                placeholder="Password"
                size="md"
                radius="sm"
                withAsterisk
                sx={{ width: "100%", marginBottom: "1.2rem" }}
                {...form.getInputProps("password")}
              />
              <PasswordInput
                placeholder="Confirm your Password"
                size="md"
                radius="sm"
                withAsterisk
                sx={{ width: "100%", marginBottom: "1.2rem" }}
                {...form.getInputProps("retypedPassword")}
              />
              <Button type="submit" className={classes.button}>
                Sign In
              </Button>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignUp;
