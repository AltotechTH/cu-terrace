import { FC, useEffect, useMemo, useState, useContext } from 'react';
import { RealtimeConsumption } from './RealtimeConsumption';
import { DailyEnergyConsumption } from './DailyEnergyConsumption';
import { EnergyConsumptionByFloor } from './EnergyConsumptionByFloor';
import { EnergyConsumptionByZone } from './EnergyConsumptionByZone';
import { BuildingEnergyPerformance } from './BuildingEnergyPerformance';
import { Building } from './Building';
import { WeatherOutDoor } from './WeatherOutDoor';
import { WeatherInDoor } from './WeatherInDoor';
import { Tips } from './Tips';
import { GetStock } from 'api/services/Stock';
import { Card } from './styles';
import { FirebaseContext } from 'api/firebase';
import { building } from 'api/services/Building';

const data1 = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '9',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '13',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '14',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '15',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '16',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '17',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: 'Residential', value: 5 },
  { name: 'Facilities', value: 4 },
  { name: 'Retail Space', value: 1 },
  { name: 'Office', value: 1 },
];

const Dashboard: FC = () => {
  const firebase = useContext<any>(FirebaseContext);

  const [dashboardData, setDashboardData] = useState();

  const [data, setData]: any = useState({
    data: [],
  });

  const [buildingData, setBuildingData]: any = useState({
    data: [],
  });

  //##--------------- Function fetch Station information form firebase 🔥 --------------------
  function fetchData(didMount: boolean) {
    const pages_path = `building/pmcu/pages`;
    if (didMount) {
      firebase.db.ref(pages_path).off('value');
    } else {
      firebase.db.ref(pages_path).on('value', function (snap: { val: () => any }) {
        if (snap) {
          let capt: any = snap.val();
          if (capt !== undefined) {
            setDashboardData(capt.dashboard);
          }
        }
      });
    }
  }

  function getData() {
    building.getBuildingAPI().then((res: any) => setBuildingData({ data: res?.data }));
    // building
  }

  // console.log(dashboardData)

  useMemo(() => {
    fetchData(false);
    getData();

    return () => {
      fetchData(true);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    GetStock().then((res) => setData({ data: res?.data['Data'] }));
    // eslint-disable-next-line
  }, []);

  console.log(buildingData.data.buildings);

  return (
    <div className="row" style={{ marginLeft: '84px' }}>
      <div className="column1">
        <Card>
          <div className="row">
            <div className="column3">
              <RealtimeConsumption data={data.data} dashboardData={dashboardData} />
              <DailyEnergyConsumption data={data1} />
              <EnergyConsumptionByFloor data={data1} />
              <EnergyConsumptionByZone data={data01} />
            </div>
            <div className="column4">
              <BuildingEnergyPerformance dashboardData={dashboardData} />
              <Building dashboardData={dashboardData} />
            </div>
          </div>
        </Card>
      </div>
      <div className="column2" style={{ padding: '0px 8px 8px 20px' }}>
        <WeatherOutDoor data={data.data} dashboardData={dashboardData} />
        <WeatherInDoor dashboardData={dashboardData} />
        <Tips />
      </div>
    </div>
  );
};

export { Dashboard };
