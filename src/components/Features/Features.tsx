import {
  Flex,
  Title,
  Text,
  SimpleGrid,
  MediaQuery,
  Button,
  createStyles,
} from "@mantine/core";
import FeaturesCard from "./FeaturesCard";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

function Features() {
  const { classes } = useStyles();
  return (
    <Flex
      mih={50}
      gap="md"
      justify="space-around"
      align="center"
      direction="row"
      wrap="wrap"
      sx={{ width: "90%", margin: "10rem auto" }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
        sx={{ maxWidth: "50%" }}
      >
        <MediaQuery
          query="(max-width: 1210px)"
          styles={{
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Title align="left" order={1} size={30} weight={800}>
            It's more than work. <br />
            It's a way of working together.
          </Title>
        </MediaQuery>
        <MediaQuery
          query="(max-width: 1210px)"
          styles={{
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Text weight={300} size="lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            aliquam quas reprehenderit officiis assumenda mollitia tempore
            provident accusamus? Minima modi voluptas vitae a ex! Eaque,
          </Text>
        </MediaQuery>
        <MediaQuery
          query="(max-width: 1210px)"
          styles={{
            alignSelf: "center",
          }}
        >
          <Link to={"/programs"}>
            <Button className={classes.button}>Explore our programs</Button>
          </Link>
        </MediaQuery>
      </Flex>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <SimpleGrid cols={2} sx={{ margin: "1rem" }}>
          <FeaturesCard
            icon="Icons/icon1.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam"
            title="Multilingual 
Content"
          />
          <FeaturesCard
            icon="Icons/icon2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam"
            title="Friendly"
          />
          <FeaturesCard
            icon="Icons/icon3.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam "
            title="Visa/Docs 
        Assistance"
          />
          <FeaturesCard
            icon="Icons/icon4.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam "
            title="Smooth Process"
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Features;
