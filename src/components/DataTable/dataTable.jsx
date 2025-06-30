import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function createData(tecnico, unidade, turno, dataVisita) {
    const density = turno / dataVisita;
    return { tecnico, unidade, turno, dataVisita, density };
}

const columns = [
    { id: 'id', label: 'ID', minWidth: 90, align: 'left' },
    { id: 'tecnico', label: 'Técnico', minWidth: 110, align: 'left' },
    { id: 'unidade', label: 'Unidade', minWidth: 160, align: 'left' },
    { id: 'turno', label: 'Turno', minWidth: 170, align: 'left' },
    { id: 'dataVisita', label: 'Data da Visita', minWidth: 170, align: 'left' },
];

export default function DenseTable({ rows }) {

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
        }}>
            <TableContainer
                component={Paper}
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    height: '80%',
                    border: 1
                }}
            >
                <Table stickyHeader size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover key={row.turno} role="checkbox" tabIndex={-1} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}