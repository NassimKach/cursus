import {
  createStyles,
  Header,
  HoverCard,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  Flex,
  ScrollArea,
  useMantineColorScheme,
  ActionIcon,
  Group,
  Title,
  Menu,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { IconSun, IconMoonStars, IconPinned, IconTrash } from "@tabler/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

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

  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  navLink: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  activeStyle: {
    color: theme.colors.secondaryColor[0],
    textDecoration: "none",
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.secondaryColor[0],
      width: "50%",
      height: 2,
      marginTop: theme.spacing.sm,
      position: "absolute",
      bottom: "25%",
      left: "25%",
    },
  },
}));

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { favoriteList }: { favoriteList: any } = useSelector(
    (state: RootState) => state.list
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease-in-out",
      }}
    >
      <Header height={"10vh"} px="md">
        <Flex
          align="center"
          justify="space-between"
          sx={{ height: "100%", width: "85%", margin: "0 auto" }}
        >
          <Title>
            <NavLink to={"/"} className={classes.navLink}>
              Cursus
            </NavLink>
          </Title>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.activeStyle : classes.link
              }
            >
              Home
            </NavLink>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            ></HoverCard>
            <NavLink
              to={"/programs"}
              className={({ isActive }) =>
                isActive ? classes.activeStyle : classes.link
              }
            >
              Programs
            </NavLink>
            <NavLink
              to={"/pricing"}
              className={({ isActive }) =>
                isActive ? classes.activeStyle : classes.link
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? classes.activeStyle : classes.link
              }
            >
              Contact
            </NavLink>
          </Group>

          <Group className={classes.hiddenMobile}>
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
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon>
                  <IconPinned />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Favorites programs</Menu.Label>
                {favoriteList.map((item: any) => {
                  return (
                    <Menu.Item>
                      <Flex
                        direction="row"
                        align="center"
                        justify={"space-between"}
                      >
                        <div
                          style={{
                            width: "30px",
                          }}
                        >
                          <Image
                            radius="md"
                            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            alt="Random unsplash image"
                          />
                        </div>
                        <Text>{item}</Text>
                        <ActionIcon>
                          <IconTrash />
                        </ActionIcon>
                      </Flex>
                    </Menu.Item>
                  );
                })}
              </Menu.Dropdown>
            </Menu>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Flex>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Cursus"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <NavLink to={"/"} className={classes.link}>
            Home
          </NavLink>

          <NavLink to={"/programs"} className={classes.link}>
            Programs
          </NavLink>
          <NavLink to={"/pricing"} className={classes.link}>
            Pricing
          </NavLink>
          <NavLink to={"/contact"} className={classes.link}>
            Contact
          </NavLink>
          <Group position="center" grow pb="xl" px="md">
            <NavLink to={"/login"}>
              <Button
                color="teal"
                variant="subtle"
                className={classes.memberButton}
                sx={{ width: "100%" }}
              >
                Login
              </Button>
            </NavLink>
            <NavLink to={"/signup"}>
              <Button className={classes.button} sx={{ width: "100%" }}>
                Become a member
              </Button>
            </NavLink>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
