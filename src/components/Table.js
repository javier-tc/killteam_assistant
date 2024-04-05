import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StatsTable(rows, w) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>M</TableCell>
                        <TableCell align="right">APL</TableCell>
                        <TableCell align="right">GA</TableCell>
                        <TableCell align="right">DF</TableCell>
                        <TableCell align="right">SV</TableCell>
                        <TableCell align="right">W</TableCell>
                        <TableCell align="right">Base</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow
                            key={rows.M}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {rows.M}
                            </TableCell>
                            <TableCell align="right">{rows.APL}</TableCell>
                            <TableCell align="right">{rows.GA}</TableCell>
                            <TableCell align="right">{rows.DF}</TableCell>
                            <TableCell align="right">{rows.SV}</TableCell>
                            <TableCell align="right">{w}</TableCell>
                            <TableCell align="right">{rows.Base}</TableCell>
                        </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

function WeaponTable(rows) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">A</TableCell>
                        <TableCell align="right">BS WS</TableCell>
                        <TableCell align="right">D</TableCell>
                        <TableCell align="right">Reglas Especiales</TableCell>
                        <TableCell align="right">!</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.A}</TableCell>
                            <TableCell align="right">{row.BS_WS}</TableCell>
                            <TableCell align="right">{row.D}</TableCell>
                            <TableCell align="right">{/*row.Special_Rules*/}</TableCell>
                            <TableCell align="right">{row.Effects.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export { StatsTable, WeaponTable };