import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    color: theme.colors.primaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

export default function Contact() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      message: (value) => value.trim().length < 10,
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Flex
      align="center"
      justify="center"
      sx={{ width: "90%", height: "100vh", margin: "auto" }}
    >
      <form>
        <Title order={2} size="h1" weight={900} align="center">
          Get in touch
        </Title>

        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group position="center" mt="xl">
          <Button size="md" className={classes.button}>
            Send message
          </Button>
        </Group>
      </form>
    </Flex>
  );
}
