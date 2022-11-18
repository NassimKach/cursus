import { TextInput, Button, createStyles } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[0],
    },
  },
}));

function FilterSearch({
  value,
  setVal,
}: {
  value: string;
  setVal: (val: string) => void;
}) {
  const { classes } = useStyles();

  return (
    <TextInput
      placeholder="Search"
      size="lg"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => setVal(e.currentTarget.value)}
      rightSection={
        <Button className={classes.button} sx={{ height: "100%" }}>
          <BsSearch width={200} />
        </Button>
      }
    />
  );
}

export default FilterSearch;
