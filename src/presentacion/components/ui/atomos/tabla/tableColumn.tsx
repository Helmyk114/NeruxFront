
import { TableColumn as NextUITableColumn } from "@nextui-org/react";

interface TableColumnProps {
  children: React.ReactNode;
}

const TableColumn: React.FC<TableColumnProps> = ({ children }) => {
  return <NextUITableColumn>{children}</NextUITableColumn>;
};

export default TableColumn;
