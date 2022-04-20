import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({count,page,handleChangePage,rowsPerPage,handleChangeRowsPerPage}) {
  

  

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
