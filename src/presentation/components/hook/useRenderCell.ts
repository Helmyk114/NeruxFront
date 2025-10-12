import { useCallback } from "react";

type ColumnRenderMap<DataType> = {
  [key: string]: (item: DataType) => React.ReactNode;
};

export const useRenderCell = <DataType>(
  columnRenderMap: ColumnRenderMap<DataType>
) => {
  const renderCell = useCallback(
    (item: DataType, columnKey: React.Key) => {
      const renderFunction = columnRenderMap[columnKey as string];
      if (renderFunction) {
        return renderFunction(item);
      }
      console.warn(
        `No render function defined for column: ${String(columnKey)}`
      );
      return null;
    },
    [columnRenderMap]
  );

  return { renderCell };
};
