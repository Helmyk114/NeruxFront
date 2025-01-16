import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useRenderCell } from "../../../hook/UseRenderCell";
import { Paginacion } from "../../atomos";
import { usePagination } from "../../../hook/UsePagination";

interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
}

interface ColumnRender<T> {
  [key: string]: (item: T) => React.ReactNode;
}

interface TableProps<T extends object> {
  tabla: string;
  columnas: Column[];
  columnRender: ColumnRender<T>;
  data: T[];
  getKey: (item: T) => string;
  rowsPerPage: number;
  isLoading?: boolean;
  error?: string;
}

export function TableSimple<T extends object>({
  tabla,
  columnas,
  columnRender,
  data,
  getKey,
  rowsPerPage,
  isLoading = false,
  error,
}: TableProps<T>): JSX.Element {
  const { page, totalPages, currentPageItems, goToPage } = usePagination({
    data,
    rowsPerPage,
  });
  const { renderCell } = useRenderCell(columnRender);

  return (
    <Table
      aria-label={`Tabla de ${tabla}`}
      selectionMode="multiple"
      bottomContent={
        <Paginacion
          page={page}
          setPage={(page) => goToPage(page)}
          total={totalPages}
        />
      }
    >
      <TableHeader columns={columnas}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner label="Cargando..." />}
        items={currentPageItems}
        emptyContent={error || "No hay datos para mostrar."}
      >
        {(item) => (
          <TableRow key={getKey(item)}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey) as React.ReactNode}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
