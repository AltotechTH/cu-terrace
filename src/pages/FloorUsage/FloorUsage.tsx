import { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from 'components/CardHeader';
import { Buildings } from './Buildings';
import { SummaryTabs } from './SummaryTabs';
import { RangeTabs } from './RangeTabs';
import { EventTabs } from './EventTabs';
import { FloorTabs } from './FloorTabs';
import { Tabs, Tab } from 'components/StyledTabs/StyledTabs';
import { EnergyConsumptionButton } from './EnergyConsumptionButton';
import { GraphModal } from './GraphModal';
import { RoomModal } from './RoomModal';

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

const energyData = [
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

const eventData = [
  { name: 'Total Room', value: 125, unit: 'unit' },
  {
    name: 'IoT Disconnected',
    value: 1,
    unit: 'unit',
  },
  {
    name: 'Anomaly Event',
    value: 3,
    unit: 'unit',
  },
  {
    name: 'Tenant Request',
    value: 1,
    unit: 'unit',
  },
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
  const [selectedTab, setSelectedTab] = useState('Energy');
  const [selectedModalTab, setSelectedModalTab] = useState('Information');
  const [opacityStateTerrace, setOpacityStateTerrace] = useState(0);
  const [opacityStateiHouse, setOpacityStateiHouse] = useState(0);
  const [selectedFloorYTerrace, setSelectedFloorYTerrace] = useState<string>('0');
  const [selectedFloorYiHouse, setSelectedFloorYiHouse] = useState<string>('0');
  const [summaryData, setSummaryData] = useState(energyData);
  const [selectedGraphOpen, setSelectedGraphOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>();
  const [selectedRoomOpen, setSelectedRoomOpen] = useState(false);

  const classes = useStyles();

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
    if (value === 'Energy') {
      setSummaryData(energyData);
    }
    if (value === 'Event') {
      setSummaryData(eventData);
    }
  };

  const handleChangeModalTab = (value: string) => {
    setSelectedModalTab(value);
    if (value === 'Information') {
      setSummaryData(energyData);
    }
    if (value === 'Event') {
      setSummaryData(eventData);
    }
  };

  const onSelectedFloor = (e: any) => {
    if (e.target.getAttribute('class') !== null && e.target.getAttribute('class').split('_')[0]) {
      setIsFirstBuilding(e.target.getAttribute('class').split('_')[0] === 'Terrace');
    }
  };

  const onMouseMove = (e: any) => {
    if (e.target.getAttribute('class') !== null && e.target.getAttribute('class').split('_')[0]) {
      let classAttr = e.target.getAttribute('class').split('_');
      setSelectedFloor(classAttr[0] + classAttr[1]);
      if (classAttr[0] === 'iHouse') {
        setOpacityStateiHouse(0.5);
        setSelectedFloorYiHouse((24.6 * classAttr[1] - 24.6).toString());
      }
      if (classAttr[0] === 'Terrace') {
        setOpacityStateTerrace(0.5);
        setSelectedFloorYTerrace((24.6 * classAttr[1] - 24.6).toString());
      }
    }
  };

  const onMouseLeave = () => {
    setOpacityStateiHouse(0);
    setOpacityStateTerrace(0);
  };

  const closeModal = () => {
    setSelectedGraphOpen(false);
    setSelectedRoomOpen(false);
  };

  const openModalGraph = () => {
    setSelectedGraphOpen(true);
  };

  const selectRoom = (e: string) => {
    setSelectedRoom(e);
    setSelectedRoomOpen(true);
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
            padding: '20px 30px 20px 50px',
            marginTop: '-10px',
          }}
        >
          <Buildings
            isFirstBuilding={isFirstBuilding}
            onSelectedFloor={onSelectedFloor}
            onMouseMove={onMouseMove}
            opacityStateiHouse={opacityStateiHouse}
            opacityStateTerrace={opacityStateTerrace}
            onMouseLeave={onMouseLeave}
            selectedFloorYiHouse={selectedFloorYiHouse}
            selectedFloorYTerrace={selectedFloorYTerrace}
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
              <Tabs>
                <Tab defaultValue={'Energy'} selectedTab={selectedTab} onClick={handleChangeTab} />
                <Tab defaultValue={'Event'} selectedTab={selectedTab} onClick={handleChangeTab} />
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
                    <SummaryTabs summaryData={summaryData} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      borderBottom: '1px solid #ededed',
                      padding: '0px 15px 10px 15px',
                    }}
                  >
                    {selectedTab === 'Energy' && (
                      <>
                        <RangeTabs />
                        <EnergyConsumptionButton openModalGraph={openModalGraph} />
                      </>
                    )}
                    {selectedTab === 'Event' && <EventTabs />}
                  </Grid>
                  <Grid container spacing={3} style={{ padding: '15px 40px' }}>
                    <FloorTabs floorValue={roomsData} selectRoom={selectRoom} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <GraphModal
        selectedGraphOpen={selectedGraphOpen}
        closeModal={closeModal}
        selectedFloor={selectedFloor}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <RoomModal
        selectedRoomOpen={selectedRoomOpen}
        closeModal={closeModal}
        selectedRoom={selectedRoom}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        selectedModalTab={selectedModalTab}
        handleChangeModalTab={handleChangeModalTab}
      />
    </div>
  );
};
