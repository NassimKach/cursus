import { Box, List, Button, Flex, createStyles, Burger } from "@mantine/core";
import { NavLink } from "react-router-dom";
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

  burger: {
    display: "none",
  },
  isClosed: {
    display: "none",
  },
  isOpen: {
    display: "block",
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

const isOpen = {
  display: "block",
};

const isClosed = {
  display: "none",
};

function Navbar({ position }: { position: any }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  console.log(opened);
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
        direction={{ lg: "row", sm: "column" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={"space-between"}
        sx={{
          margin: "0 auto",
          padding: "0 20px",
          width: "90%",
        }}
      >
        <NavLink to={"/"}>
          <img src={"/cursusLogo.png"} alt="logo" />
        </NavLink>

        <List sx={{ listStyleType: "none" }}>
          <Flex
            mih={50}
            align="center"
            wrap="wrap"
            direction="row"
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

        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          className={classes.burger}
          sx={{
            margin: 0,
            padding: 0,
            position: "fixed",
            top: "0",
            right: "20px",
            zIndex: 1000,
            transform: "translateY(50%)",
          }}
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
