import React from 'react'
import { useStyles } from './useStyles'
import Build from 'assets/images/Building.png'
import { CO2Emission } from './CO2Emission'

const Building = () => {
  const classes = useStyles()
  return (
    <div>
      <img className={classes.paper} src={Build} alt="building" width='40%' height='10%' />
      <img className={classes.paper} src={Build} alt="building" width='40%' height='10%' />

      <CO2Emission />

      <div>

      </div>


    </div>
  )
}

export { Building }
