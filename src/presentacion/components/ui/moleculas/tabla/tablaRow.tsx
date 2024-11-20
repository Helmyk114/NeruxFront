import React from "react";
import { TableRow, TableCell, User } from "@nextui-org/react";

interface TablaRowProps {
    item: Record<string, any>;
  };
  const getKeyValue = (item: Record<string, any>, columnKey: string) => {
    return item[columnKey];
  };
  const TablaRow: React.FC<TablaRowProps> = ({ item}) => (
    <TableRow key={item.name}>
    {Object.keys(item).map((columnKey) => (
      <TableCell key={columnKey}>
        {getKeyValue(item, columnKey)}
      </TableCell>
    ))}
  </TableRow>
  );
  export default TablaRow;