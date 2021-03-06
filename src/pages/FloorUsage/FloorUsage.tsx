import { useState, useContext, useEffect } from 'react';
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
import { FirebaseContext } from 'api/firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
      marginLeft: '74px',
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

type dataProp = {
  name: string;
  value: number;
  unit: string;
};

let energyData: dataProp[] = [
  { name: 'Energy Consumption', value: 0, unit: 'kWh' },
  {
    name: 'Predicted Cost',
    value: 0,
    unit: 'Baht',
  },
  {
    name: 'Peak Demand',
    value: 0,
    unit: 'kW',
  },
  {
    name: 'CO2 Emissions',
    value: 0,
    unit: 'kg',
  },
];
let eventData: dataProp[] = [
  { name: 'Total Room', value: 5, unit: 'unit' },
  {
    name: 'IoT Disconnected',
    value: 0,
    unit: 'unit',
  },
  {
    name: 'Anomaly Event',
    value: 0,
    unit: 'unit',
  },
  {
    name: 'Tenant Request',
    value: 0,
    unit: 'unit',
  },
];

const roomsData = [
  { room: '0601', value: 14 },
  { room: '0602', value: 24 },
  { room: '0603', value: 34 },
  { room: '0604', value: 14 },
  { room: '0605', value: 4 },
  { room: '0606', value: 100 },
  { room: '0607', value: 100 },
  { room: '0608', value: 100 },
  { room: '0609', value: 100 },
  { room: '0610', value: 100 },
  { room: '0611', value: 100 },
  { room: '0612', value: 100 },
  { room: '0613', value: 100 },
  { room: '0614', value: 100 },
  { room: '0615', value: 100 },
  { room: '0616', value: 100 },
  { room: '0617', value: 100 },
  { room: '0618', value: 100 },
  { room: '0619', value: 100 },
  { room: '0620', value: 100 },
  { room: '0621', value: 100 },
  { room: '0622', value: 100 },
  { room: '0623', value: 100 },
  { room: '0624', value: 100 },
  { room: '0625', value: 100 },
  { room: '0626', value: 100 },
  { room: '0627', value: 100 },
  { room: '0628', value: 100 },
  { room: '0629', value: 100 },
  { room: '0630', value: 100 },
];

