import { useWindowScroll } from "@mantine/hooks";
import { Affix, Transition, ActionIcon, createStyles } from "@mantine/core";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 600}>
          {(transitionStyles) => (
            <ActionIcon
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              size={40}
              className={classes.icon}
            >
              <BsFillArrowUpCircleFill size={"100%"} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ScrollToTop;
