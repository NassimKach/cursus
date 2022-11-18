import Navbar from "../components/Layouts/Navbar";
import ProgramsBg from "../components/ProgramsHeader/ProgramsBg";
import ProgramFilter from "../components/Programs/ProgramFilter";
import FilterSearch from "../components/Programs/FilterSearch";
import ProgramCard from "../components/Programs/ProgramCard";
import { Flex } from "@mantine/core";
import { universities } from "../components/Programs/data";
import Fuse from "fuse.js";
import { useState } from "react";

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
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            {filtered.map((university, index) => (
              <ProgramCard {...university} key={index} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProgramsPage;
