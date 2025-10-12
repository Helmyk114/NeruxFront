export interface ColumnRender<T> {
  [key: string]: (item: T) => JSX.Element;
}

export interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
}