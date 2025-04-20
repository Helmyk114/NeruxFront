export interface ColumnRender<T> {
  [key: string]: (item: T) => JSX.Element;
};