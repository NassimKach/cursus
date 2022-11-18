import {
  Box,
  Title,
  Text,
  Flex,
  Button,
  createStyles,
  Image,
} from "@mantine/core";
import { BsFillTelephoneFill } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

function Speak() {
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        background: "rgba(79, 209, 197, 0.14)",
      }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="space-around"
        align="center"
        direction="row"
        wrap="wrap"
        sx={{
          margin: "auto",
          padding: "2rem 0",
        }}
      >
        <Image src="/call-img.png" width={"400px"} />
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          sx={{ maxWidth: "50vw" }}
        >
          <Title align="center">Are you willing to study abroad?</Title>
          <Text align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dictum
            nulla nullam amet morbi eros id fringilla. Sed quis morbi dictum
            aliquam tristique quis euismod id. Libero
          </Text>
          <Button leftIcon={<BsFillTelephoneFill />} className={classes.button}>
            Speak with Expert
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Speak;
