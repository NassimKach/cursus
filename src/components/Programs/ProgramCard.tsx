import {
  Card,
  Box,
  Text,
  Badge,
  Button,
  Avatar,
  Flex,
  createStyles,
} from "@mantine/core";
import { GiPositionMarker } from "react-icons/gi";
import slugify from "slugify";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    color: theme.colors.primaryColor[0],
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[0],
    },
  },
}));

const linkStyle = {
  textDecoration: "none",
  width: "100%",
};

function ProgramCard({
  name,
  country,
  degree,
  fees,
  logo,
  university,
  url,
}: {
  name: string;
  country: string;
  degree: string;
  fees: number;
  logo: string;
  university: string;
  url: any;
}) {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{ flex: "1 0 250px" }}>
      <Card.Section>
        <Box
          sx={{
            background: `url(${university})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "150px",
          }}
        >
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-end"
            direction="row"
            wrap="wrap"
            sx={{ height: "100%", padding: "1rem" }}
          >
            <Avatar src={logo} radius="xl" />
          </Flex>
        </Box>
      </Card.Section>

      <Flex
        gap=".5rem"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
        sx={{ padding: ".5rem 0" }}
      >
        <Badge variant="light">{degree}</Badge>
        <Flex>
          <GiPositionMarker color="#4FD1C5" />
          <Text size={12}>{country}</Text>
        </Flex>
        <Text weight={600}>{name}</Text>
        <Flex>
          <Text
            weight={400}
            sx={(theme) => ({
              paddingRight: "0.5rem",
              color: theme.colors.secondaryColor[0],
            })}
          >
            {fees} $
          </Text>
          <Text>year</Text>
        </Flex>
        <Link to={url} style={linkStyle}>
          <Button fullWidth radius="md" className={classes.button}>
            Read More
          </Button>
        </Link>
      </Flex>
    </Card>
  );
}

export default ProgramCard;
