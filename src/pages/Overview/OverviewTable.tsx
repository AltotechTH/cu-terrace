import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './tableStyle.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const OverviewTable = ({ rows }: any) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Building Name</TableCell>
            <TableCell align="right">Building Rank</TableCell>
            <TableCell align="right">Energy Intensity</TableCell>
            <TableCell align="right">Energy(kWh)</TableCell>
            <TableCell align="right">Energy Use Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.building_name}
              </TableCell>
              <TableCell align="right">{row.building_rank}</TableCell>
              <TableCell align="right">{row.energy_intensity}</TableCell>
              <TableCell align="right">{row.energy_kWh}</TableCell>
              <TableCell align="right">{row.energy_use_percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
