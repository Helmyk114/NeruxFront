import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";
import { useRenderCell } from "../../../hook/RenderCell";
import React from "react";

interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
}

interface ColumnRender<T> {
  [key: string]: (item: T) => React.ReactNode
}

interface TableProps<T extends object> {
  tabla: string;
  columnas: Column[];
  columnRender: ColumnRender<T>;
  data: T[];
  getKey: (item: T) => string;
}

export default function TableSimple<T extends object>({
  tabla,
  columnas,
  columnRender,
  data,
  getKey,
}: TableProps<T>): JSX.Element {

  const { renderCell } = useRenderCell(columnRender);

  return (
    <Table aria-label={`Tabla de ${tabla}`}>
      <TableHeader columns={columnas}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={getKey(item)}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey) as React.ReactNode}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
