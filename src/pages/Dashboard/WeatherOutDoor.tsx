import React from 'react'
import { useStyles, d, dayOfTheWeek, convertDate, convertValue } from './useStyles'
import Clock from 'react-live-clock'
import Paper from '@material-ui/core/Paper';
import { RiSunFill } from 'react-icons/ri'
import { Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import moment from 'moment';


const WeatherOutDoor = (data: any) => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>

        {/* <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline' }}>
          <Paper style={{ width: '40px', padding: '10px', borderRadius: '40%', backgroundColor: '#0077ff' }}>
            <FaTemperatureLow color='#ffff' />
          </Paper>

          <h4 style={{ width: '40%' }}>Temperature</h4>
        </div> */}

        <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline', }}>
          <Paper style={{ width: '100%', padding: '10px', borderRadius: '15px', backgroundColor: '#0077ff', display: 'inline-flex', alignItems: 'center', color: '#ffff' }}>
            <RiSunFill color='#ffee00' fontSize='50px' />
            <h4 style={{ display: 'flex', fontSize: '40px', marginLeft: '20px', marginRight: '0px', padding: '0px' }}>32 <span style={{ fontSize: '20px' }}>&#8451;</span></h4>
            <div>
              <strong style={{ fontSize: '10px', display: 'flex', marginLeft: '20px' }}>
                Pathumwan, Bangkok
              </strong>
              <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                {dayOfTheWeek(d.getDate(), d.getUTCMonth() + 1, d.getFullYear())} &nbsp; <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Bangkok'} />
              </span >
              <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                Sunny
              </span>
            </div>


          </Paper>
        </div>

        <div style={{ marginTop: '20px', display: 'flex' }}>

          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Precipitation</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>47%</strong>
          </Paper>
          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
          </Paper>
          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Wind</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>15</strong>
          </Paper>
          <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px' }}>
            <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>US AQI</span>
            <strong style={{ fontSize: '16px', textAlign: 'center' }}>38</strong>
            <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Good</strong>

          </Paper>


        </div>

        <div style={{ marginTop: '20px' }}>
          <ResponsiveContainer width="100%" height={125}>
            <ComposedChart data={data.data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <filter id='shadow' height='200%'>
                  <feGaussianBlur
                    in='SourceAlpha'
                    stdDeviation='7'
                    result='blur'
                  />
                  <feOffset in='blur' dx='0' dy='7' result='offsetBlur' />
                  <feFlood
                    floodColor='#006991'
                    floodOpacity='0.5'
                    result='offsetColor'
                  />
                  <feComposite
                    in='offsetColor'
                    in2='offsetBlur'
                    operator='in'
                    result='offsetBlur'
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in='SourceGraphic' />
                  </feMerge>
                </filter>
              </defs>

              <XAxis dataKey="time" tickFormatter={convertDate} fontSize={7} />
              <YAxis tickFormatter={convertValue} fontSize={7} />
              <Tooltip />
              <CartesianGrid vertical={false} stroke="#fafafa" />
              <Line
                type="monotone"
                unit="M"
                strokeLinecap="round"
                strokeWidth={2}
                filter="url(#shadow)"
                style={{ strokeDasharray: `0 0% 0%` }}
                dataKey="close"
                stroke="#57a2e7"
                dot={false}
                legendType="none"
              />
              <foreignObject x="30" y="0" width="300" height="150" fontSize={10} >
                <div style={{ display: 'flex' }}>
                  <h4 style={{ cursor: 'pointer', textDecoration: 'underline like solid #006991' }}>Temperature</h4> &nbsp; &nbsp;
                  <h4 style={{ cursor: 'pointer' }}>Precipitation</h4>&nbsp; &nbsp;
                  <h4 style={{ cursor: 'pointer' }}>Wind</h4>&nbsp; &nbsp;
                  <h4 style={{ cursor: 'pointer' }}>AQI</h4>
                </div>

              </foreignObject>
            </ComposedChart>
          </ResponsiveContainer>

        </div>
      </Paper>

    </>
  )
}

export { WeatherOutDoor }
