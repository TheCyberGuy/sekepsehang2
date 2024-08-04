import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
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
  Button,
  Input,
  Box,
  HStack,
  Text,
  useBreakpointValue,
  Stack,
  Card,
  CardBody,
  Heading
} from "@chakra-ui/react";


const columnHelper = createColumnHelper();

const faultFilter = (row, columnId, value, addMeta) => {
  const itemValue = row.getValue(columnId);
  
  if (itemValue.toLowerCase() === value.toLowerCase()) {
    return true;
  }
  
  if (value === '') {
    return true;
  }
  
  return itemValue
    .toString()
    .toLowerCase()
    .includes(value.toLowerCase());
};

const columns = [
  columnHelper.accessor("type", {
    header: "Tipus",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("fault", {
    header: "Hiba",
    cell: (info) => info.getValue(),
    filterFn: faultFilter,
  }),
  columnHelper.accessor("price", {
    header: "Ár",
    cell: (info) => info.renderValue(),
  }),
];

const MonitorTaskTable = (props) => {
  const [data] = useState(() => [...props.DATA]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex border={{base: 'none', lg: '1px solid black'}} borderRadius={{base: 'none', lg: 'md'}} p={{base: 0, lg: 1}} boxShadow={{base: 'none', lg: 'md'}} flexDir={"column"}>
      <Heading display={{base: 'none', lg: 'block'}} textAlign={'center'}>{props.heading}</Heading>
      <Input
        mt={1}
        value={globalFilter ?? ''}
        display={isMobile ? 'block' : 'none'}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Keresés típus vagy hiba alapján"
        mb={4}
      />
      {isMobile ? (
        <Stack spacing={4}>
          {table.getRowModel().rows.map((row) => (
            <Card key={row.id}>
              <CardBody>
                {row.getVisibleCells().map((cell) => (
                  <Text key={cell.id}>
                    <strong>{cell.column.columnDef.header}: </strong>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Text>
                ))}
              </CardBody>
            </Card>
          ))}
        </Stack>
      ) : (
        <TableContainer overflowX="auto">
          <Table variant="striped">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  <Tr>
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
                  <Tr>
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.column.getCanFilter() ? (
                          <Input
                            value={(header.column.getFilterValue() ?? '')}
                            onChange={(e) =>
                              header.column.setFilterValue(e.target.value)
                            }
                            placeholder={`Search ${header.column.columnDef.header}`}
                            size="sm"
                          />
                        ) : null}
                      </Th>
                    ))}
                  </Tr>
                </React.Fragment>
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
      )}
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        width="full"
        alignItems="center"
        gap={2}
        fontSize="xs"
        mt={4}
      >
        <HStack spacing={2} width="full" justifyContent="center">
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
          <Text>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </Text>
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