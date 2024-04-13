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
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: '100%',
        border: '1px solid #C3510A',
        "& .MuiTableCell-head": {
          color: "#C3510A",
          backgroundColor: "#1E1E1E",
          borderBottom: '1px solid #C3510A',
          fontWeight: 'bold',
        },
        "& .MuiTableCell-body": {
          color: "#fff",
          backgroundColor: "#363636",
        },
        scrollbarColor: "#C3510A #1E1E1E",
      }}
    >
      <Table
        sx={{
          minWidth: 550,
        }}
        aria-label="simple table"
        size='medium'
        style={{
          backgroundColor: '#363636',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Movement (M)</TableCell>
            <TableCell align="center">Action Point Limit (APL)</TableCell>
            <TableCell align="center">Group Activation (GA)</TableCell>
            <TableCell align="center">Defence (Df)</TableCell>
            <TableCell align="center">Save (Sv)</TableCell>
            <TableCell align="center">Wounds (W)</TableCell>
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
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: '100%',
        border: '1px solid #C3510A',
        "& .MuiTableCell-head": {
          color: "#C3510A",
          backgroundColor: "#1E1E1E",
          borderBottom: '1px solid #C3510A',
          fontWeight: 'bold',
        },
        "& .MuiTableCell-body": {
          color: "#fff",
          backgroundColor: "#363636",
        },
        scrollbarColor: "#C3510A #1E1E1E",
      }}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Attacks (A)</TableCell>
            <TableCell align="center">Ballistic/Weapon Skill (BS/WS)</TableCell>
            <TableCell align="center">Damage (D)</TableCell>
            <TableCell align="center">Special Rules (SR)</TableCell>
            <TableCell align="center">Critical Hit Rules (!)</TableCell>
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