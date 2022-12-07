import {
  Title,
  Paper,
  Flex,
  Checkbox,
  MultiSelect,
  Select,
  RangeSlider,
  createStyles,
  Text,
  Switch,
  Button,
} from "@mantine/core";
import { countries, specializations } from "./data";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  button: {
    background: theme.colors.secondaryColor[0],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.secondaryColor[1],
    },
  },
}));

function ProgramFilter() {
  return (
    <Paper
      shadow="sm"
      radius="md"
      p="md"
      sx={{ maxWidth: "50vh", padding: "2rem", flex: 1 }}
    >
      <Flex
        mih={50}
        gap="lg"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Title size={20}>Filter</Title>
        {/* Degree Level */}
        <Checkbox.Group
          orientation="vertical"
          label="Degree Level"
          spacing="xs"
        >
          <Checkbox
            value="A Level"
            label="A Level"
            color="cyan"
            // onChange={handleChange}
          />
          <Checkbox value="Bachelor" label="Bachelor" color="cyan" />
          <Checkbox value="Diploma" label="Diploma" color="cyan" />
          <Checkbox
            value="International year one"
            label="International year one"
            color="cyan"
          />
          <Checkbox value="Master" label="Master" color="cyan" />
          <Checkbox value="PHD/Doctorate" label="PHD/Doctorate" color="cyan" />
        </Checkbox.Group>
        {/* Program Location */}
        <MultiSelect
          data={countries}
          label="Program Location"
          placeholder="Pick all that you like"
          searchable
          nothingFound="Nothing found"
        />
        {/* Specializations */}
        <Select
          label="Your specializations"
          placeholder="Pick your specializations"
          searchable
          nothingFound="No options"
          data={specializations}
        />
        {/* Study Language */}
        <Checkbox.Group
          orientation="vertical"
          label="Study Language"
          spacing="xs"
        >
          <Checkbox value="English" label="English" color="cyan" />
          <Checkbox value="German" label="German" color="cyan" />
          <Checkbox value="French" label="French" color="cyan" />
          <Checkbox value="Dutch" label="Dutch" color="cyan" />
          <Checkbox value="Spanish" label="Spanish" color="cyan" />
          <Checkbox value="Arabic" label="Arabic" color="cyan" />
        </Checkbox.Group>
        {/* Tuition Fees */}
        <Text size="sm" weight={500}>
          Tuition Fees
        </Text>
        <RangeSlider
          step={1000}
          labelAlwaysOn
          min={0}
          max={10000}
          label={(value) => `${value} $`}
          thumbSize={14}
          color="cyan"
          sx={{ width: "100%" }}
        />
        {/* English  Requirements */}
        <Switch
          label="Show only programs don't require English tests"
          color="cyan"
        />
      </Flex>
    </Paper>
  );
}

export default ProgramFilter;
