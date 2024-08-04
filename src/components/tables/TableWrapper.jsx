import React, { useState } from "react";

import MonitorTaskTable from "./MonitorTaskTable";

import { SimpleGrid, Select, Flex } from "@chakra-ui/react";

import MONDATA from "../../data/monitordata";
import TVDATA from "../../data/tvdata";
import PRINDATA from "../../data/printerdata";

const TableWrapper = () => {
  const [selectedValue, setSelectedValue] = useState("monitor");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <SimpleGrid
        my={3}
        display={{ base: "none", lg: "grid" }}
        px={{ base: 12, lg: 8 }}
        spacing={4}
        columns={{ base: 1, lg: 3 }}
      >
        <MonitorTaskTable DATA={MONDATA} heading={"Monitorok"} />
        <MonitorTaskTable DATA={TVDATA} heading={"TV-k"} />
        <MonitorTaskTable DATA={PRINDATA} heading={"Nyomtatók"} />
      </SimpleGrid>

      <Flex
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        display={{ base: "flex", lg: "none" }}
      >
        <Select
          textAlign={"center"}
          w={"fit-content"}
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="monitor">Monitorok</option>
          <option value="TV">TV-k</option>
          <option value="printer">Nyomtatók</option>
        </Select>
        {selectedValue === "monitor" && (
          <MonitorTaskTable DATA={MONDATA} heading={"monitorok"} />
        )}
        {selectedValue === "TV" && (
          <MonitorTaskTable DATA={TVDATA} heading={"tv-k"} />
        )}
        {selectedValue === "printer" && (
          <MonitorTaskTable DATA={PRINDATA} heading={"Nyomtatók"} />
        )}
      </Flex>
    </>
  );
};

export default TableWrapper;

// <MonitorTaskTable
//           DATA={MONDATA}
//           heading={
//             selectedValue === "monitor"
//               ? "Monitorok"
//               : selectedValue === "TV"
//               ? "TV-k"
//               : "Nyomtatók"
//           }
//         />
