import { Container, List, Button, Flex, createStyles } from "@mantine/core";
import AnchorTag from "../Hero/AnchorTag";

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

function Navbar() {
  const { classes } = useStyles();

  return (
    <Flex
      mih={80}
      align="center"
      wrap="wrap"
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
      sx={{ minHeight: "10vh" }}
    >
      <Container>
        <img src={"/cursusLogo.png"} alt="logo" />
      </Container>
      <Container>
        <List sx={{ listStyleType: "none" }}>
          <Flex
            mih={50}
            align="center"
            wrap="wrap"
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "sm", sm: "lg" }}
            justify={{ sm: "center" }}
          >
            <List.Item>
              <AnchorTag link="Home" />
            </List.Item>
            <List.Item>
              <AnchorTag link="Programs" />
            </List.Item>
            <List.Item>
              <AnchorTag link="Pricing" />
            </List.Item>
            <List.Item>
              <AnchorTag link="Contact" />
            </List.Item>
          </Flex>
        </List>
      </Container>
      <Container>
        <Flex
          mih={50}
          align="center"
          wrap="wrap"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
        >
          <Button
            color="teal"
            variant="subtle"
            className={classes.memberButton}
          >
            Login
          </Button>
          <Button className={classes.button}>Become a member</Button>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Navbar;
