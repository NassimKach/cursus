import { Container, List, Button, Flex, createStyles } from "@mantine/core";
import AnchorTag from "../Hero/AnchorTag";
import { Link } from "react-router-dom";

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

const linkStyle = {
  textDecoration: "none",
};

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
        <Link to={"/"}>
          <img src={"/cursusLogo.png"} alt="logo" />
        </Link>
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
              <Link style={linkStyle} to={"/"}>
                <AnchorTag link="Home" />
              </Link>
            </List.Item>

            <List.Item>
              <Link style={linkStyle} to={"/programs"}>
                <AnchorTag link="Programs" />
              </Link>
            </List.Item>

            <List.Item>
              <Link style={linkStyle} to={"/pricing"}>
                <AnchorTag link="Pricing" />
              </Link>
            </List.Item>

            <List.Item>
              <Link style={linkStyle} to={"/contact"}>
                <AnchorTag link="Contact" />
              </Link>
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
          <Link to={"/login"}>
            <Button
              color="teal"
              variant="subtle"
              className={classes.memberButton}
            >
              Login
            </Button>
          </Link>
          <Link to={"/signup"}>
            <Button className={classes.button}>Become a member</Button>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Navbar;
