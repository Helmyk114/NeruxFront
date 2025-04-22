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
import { TopContent } from "./topContent";

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
  onclick?: () => void;
  columnas: Column[];
  columnRender: ColumnRender<T>;
  data: T[];
  getRowKey: (item: T) => string | number;
  isLoading?: boolean;
  error?: string;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  totalItems: number;
  setPageSize: (size: number) => void;
}

export function TableSimple<T extends object>({
  tabla,
  onclick,
  columnas,
  columnRender,
  data,
  getRowKey,
  isLoading = false,
  error,
  page,
  totalPages,
  setPage,
  totalItems,
  setPageSize,
}: TableProps<T>): JSX.Element {
  const { renderCell } = useRenderCell(columnRender);

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setPage(1);
  };

  return (
    <Table
      aria-label={`Tabla de ${tabla}`}
      selectionMode="multiple"
      topContent={
        <TopContent
          totalItems={totalItems}
          texto={tabla}
          handleRowsPerPageChange={handleRowsPerPageChange}
          onclick={onclick}
        />
      }
      topContentPlacement="outside"
      bottomContent={
        <Paginacion page={page} setPage={setPage} total={totalPages} />
      }
      bottomContentPlacement="outside"
    >
      <TableHeader columns={columnas}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className="text-base font-bold text-grisFondo"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner label="Cargando..." />}
        items={data}
        emptyContent={error && "No hay datos para mostrar."}
        className=" text-center"
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
