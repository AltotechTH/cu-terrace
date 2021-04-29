import { FC, useMemo, useState, useContext } from 'react';
import { RealtimeConsumption } from './RealtimeConsumption';
import { DailyEnergyConsumption } from './DailyEnergyConsumption';
import { EnergyConsumptionByFloor } from './EnergyConsumptionByFloor';
import { EnergyConsumptionByZone } from './EnergyConsumptionByZone';
import { BuildingEnergyPerformance } from './BuildingEnergyPerformance';
import { Building } from './Building';
import { WeatherOutDoor } from './WeatherOutDoor';
import { WeatherInDoor } from './WeatherInDoor';
import { Tips } from './Tips';
import { Card } from './styles';
import { FirebaseContext } from 'api/firebase';
import { building } from 'api/services/Building';
import { energyConsumptionApi } from 'api/services/EnergyConsumption'
import moment from 'moment'


const Dashboard: FC = () => {
  const firebase = useContext<any>(FirebaseContext);
  const startDate = new Date
  const stopDate = new Date

  const [dashboardData, setDashboardData] = useState();
  const [energyConsumptionData, setEnergyConsumptionData]: any = useState()
  const [powerPlot, setPowerPlot]: any = useState()
  const [percentByZone, setPercentByZone]: any = useState()
  const [dailyEnergyConsumption, setDailyEnergyConsumption]: any = useState()
  const [cuTerraceRank, setCUTerraceRank]: any = useState()
  const [cuiHouseRank, setCUiHouseRank]: any = useState()

  const [buildingData, setBuildingData]: any = useState({
    data: [],
  });

  const [cuiHouse, setCUiHouse]: any = useState()
  const [cuTerrace, setCUTerrace]: any = useState()

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
    building.getBuildingAPI().then((res: any) => setBuildingData({ data: res?.data['buildings'] }));
    energyConsumptionApi.getEnergyConsumptionAPI(startDate, stopDate, 15).then((res: any) => setEnergyConsumptionData(res?.data['results'])).catch(() => setEnergyConsumptionData([]))

  }

  function convertToPlot(histData: any) {
    if (histData !== null && histData !== undefined) {
      let tmpPower: {}[] = [];
      let tmpPercentByZone: {}[] = []
      let tmpDailyEnergyConsumption: {}[] = []
      let tmpCUTerraceRank: {}[] = []
      let tmpCUiHouseRank: {}[] = []

      Object.keys(histData).forEach((val: any, index: number) => {
        if (val === 'today_power_kw') {
          (histData['today_power_kw'].forEach((element: any) => {
            tmpPower.push({
              x: moment(moment(element['datetime']).format()).format('YYYY-MM-DD HH:mm:ss'),
              y: element['power'],
            });
          }))
        }

        if (val === 'zone_energy_percent') {
          Object.entries(histData['zone_energy_percent']['by_zone']).forEach((element: any, index: number) => {
            tmpPercentByZone.push({
              id: element[0],
              label: element[0],
              value: element[1],
            });
          })
        }

        if (val === 'daily_energy_consumption') {
          Object.entries(histData['daily_energy_consumption']['value']).forEach((element: any) => {
            tmpDailyEnergyConsumption.push({
              label: element[0],
              value: element[1],
            });
          })
        }

        if (val === 'floor_rank') {
          Object.entries(histData['floor_rank']['cu_terrace']['rank']).forEach((element: any) => {
            tmpCUTerraceRank.push({
              label: element[0],
              value: element[1],
            });
          })
          Object.entries(histData['floor_rank']['cu_ihouse']['rank']).forEach((element: any) => {
            tmpCUiHouseRank.push({
              label: element[0],
              value: element[1],
            });
          })
        }

      })
      setPowerPlot(tmpPower);
      setPercentByZone(tmpPercentByZone)
      setDailyEnergyConsumption(tmpDailyEnergyConsumption)
      setCUTerraceRank(tmpCUTerraceRank)
      setCUiHouseRank(tmpCUiHouseRank)
    }
  }


  // console.log(dashboardData)
  // console.log(energyConsumptionData)
  // console.log(percentByZone)
  // console.log(dailyEnergyConsumption)

  useMemo(() => {
    fetchData(false);
    getData();

    return () => {
      fetchData(true);
    };
    // eslint-disable-next-line
  }, []);

  useMemo(() => {

    if (building !== undefined && building !== null) {
      const build = buildingData.data
      build.forEach((element: any) => {
        // console.log(element['building_name'])
        if (element['building_name'] === 'CU iHouse') {
          // console.log(element)
          setCUiHouse(element)
        }
        if (element['building_name'] === 'CU Terrace') {
          // console.log(element)
          setCUTerrace(element)
        }
      });
    }

    if (energyConsumptionData !== undefined && energyConsumptionData !== null) {
      convertToPlot(energyConsumptionData)
    }
  }, [buildingData, energyConsumptionData])

  // console.log(powerPlot)

  return (
    <div className="row" style={{ marginLeft: '84px' }}>
      <div className="column1">
        <Card>
          <div className="row">
            <div className="column3">
              <RealtimeConsumption dashboardData={dashboardData} powerPlot={powerPlot} />
              <DailyEnergyConsumption data={dailyEnergyConsumption} />
              <EnergyConsumptionByFloor cuTerrace={cuTerraceRank} cuiHouse={cuiHouseRank} />
              <EnergyConsumptionByZone data={percentByZone} />
            </div>
            <div className="column4">
              <BuildingEnergyPerformance dashboardData={dashboardData} />
              <Building dashboardData={dashboardData} cuiHous={cuiHouse} cuTerrace={cuTerrace} />
            </div>
          </div>
        </Card>
      </div>
      <div className="column2" style={{ padding: '0px 8px 8px 20px' }}>
        <WeatherOutDoor plotData={powerPlot} dashboardData={dashboardData} />
        <WeatherInDoor dashboardData={dashboardData} />
        <Tips />
      </div>
    </div>
  );
};

export { Dashboard };
