import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment'

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    marginTop: 35
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '16px 0px 0px 0px',
    borderRadius: '8px',
  },
}),
);

export const d = new Date()

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const dayOfTheWeek = (day: number, month: number, year: number
  ) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()];
};
  
export const convertDate = (timestamp: number) => moment(new Date(timestamp * 1000)).format('MMM YY\'');
export const convertValue = (value: number) => `${Math.floor(value / 10e2)}M`;