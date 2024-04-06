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
                        <TableCell align="center">APL</TableCell>
                        <TableCell align="center">GA</TableCell>
                        <TableCell align="center">DF</TableCell>
                        <TableCell align="center">SV</TableCell>
                        <TableCell align="center">W</TableCell>
                        <TableCell align="center">Base</TableCell>
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
                            <TableCell align="center">{rows.APL}</TableCell>
                            <TableCell align="center">{rows.GA}</TableCell>
                            <TableCell align="center">{rows.DF}</TableCell>
                            <TableCell align="center">{rows.SV}</TableCell>
                            <TableCell align="center">{w}</TableCell>
                            <TableCell align="center">{rows.Base}</TableCell>
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
                        <TableCell align="center">A</TableCell>
                        <TableCell align="center">BS WS</TableCell>
                        <TableCell align="center">D</TableCell>
                        <TableCell align="center">Reglas Especiales</TableCell>
                        <TableCell align="center">!</TableCell>
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
                            <TableCell align="center">{row.A}</TableCell>
                            <TableCell align="center">{row.BS_WS}</TableCell>
                            <TableCell align="center">{row.D}</TableCell>
                            <TableCell align="center">{row.Special_Rules.length > 0 ? row.Special_Rules.join(', ') : '-'}</TableCell>
                            <TableCell align="center">{row.Effects.length > 0 ? row.Effects.join(', ') : '-'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export { StatsTable, WeaponTable };