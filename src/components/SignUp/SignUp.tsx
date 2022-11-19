import {
  Flex,
  Image,
  Text,
  Box,
  Title,
  Input,
  PasswordInput,
  Button,
  createStyles,
} from "@mantine/core";
import { AiOutlineArrowLeft } from "react-icons/ai";

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

function SignUp() {
  const { classes } = useStyles();

  return (
    <Box sx={{ maxWidth: "100vw", maxHeight: "100vh" }}>
      <Flex>
        <Image
          src="student-bg.jpg"
          alt="Student Image"
          height={"100vh"}
          sx={{ flex: 1 }}
        />

        <Flex
          gap={"1rem"}
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          sx={{ flex: 1, padding: "2rem 6rem", width: "100vw" }}
        >
          <Flex
            align="Flex-start"
            direction="row"
            wrap="wrap"
            justify={"space-between"}
            sx={{ width: "100%" }}
          >
            <AiOutlineArrowLeft />
            <Flex gap={6}>
              <Text>A member?</Text>
              <Text
                sx={(theme) => ({
                  color: theme.colors.secondaryColor[0],
                })}
              >
                Sign Up
              </Text>
            </Flex>
          </Flex>
          <Title sx={{ padding: "1rem 0" }}>Create An Account</Title>
          <Input
            placeholder="First Name"
            radius="sm"
            size="lg"
            sx={{ width: "100%" }}
            required
          />
          <Input
            placeholder="Last Name"
            radius="sm"
            size="lg"
            sx={{ width: "100%" }}
            required
          />
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
          <PasswordInput
            placeholder="Confirm your Password"
            size="lg"
            radius="sm"
            withAsterisk
            sx={{ width: "100%" }}
          />
          <Button className={classes.button}>Sign Up</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SignUp;
