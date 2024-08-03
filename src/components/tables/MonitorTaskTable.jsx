import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableCaption,
  Button,
  Select,
  Input,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";

import DATA from "../../data/monitordata";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("type", {
    header: () => "Tipus",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("fault", {
    header: () => "Hiba",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: () => "Ár",
    cell: (info) => info.renderValue(),
  }),
];

const MonitorTaskTable = () => {
  const [data] = useState(() => [...DATA]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getPaginationRowModel: getPaginationRowModel(),
  });


  return (
    <Flex flexDir={"column"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        width="full"
        alignItems="center"
        gap={2}
        fontSize="xs"
      >
        <HStack spacing={2}>
          <Button
            onClick={() => table.setPageIndex(0)}
            isDisabled={!table.getCanPreviousPage()}
            rounded="md"
            p={1}
            bg={!table.getCanPreviousPage() ? "gray.100" : "gray.200"}
            _hover={{ bg: table.getCanPreviousPage() ? "gray.300" : undefined }}
          >
            <Text fontSize="lg">{"<<"}</Text>
          </Button>
          <Button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
            rounded="md"
            p={1}
            bg={!table.getCanPreviousPage() ? "gray.100" : "gray.200"}
            _hover={{ bg: table.getCanPreviousPage() ? "gray.300" : undefined }}
          >
            <Text fontSize="lg">{"<"}</Text>
          </Button>
          <HStack spacing={1} alignItems="center">
            <Input
              min={1}
              max={table.getPageCount()}
              type="number"
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              borderColor="gray.200"
              p={1}
              rounded="md"
              width="10"
            />
            <Text>de {table.getPageCount()}</Text>
          </HStack>
          <Button
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
            rounded="md"
            p={1}
            bg={!table.getCanNextPage() ? "gray.100" : "gray.200"}
            _hover={{ bg: table.getCanNextPage() ? "gray.300" : undefined }}
          >
            <Text fontSize="lg">{">"}</Text>
          </Button>
          <Button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            isDisabled={!table.getCanNextPage()}
            rounded="md"
            p={1}
            bg={!table.getCanNextPage() ? "gray.100" : "gray.200"}
            _hover={{ bg: table.getCanNextPage() ? "gray.300" : undefined }}
          >
            <Text fontSize="lg">{">>"}</Text>
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default MonitorTaskTable;
