import { FC, useEffect, useState } from 'react'
import { RealtimeConsumption } from './RealtimeConsumption'
import { DailyEnergyConsumption } from './DailyEnergyConsumption'
import { EnergyConsumptionByFloor } from './EnergyConsumptionByFloor'
import { EnergyConsumptionByZone } from './EnergyConsumptionByZone'
import { BuildingEnergyPerformance } from './BuildingEnergyPerformance'
import { Building } from './Building'

import { WeatherOutDoor } from './WeatherOutDoor'
import { WeatherInDoor } from './WeatherInDoor'
import { Tips } from './Tips'
import { GetStock } from 'api/services/Stock'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import { useStyles } from './useStyles'
import { Card } from './styles'


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

const data01 = [{ name: 'Residential', value: 5 }, { name: 'Facilities', value: 4 },
{ name: 'Retail Space', value: 1 }, { name: 'Office', value: 1 }]



const Dashboard: FC = () => {

  const [data, setData]: any = useState({
    data: []
  })

  useEffect(() => {
    GetStock().then(res => setData({ data: res?.data['Data'] }))

  }, [])

  // console.log(data.data)
  const classes = useStyles()

  return (
    // <Container maxWidth='xl' style={{ marginTop: '20px' }}>
    <div className='row'>
      {/* <div className='column'> */}
      {/* <Grid container spacing={1}> */}
      <div className='column1'>
        <Card >
          {/* <Grid container spacing={2}> */}
          <div className='row'>
            <div className='column3'>
              <RealtimeConsumption data={data.data} />
              <DailyEnergyConsumption data={data1} />
              <EnergyConsumptionByFloor data={data1} />
              <EnergyConsumptionByZone data={data01} />
            </div>
            <div className='column4'>
              <BuildingEnergyPerformance />
              <Building />
            </div>
            {/* <Grid item xs={4}>

            </Grid>
            <Grid item xs={8}>

            </Grid> */}
          </div>

          {/* </Grid> */}

        </Card>
      </div>

      <div className='column2' style={{ padding: '0px 8px 8px 20px' }}>
        <WeatherOutDoor data={data.data} />
        <WeatherInDoor />
        <Tips />

      </div>
      {/* </Grid> */}
      {/* </div> */}

    </div>

    // </Container>
  )
}

export { Dashboard }