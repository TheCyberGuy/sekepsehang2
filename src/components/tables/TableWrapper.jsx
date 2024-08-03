import React from "react";

import MonitorTaskTable from "./MonitorTaskTable";

import { SimpleGrid, Divider, Heading } from "@chakra-ui/react";

const TableWrapper = () => {
  return (
    <SimpleGrid px={12} column={1}>
      <Heading textAlign={'center'}>Monitor Javítások</Heading>
      <MonitorTaskTable />
      <Divider my={3} />
      <Heading textAlign={'center'}>Monitor Javítások</Heading>
      <MonitorTaskTable />
      <Divider my={3} />
      <Heading textAlign={'center'}>Monitor Javítások</Heading>
      <MonitorTaskTable />
    </SimpleGrid>
  );
};

export default TableWrapper;