export const FloorUsage = () => {
  const [buildingName, setBuildingName] = useState('Terrace');
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
  const [tagOpacity, setTagOpacity] = useState(0);
  const [hoveredFloor, setHoveredFloor] = useState('');
  const [energySummaryData, setEnergySummaryData] = useState<dataProp[] | undefined>();
  const [eventSummaryData, setEventSummaryData] = useState<dataProp[] | undefined>();
  const [roomSummaryData, setRoomSummaryData] = useState();

  const classes = useStyles();

  const firebase = useContext<any>(FirebaseContext);

  function fetchData(didMount: boolean) {
    const pages_path = 'building/pmcu/pages/floor_usage/cu_ihouse/floors/floor_6';
    if (didMount) {
      firebase.db.ref(pages_path).off('value');
    } else {
      firebase.db.ref(pages_path).on('value', function (snap: { val: () => any }) {
        if (snap) {
          let capt: any = snap.val();
          let energyRef: any = [];
          let eventRef: any = [];
          Object.keys(capt.energy).forEach((item) => {
            energyRef.push(convertToArray(item, capt.energy[item].toFixed(2)));
          });
          Object.keys(capt.event).forEach((item) => {
            eventRef.push(convertToArray(item, capt.event[item].toFixed(2)));
          });
          setEnergySummaryData(energyRef);
          setEventSummaryData(eventRef);
          setSummaryData(energyRef);
        }
      });
    }
  }

  const convertToArray = (name: string, value: number) => {
    let result: any = {
      predicted_cost_thb: {
        name: 'Predicted Cost',
        value: value,
        unit: 'Baht',
      },
      co2_emission_kg: {
        name: 'CO2 Emissions',
        value: value,
        unit: 'kg',
      },
      energy_consumption_kwh: {
        name: 'Energy Consumption',
        value: value,
        unit: 'kWh',
      },
      peak_demand_kwh: {
        name: 'Peak Demand',
        value: value,
        unit: 'kW',
      },
      total_room_unit: { name: 'Total Room', value: value, unit: 'unit' },
      iot_disconnected_unit: {
        name: 'IoT Disconnected',
        value: value,
        unit: 'unit',
      },
      anomaly_event_unit: {
        name: 'Anomaly Event',
        value: value,
        unit: 'unit',
      },
      tenant_request_unit: {
        name: 'Tenant Request',
        value: value,
        unit: 'unit',
      },
      monthly_electricity_bill: {
        name: 'Monthly Electricity Bill',
        value: value,
        unit: 'THB',
      },
      monthly_energy_consumption: {
        name: 'Monthly Energy Consumption',
        value: value,
        unit: 'kWh',
      },
      today_energy_consumption: {
        name: 'Today Energy Consumption',
        value: value,
        unit: 'kWh',
      },
    };
    return result[name];
  };

  const fetchRoomSummaryData = (sync: boolean, roomNumber: string) => {
    const roomSummaryPath = `building/pmcu/pages/floor_usage/rooms/${roomNumber.substring(1, 4)}`;
    if (sync) {
      firebase.db.ref(roomSummaryPath).on('value', function (snap: { val: () => any }) {
        if (snap) {
          let capt: any = snap.val();
          let summaryData: any = [];
          Object.keys(capt).forEach((item) => {
            if (typeof capt[item] === 'object') {
              summaryData.push(convertToArray(item, capt[item].value.toFixed(2)));
            } else {
              summaryData.push(convertToArray(item, capt[item].toFixed(2)));
            }
          });
          setRoomSummaryData(summaryData);
        }
      });
    } else {
      firebase.db.ref(roomSummaryPath).off('value');
    }
  };

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
    if (value === 'Energy' && energySummaryData) {
      setSummaryData(energySummaryData);
    }
    if (value === 'Event' && eventSummaryData) {
      setSummaryData(eventSummaryData);
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
      let classAttr = e.target.getAttribute('class').split('_');
      setBuildingName(classAttr[0]);
      if (classAttr[0] === buildingName) {
        setSelectedGraphOpen(true);
      }
      setSelectedFloor(classAttr[0] + classAttr[1]);
    }
  };

  const onMouseMove = (e: any) => {
    if (e.target.getAttribute('class') !== null && e.target.getAttribute('class').split('_')[0]) {
      let classAttr = e.target.getAttribute('class').split('_');
      setHoveredFloor(classAttr[0] + classAttr[1]);
      if (classAttr[0] === 'iHouse') {
        setOpacityStateiHouse(0.5);
        setSelectedFloorYiHouse((24.6 * classAttr[1] - 24.6).toString());
        setTagOpacity(1);
      }
      if (classAttr[0] === 'Terrace') {
        setOpacityStateTerrace(0.5);
        setSelectedFloorYTerrace((24.6 * classAttr[1] - 24.6).toString());
        setTagOpacity(1);
      }
    }
  };

  const onMouseLeave = () => {
    setOpacityStateiHouse(0);
    setOpacityStateTerrace(0);
    setTagOpacity(0);
  };

  const closeModal = () => {
    setSelectedGraphOpen(false);
    setSelectedRoomOpen(false);
    fetchRoomSummaryData(false, '0601');
  };

  const openModalGraph = () => {
    setSelectedGraphOpen(true);
  };

  const selectRoom = (e: string) => {
    setSelectedRoom(e);
    fetchRoomSummaryData(true, e);
    setSelectedRoomOpen(true);
  };

  useEffect(() => {
    fetchData(false);
    return () => {
      fetchData(true);
    };
    // eslint-disable-next-line
  }, []);

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
            height: 'auto',
            padding: '20px 30px 20px 50px',
            marginTop: '-10px',
          }}
        >
          <Buildings
            buildingName={buildingName}
            onSelectedFloor={onSelectedFloor}
            onMouseMove={onMouseMove}
            opacityStateiHouse={opacityStateiHouse}
            opacityStateTerrace={opacityStateTerrace}
            onMouseLeave={onMouseLeave}
            selectedFloorYiHouse={selectedFloorYiHouse}
            selectedFloorYTerrace={selectedFloorYTerrace}
            selectedFloor={selectedFloor}
            tagOpacity={tagOpacity}
            hoveredFloor={hoveredFloor}
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
        roomSummaryData={roomSummaryData}
      />
    </div>
  );
};
