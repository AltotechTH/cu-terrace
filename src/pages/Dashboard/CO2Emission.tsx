import { Card } from './styles'
import CO2LO from 'assets/images/icon/CO2LO.svg'
import Car from 'assets/images/icon/Car.svg'
import Tree from 'assets/images/icon/Tree.svg'

interface CO2Type {
  co2: any
}

const CO2Emission = ({ dashboardData }: CO2Type['co2']) => {
  const data = dashboardData !== undefined ? dashboardData.co2_emission_equivalent : undefined
  return (

    <div style={{ position: 'relative', bottom: '2.5em', display: 'flex', width: '100%', justifyContent: 'center' }}>
      {/* <Grid container spacing={2}> */}

      <Card style={{ width: '184px', margin: '10px', height: '75px', padding: 10, fontSize: '12px', display: 'flex' }}>

        <img src={CO2LO} alt="co2lo" />
        <div style={{ display: 'grid', textAlign: 'left', marginLeft: '10px' }}>
          CO2 Emissions
          <strong style={{ fontSize: '16px' }}>{data !== undefined ? Number(data.co2_emissions.value).toFixed(2) : 0} {data !== undefined ? data.co2_emissions.unit : '-'}</strong>
        </div>

      </Card>

      <Card style={{ width: '184px', margin: '10px', height: '75px', padding: 10, fontSize: '12px', display: 'flex' }}>
        <img src={Tree} alt="tree" />
        <div style={{ display: 'grid', textAlign: 'left', marginLeft: '10px' }}>
          Trees to Absorb CO2
          <strong style={{ fontSize: '16px' }}>{data !== undefined ? Number(data.trees_to_absorb_co2.value).toFixed(2) : 0} {data !== undefined ? data.trees_to_absorb_co2.unit : '-'}</strong>
        </div>
      </Card>

      <Card style={{ width: '184px', margin: '10px', height: '75px', padding: 10, fontSize: '12px', display: 'flex' }}>
        <img src={Car} alt="tree" />
        <div style={{ display: 'grid', textAlign: 'left', marginLeft: '10px' }}>
          Annual Car Use
          <strong style={{ fontSize: '16px' }}>{data !== undefined ? Number(data.annual_car_use.value).toFixed(2) : 0} {data !== undefined ? data.annual_car_use.unit : '-'}</strong>
        </div>
      </Card>
    </div >
  )
}

export { CO2Emission }
