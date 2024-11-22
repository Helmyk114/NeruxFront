import { TableRow as NextUITableRow, TableCell } from "@nextui-org/react";

interface RowData {
    key: string;
    name: string;
    role: string;
    status: string;
  }
  
  const TableRows = ({ rows }: { rows: RowData[] }) => {
    return (
      <>
        {rows.map((row) => (
          <NextUITableRow key={row.key}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.status}</TableCell>
          </NextUITableRow>
        ))}
      </>
    );
  };
  
  export default TableRows;