import { TableCell } from "@nextui-org/react";

interface TablaCellProps {
    children: React.ReactNode;
  }
  
  const TablaCell: React.FC<TablaCellProps> = ({ children }) => {
    return <TableCell>{children}</TableCell>;
  };
  
  export default TablaCell;