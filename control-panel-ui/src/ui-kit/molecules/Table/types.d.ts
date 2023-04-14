interface IColumnConfig<T> {
  title: string;
  id: keyof T;
  render?: (value: T[keyof T], rowData: T) => React.ReactNode;
}
