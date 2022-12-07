import {
  TextInput,
  Flex,
  Title,
  Button,
  createStyles,
  Text,
  Box,
  Paper,
} from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },

  memberButton: {
    cursor: "pointer",
    color: theme.colors.secondaryColor[0],
  },
}));

function SubscribeInput() {
  const { classes } = useStyles();
  //check if the email is valid
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Paper
      radius="md"
      p="sm"
      sx={{
        width: "90%",
        margin: "10rem auto",
        border: "0.2px solid #eaeaea",
        position: "absolute",
        transform: "translateY(-150%) translateX(5%)",
      }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="space-around"
        align="center"
        direction="row"
        wrap="wrap"
        sx={{ padding: "2rem 0" }}
      >
        <Title>
          Subscribe For Lastet <br /> Newsletter
        </Title>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            error={error}
            required
            variant="filled"
            sx={{
              width: "350px",
              flex: "1",
            }}
            rightSection={
              <Button
                className={classes.button}
                onClick={() => {
                  if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    setError(false);
                    setSuccess(true);
                    setEmail("");
                  } else {
                    setError(true);
                    setSuccess(false);
                  }
                }}
              >
                Subscribe
              </Button>
            }
          />
          <Box>
            {success ? (
              <Text
                sx={(theme) => ({
                  color: theme.colors.secondaryColor[0],
                })}
              >
                Thank you for subscribing to our newsletter
              </Text>
            ) : error ? (
              <Text
                sx={(theme) => ({
                  color: theme.colors.errorColor[0],
                })}
              >
                Please enter a valid email
              </Text>
            ) : (
              ""
            )}
          </Box>
        </Flex>
      </Flex>
    </Paper>
  );
}

export default SubscribeInput;
