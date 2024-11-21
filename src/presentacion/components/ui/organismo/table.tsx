// components/ui/organismos/tabla/Table.tsx
import { Table as NextUITable, TableHeader, TableBody, TableCell} from "@nextui-org/react";

import TableRow from "../moleculas/tabla/tableRow";
import TableColumn from "../atomos/tabla/tableColumn";


interface TableProps {
  headers: string[];
  rows: Array<{ key: string; name: string; role: string; status: string }>;

}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
    return (
        <NextUITable aria-label="Dynamic Table">
        <TableHeader>
          {headers.map((header, index) => (
            <TableColumn key={index}>{header}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
  {rows.map((row, index) => (
    <TableRow key={`row-${index}`} data={row} headers={headers} />
  ))}
      </TableBody>
      </NextUITable>
    );
  };

export default Table;
