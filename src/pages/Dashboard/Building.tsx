import Build from 'assets/images/CU-Terrace-Building.svg'
import Circle from 'assets/images/icon/Circle.svg'
import Pionter from 'assets/images/icon/Pointer.svg'
import { CO2Emission } from './CO2Emission'
import { FloorInformation } from './FloorInformation'


interface BuildingType {
  dashboardData: any,
  cuiHous: any,
  cuTerrace: any

}

const Building = ({ dashboardData, cuiHous, cuTerrace }: BuildingType) => {
  return (
    <div style={{ textAlign: 'center', height: '500px' }}>
      <img src={Build} alt="building" />

      <div style={{ position: 'absolute', top: '252px', right: '83px', display: 'grid' }}>

        <div style={{ zIndex: 9, display: 'grid' }}>
          <strong style={{ fontSize: '32px' }}>{dashboardData !== undefined ? Number(dashboardData.total_energy_consumption.value).toFixed(2) : 0}</strong>
          <small style={{ fontSize: '12px' }}>kWh/m</small>
        </div>

        <img style={{ position: 'relative', right: '0px', top: '-6em' }} src={Circle} alt='circle' />
      </div>

      <FloorInformation header={cuTerrace !== undefined ? cuTerrace['building_name'] : '-'} size={cuTerrace !== undefined ? cuTerrace['size_m2'] : 0} floors={cuTerrace !== undefined ? cuTerrace['floors'] : '-'} right={23} top={27} />

      <FloorInformation header={cuiHous !== undefined ? cuiHous['building_name'] : '-'} size={cuTerrace !== undefined ? cuiHous['size_m2'] : 0} floors={cuiHous !== undefined ? cuiHous['floors'] : '-'} right={-13.5} top={34} />

      <img src={Pionter} alt='pointer' style={{
        position: 'absolute',
        bottom: '19.5em',
        right: '33em'
      }} />


      <img src={Pionter} alt='pointer' style={{
        position: 'absolute',
        bottom: '12.5em',
        right: '10em'
      }} />

      {/* <img className={classes.paper} src={Build} alt="building" width='40%' height='10%' /> */}

      <small style={{
        position: 'absolute',
        right: '28em',
        bottom: '6.3em',
        fontSize: '16px'
      }}>
        CO2 Emission Equivalent
      </small>



      <CO2Emission dashboardData={dashboardData} />


    </div>
  )
}

export { Building }
