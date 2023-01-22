import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";


const columns = [
  { id: "id", label: "ID", minWidth: 70, align: "center" },
  { id: "firstName", label: "First Name", minWidth: 50, align: "center" },
  {
    id: "lastName",
    label: "Last Name",
    minWidth: 100,
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "salary",
    label: "Salary($)",
    minWidth: 150,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center"
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



const List = ({employees, handleEdit, handleDelete}) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 440 }}
          component={Paper}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth}}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody style={{ backgroundColor: "#1E1E1E" }}>
              {employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employees) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={employees.id}
                    >
                      {columns.map((column) => {
                        const value = employees[column.id];
                        return (
                          <StyledTableCell
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                            {column.label === "Action" ? (
                              <Stack
                                direction="row"
                                spacing={2}
                                style={{
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                  justifyContent: "space-around",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color='error'
                                  startIcon={<DeleteIcon />}
                                  onClick={() => handleDelete(employees.id)}
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="contained"
                                  startIcon={<EditIcon />}
                                  onClick={() => handleEdit(employees.id)}
                                >
                                  Edit
                                </Button>
                              </Stack>
                            ) : null}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: "#1E1E1E" , color: 'white'}}
        />
      </Paper>
    </div>
  );
}

export default List