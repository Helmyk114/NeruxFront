import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@heroui/react";
import { useRenderCell } from "../../../hook/UseRenderCell";
import { Paginacion } from "../../atomos";

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
  getRowKey: (item: T) => string | number; 
  isLoading?: boolean;
  error?: string;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function TableSimple<T extends object>({
  tabla,
  columnas,
  columnRender,
  data,
  getRowKey,
  isLoading = false,
  error,
  page,
  totalPages,
  setPage,
}: TableProps<T>): JSX.Element {
 
  const { renderCell } = useRenderCell(columnRender);
  
  return (
    <Table
      aria-label={`Tabla de ${tabla}`}
      selectionMode="multiple"
      bottomContent={
        <Paginacion
          page={page}
          setPage={setPage}
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
        items={data}
        emptyContent={error || "No hay datos para mostrar."}
      >
        {(item) => (
          <TableRow key={getRowKey(item)}>
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
