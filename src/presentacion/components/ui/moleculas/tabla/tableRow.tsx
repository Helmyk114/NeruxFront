import { TableRow as NextUITableRow, TableCell } from "@nextui-org/react";

interface TableRowProps {
  data: Record<string, any>;
  headers: string[];
}

const TableRow: React.FC<TableRowProps> = ({ data, headers }) => {
  return (
    <NextUITableRow>
      {headers.map((header, index) => {
        const key = header.toLowerCase();
        const value = data[key] || "N/A";
        return <TableCell key={index}>{value}</TableCell>;
      })}
    </NextUITableRow>
  );
};

export default TableRow;
