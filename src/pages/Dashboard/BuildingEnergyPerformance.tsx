import { FC } from 'react'
import { monthNames, d } from './useStyles'
import Clock from 'react-live-clock';
// import GaugeChart from 'react-gauge-chart'
import { BuildingPerformance } from 'components/BuildingPerformance/BuildingPerformance'

const BuildingEnergyPerformance: FC = () => {
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
        {/* <GaugeChart
          nrOfLevels={10}
          arcPadding={0.1}
          cornerRadius={3}
          percent={0.6}
          textColor="#000000"
          formatTextValue={(value) => value + ' kWh/m2'}
          fontSize='20px'
          style={{ width: '50%' }}

        /> */}
      </div>
    </>

  )
}

export { BuildingEnergyPerformance }
