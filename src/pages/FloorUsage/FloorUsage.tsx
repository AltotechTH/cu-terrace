import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { CardHeader } from 'components/CardHeader';
import { Buildings } from './Buildings';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { SummaryTabs } from './SummaryTabs';
import { RangeTabs } from './RangeTabs';
import { FloorTabs } from './FloorTabs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '10px',
    },
    buttonroot: {
      color: 'black',
    },
    span: {
      borderBottom: '1px soilid black',
    },
  })
);

const data = [
  { name: 'Energy Consumption', value: 125, unit: 'kWh' },
  {
    name: 'Predicted Cost',
    value: 625,
    unit: 'Baht',
  },
  {
    name: 'Peak Demand',
    value: 40,
    unit: 'kW',
  },
  {
    name: 'CO2 Emissions',
    value: 38,
    unit: 'kg',
  },
];

const tabsData = [
  { code: 'rgb(215, 245, 228)', range: '0-10 kWh' },
  { code: 'rgb(200, 231, 253)', range: '10-20 kWh' },
  { code: 'rgb(73, 161, 248)', range: '20-30 kWh' },
  { code: 'rgb(57, 124, 221)', range: '30-40 kWh' },
  { code: 'rgb(32, 77, 141)', range: '40-50 kWh' },
];

const roomsData = [
  { room: '0601', value: 14 },
  { room: '0602', value: 24 },
  { room: '0603', value: 34 },
  { room: '0604', value: 14 },
  { room: '0605', value: 4 },
  { room: '0606', value: 44 },
  { room: '0607', value: 24 },
  { room: '0608', value: 14 },
  { room: '0609', value: 44 },
  { room: '0610', value: 34 },
  { room: '0611', value: 14 },
  { room: '0612', value: 24 },
  { room: '0613', value: 34 },
  { room: '0614', value: 14 },
  { room: '0615', value: 4 },
  { room: '0616', value: 44 },
  { room: '0617', value: 24 },
  { room: '0618', value: 14 },
  { room: '0619', value: 44 },
  { room: '0620', value: 34 },
  { room: '0621', value: 14 },
  { room: '0622', value: 24 },
  { room: '0623', value: 4 },
  { room: '0624', value: 14 },
  { room: '0625', value: 14 },
  { room: '0626', value: 44 },
  { room: '0627', value: 24 },
  { room: '0628', value: 14 },
  { room: '0629', value: 4 },
  { room: '0630', value: 34 },
];

export const FloorUsage = () => {
  const [isFirstBuilding, setIsFirstBuilding] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('06');
  const [mode, setMode] = useState('Energy');

  const classes = useStyles();

  const [tabValue, setTabValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const onSelectedFloor = (e: any) => {
    if (e.target.getAttribute('class') !== null && e.target.getAttribute('class').split('_')[0]) {
      setIsFirstBuilding(e.target.getAttribute('class').split('_')[0] === 'Terrace');
    }
  };

  const onMouseMove = (e: any) => {
    if (e.target.getAttribute('class') !== null && e.target.getAttribute('class').split('_')[0]) {
      setSelectedFloor(
        e.target.getAttribute('class').split('_')[0] + e.target.getAttribute('class').split('_')[1]
      );
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardHeader headerName={'Floor Plan'} parentName={'Dashboard'} childName={'Floor Plan'} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '800px',
            padding: '20px 80px 20px 80px',
            marginTop: '-80px',
          }}
        >
          <Buildings
            isFirstBuilding={isFirstBuilding}
            onSelectedFloor={onSelectedFloor}
            onMouseMove={onMouseMove}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 style={{ color: 'black' }}>
                Selected Floor :{' '}
                <strong style={{ fontSize: '35px', margin: '0px' }}>{selectedFloor}</strong>
              </h2>
            </Grid>
            <Grid item xs={12}>
              <Tabs
                value={tabValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                // TabIndicatorProps={{ style: { background: '#000000' } }}
              >
                <Tab label="Event" />
                <Tab label="Energy" />
              </Tabs>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                  >
                    <SummaryTabs summaryData={data} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      borderBottom: '1px solid #ededed',
                    }}
                  >
                    <RangeTabs RangeData={tabsData} />
                  </Grid>
                  <Grid container spacing={3} style={{ padding: '15px 40px' }}>
                    <FloorTabs floorValue={roomsData} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
