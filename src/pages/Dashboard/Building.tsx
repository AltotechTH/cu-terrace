import zIndex from '@material-ui/core/styles/zIndex'
import Build from 'assets/images/CU-Terrace-Building.svg'
import Circle from 'assets/images/icon/Circle.svg'
import Pionter from 'assets/images/icon/Pointer.svg'
import { CO2Emission } from './CO2Emission'
import { FloorInformation } from './FloorInformation'


const Building = () => {

  return (
    <div style={{ textAlign: 'center', height: '500px' }}>
      <img src={Build} alt="building" />

      <div style={{ position: 'absolute', top: '252px', right: '83px', display: 'grid' }}>
        <strong style={{ fontSize: '32px', zIndex: 999 }}>560</strong>
        <small style={{ fontSize: '12px', zIndex: 999 }}>kWh/m</small>
        <img style={{ position: 'relative', right: '0px', top: '-6em' }} src={Circle} alt='circle' />
      </div>
      <FloorInformation header='CU Terrace' size='55,046 m2' floors='22' right={14.2} top={27} />
      <FloorInformation header='CU iHouse' size='55,046 m2' floors='26' right={-8.4} top={34}

      />
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



      <CO2Emission />


    </div>
  )
}

export { Building }
