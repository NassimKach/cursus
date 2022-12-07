import Navbar from "../components/Layouts/Navbar";
import ProgramsBg from "../components/ProgramsHeader/ProgramsBg";
import ProgramFilter from "../components/Programs/ProgramFilter";
import FilterSearch from "../components/Programs/FilterSearch";
import ProgramCard from "../components/Programs/ProgramCard";
import { Flex, Grid } from "@mantine/core";
import { universities } from "../components/Programs/data";
import Fuse from "fuse.js";
import { useState } from "react";
import { NavigationProgress } from "@mantine/nprogress";
import slugify from "slugify";

function ProgramsPage() {
  const [search, setSearch] = useState("");

  const fuse = new Fuse(universities, {
    keys: ["name", "country", "degree", "fees", "university"],
    threshold: 0.3,
  });
  const results = fuse.search(search);
  const filtered = search ? results.map((result) => result.item) : universities;

  const handleOnSearch = (val: string) => {
    setSearch(val);
  };

  return (
    <>
      <NavigationProgress />
      <Navbar />
      <ProgramsBg />
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        sx={{ width: "90%", margin: "auto", padding: "2rem 0" }}
      >
        <ProgramFilter />
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
          sx={{ flex: 1 }}
        >
          <FilterSearch setVal={handleOnSearch} value={search} />
          <Grid sx={{ width: "100%" }}>
            {filtered.map((university, index) => (
              <Grid.Col lg={4} md={6} sm={12}>
                <ProgramCard
                  {...university}
                  key={index}
                  url={slugify(university.name, { lower: true })}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export default ProgramsPage;
