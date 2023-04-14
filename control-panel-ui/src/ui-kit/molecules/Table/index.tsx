import React from 'react';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import {
  IconButton,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

interface ITableProps<T> {
  data: T[];
  config: IColumnConfig<T>[];
  onCreate?: (data: T) => void;
  onDelete?: (data: T) => void;
  onEdit?: (data: T) => void;
}

const Table = <T,>({ data, config, onCreate, onDelete, onEdit }: ITableProps<T>): JSX.Element => {
  return (
    <MuiTable>
      <TableHead>
        <TableRow>
          {config.map(({ title }, i) => (
            <TableCell key={`${title}-${i}`}>{title}</TableCell>
          ))}
          {onEdit && <TableCell>Изменить</TableCell>}
          {onCreate && <TableCell>Создать</TableCell>}
          {onDelete && <TableCell>Удалить</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((rowData, i) => (
          <TableRow key={`row-${i}`}>
            {config.map((column, j) => {
              return (
                <TableCell key={`cell-${i}-${j}`}>
                  {column.render
                    ? column.render(rowData[column.id], rowData)
                    : (rowData[column.id] as React.ReactNode)}
                </TableCell>
              );
            })}
            {onEdit && (
              <TableCell>
                <IconButton color='warning' onClick={() => onEdit(rowData)}>
                  <ModeEditOutlineRoundedIcon />
                </IconButton>
              </TableCell>
            )}
            {onCreate && (
              <TableCell>
                <IconButton color='success' onClick={() => onCreate(rowData)}>
                  <AddCircleRoundedIcon />
                </IconButton>
              </TableCell>
            )}
            {onDelete && (
              <TableCell>
                <IconButton color='error' onClick={() => onDelete(rowData)}>
                  <DeleteRoundedIcon />
                </IconButton>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default React.memo(Table) as typeof Table;
