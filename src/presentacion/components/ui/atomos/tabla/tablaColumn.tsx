import { TableColumn } from "@nextui-org/react";


interface TablaColumnProps {
    children: React.ReactNode;
    key: string;
  }

  const TablaColumn: React.FC<TablaColumnProps> = ({ children, key }) => {
    return <TableColumn key={key}>{children}</TableColumn>;
  };
  
  export default TablaColumn;