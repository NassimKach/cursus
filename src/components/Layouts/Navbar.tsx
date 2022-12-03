import { Box, List, Button, Flex, createStyles } from "@mantine/core";
import { NavLink } from "react-router-dom";

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

const activeStyle = {
  color: "#4FD1C5",
  textDecoration: "none",
  fontWeight: "bold",
};

const linkStyle = {
  color: "#262626",
  textDecoration: "none",
};

function Navbar({ position }: { position: any }) {
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        position: position,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: "1px solid #E2E8F0",
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex
        mih={60}
        align="center"
        wrap="wrap"
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={"space-evenly"}
      >
        <NavLink to={"/"}>
          <img src={"/cursusLogo.png"} alt="logo" />
        </NavLink>

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
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                to={"/"}
              >
                Home
              </NavLink>
              <div className="activeStyle"></div>
            </List.Item>

            <List.Item>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                to={"/programs"}
              >
                Programs
              </NavLink>
            </List.Item>

            <List.Item>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                to={"/pricing"}
              >
                Pricing
              </NavLink>
            </List.Item>

            <List.Item>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </List.Item>
          </Flex>
        </List>

        <Flex
          mih={50}
          align="center"
          wrap="wrap"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
        >
          <NavLink to={"/login"}>
            <Button
              color="teal"
              variant="subtle"
              className={classes.memberButton}
            >
              Login
            </Button>
          </NavLink>
          <NavLink to={"/signup"}>
            <Button className={classes.button}>Become a member</Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
