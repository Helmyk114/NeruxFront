import { useCallback } from "react";

type ColumnRenderMap<DataType> = {
  [key: string]: (item: DataType, columnKey: React.Key) => React.ReactNode;
};

export const useRenderCell = <DataType,>(
  columnRenderMap: ColumnRenderMap<DataType>
) => {
  const renderCell = useCallback(
    (item: DataType, columnKey: React.Key) => {
      const renderFunction = columnRenderMap[columnKey as string];
      if (renderFunction) {
        return renderFunction(item, columnKey);
      }
      return item[columnKey as keyof DataType];
    },
    [columnRenderMap]
  );

  return { renderCell };
};
