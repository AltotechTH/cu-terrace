import React from 'react'
import { useStyles, d, dayOfTheWeek, } from './useStyles'
import Clock from 'react-live-clock'
import Paper from '@material-ui/core/Paper';



const WeatherInDoor = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>

      <div style={{ width: "100%", }}>
        <Paper style={{ width: '100%', padding: '10px', borderRadius: '15px', backgroundColor: '#17bc91', display: 'flex', alignItems: 'center', color: '#ffff' }}>
          {/* <RiSunFill color='#ffee00' fontSize='50px' /> */}
          <h4 style={{ display: 'flex', fontSize: '40px', marginLeft: '20px', marginRight: 'auto', padding: '0px', justifyContent: 'flex-start' }}>25 <span style={{ fontSize: '20px' }}>&#8451;</span></h4>
          <div>
            <strong style={{ fontSize: '15px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
              Indoor
            </strong>
            <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
              {dayOfTheWeek(d.getDate(), d.getUTCMonth() + 1, d.getFullYear())} &nbsp; <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Bangkok'} />
            </span >
            <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
              Chill
            </span>
          </div>


        </Paper>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>

        {/* <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
    <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Precipitation</span>
    <strong style={{ fontSize: '16px', textAlign: 'center' }}>47%</strong>
  </Paper> */}
        <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px', }}>
          <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
          <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
        </Paper>
        <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px' }}>
          <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>CO2</span>
          <strong style={{ fontSize: '16px', textAlign: 'center' }}>500</strong>
          <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Normal</strong>

        </Paper>
        <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px' }}>
          <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>US AQI</span>
          <strong style={{ fontSize: '16px', textAlign: 'center' }}>38</strong>
          <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Good</strong>

        </Paper>


      </div>


    </Paper>
  )
}

export { WeatherInDoor }
