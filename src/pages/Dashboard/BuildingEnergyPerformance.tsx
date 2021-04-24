import { monthNames, d } from './useStyles'
import Clock from 'react-live-clock';
import { BuildingPerformance } from 'components/BuildingPerformance/BuildingPerformance'

interface PerformanceType {

  dashboardData: any;
}


const BuildingEnergyPerformance = ({ dashboardData }: PerformanceType) => {
  return (
    <>
      <div style={{ textAlign: 'center', color: 'black', marginTop: '1rem' }}>
        <h2>Building Energy Performance</h2>
      </div>
      <div style={{ textAlign: 'center', color: 'black', marginTop: '1rem' }}>
        <h5 style={{ color: '#c2c2c2' }}>{`${monthNames[d.getUTCMonth()]} ${d.getDate()}, ${d.getFullYear()}`} &nbsp; &nbsp; | &nbsp; &nbsp; <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bangkok'} /></h5>
      </div>

      <div style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <BuildingPerformance />
      </div>
    </>

  )
}

export { BuildingEnergyPerformance }
