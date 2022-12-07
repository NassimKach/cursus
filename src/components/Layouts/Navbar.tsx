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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { IconSun, IconMoonStars } from "@tabler/icons";

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
}));

export default function Demo() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
          sx={{ height: "100%", width: "90%", margin: "0 auto" }}
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
            <NavLink to={"/"} className={classes.link}>
              Home
            </NavLink>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            ></HoverCard>
            <NavLink to={"/programs"} className={classes.link}>
              Programs
            </NavLink>
            <NavLink to={"/pricing"} className={classes.link}>
              Pricing
            </NavLink>
            <NavLink to={"/contact"} className={classes.link}>
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
