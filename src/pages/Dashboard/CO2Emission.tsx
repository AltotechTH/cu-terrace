import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { HiOutlineLightBulb } from 'react-icons/hi'

const CO2Emission = () => {
  return (
    <div style={{ marginLeft: '100px', position: 'relative', bottom: '3em' }}>
      <Grid container spacing={2}>



        {/* <Grid item xs={4}>

          <Paper style={{ backgroundColor: '#fafafa', borderRadius: '10px', margin: '5px' }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>

            <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline', marginBottom: '15px' }}>
              <Paper style={{ width: '35px', padding: '5px', borderRadius: '30%', backgroundColor: '#0077ff' }}>
                <HiOutlineLightBulb color='#ffff' fontSize={20} />
              </Paper>

            </div>
          </Paper>
        </Grid> */}
        {/* <Grid item xs={4}>

          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
          </Paper>
        </Grid>
        <Grid item xs={4}>

          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
          </Paper>
        </Grid> */}

      </Grid>

    </div >
  )
}

export { CO2Emission }
