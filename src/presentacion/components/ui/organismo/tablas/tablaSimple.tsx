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
import { useRenderCell } from "../../../hook/RenderCell";

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
  isLoading?: boolean;
}

export default function TableSimple<T extends object>({
  tabla,
  columnas,
  columnRender,
  data,
  getKey,
  isLoading = false,
}: TableProps<T>): JSX.Element {
  const { renderCell } = useRenderCell(columnRender);

  return (
    <Table aria-label={`Tabla de ${tabla}`} selectionMode="multiple">
      <TableHeader columns={columnas}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner label="Cargando..." />}
        items={data}
        emptyContent="No hay datos para mostrar."
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
