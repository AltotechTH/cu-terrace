import { useStyles, convertDate, convertValue } from './useStyles'

import { Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, WeatherInfo, Img, WeatherDetail, Detial, LabelCard } from './styles'
import Sunny from 'assets/images/icon/weather/sunny.svg'
import GradientImg from 'assets/images/Gradient.svg'
import Raining from 'assets/images/icon/weather/Raining.svg'
import Humidity from 'assets/images/icon/weather/Humidity.svg'
import AirQuality from 'assets/images/icon/weather/Strom.svg'
import Wind from 'assets/images/icon/weather/Wind.svg'

interface OutdoorType {
  data: any;
  dashboardData: any;
}


const WeatherOutDoor = ({ data, dashboardData }: OutdoorType) => {
  const classes = useStyles()
  return (
    <>
      <Card style={{ marginTop: '10px', top: '0px', paddingBottom: '20px' }}>
        <Img src={GradientImg} alt='gradient' width='100%' />

        <WeatherInfo>

          <h4 style={{ display: 'flex', fontSize: '32px', padding: '0px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.temperature : 0}  <span style={{ fontSize: '12px' }}>&#8451;</span></h4>
          <div>
            <strong style={{ fontSize: '14px', display: 'flex', marginLeft: '20px' }}>
              {dashboardData !== undefined ? dashboardData.outdoor_weather.zone : '-'}
            </strong>
            <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', marginTop: '5px' }}>
              {dashboardData !== undefined ? dashboardData.outdoor_weather.status : '-'}
            </span>

          </div>
          <img src={Sunny} alt='sunny' style={{ marginLeft: 20 }} />
        </WeatherInfo>

        <div style={{ marginTop: '20px' }}>
          <WeatherDetail>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={Raining} alt='raining' />
              <Detial>
                <strong style={{ fontSize: '14px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.precipitation : 0}%</strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>Precipitation</small>
              </Detial>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Img src={AirQuality} alt='air' />
                <Detial>
                  <strong style={{ fontSize: '14px', display: 'flex' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.air_quality_index : 0} &nbsp; <LabelCard>Moderate</LabelCard></strong>
                  <small style={{ fontSize: '10px', color: '#BABDC6' }}>Air Quality Index</small>
                </Detial>
              </div>
            </div>
          </WeatherDetail>

          <WeatherDetail>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={Humidity} alt='humi' />
              <Detial>
                <strong style={{ fontSize: '14px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.humidity : 0}%</strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>Humidity</small>
              </Detial>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Img src={Wind} alt='wind' />
                <Detial>
                  <strong style={{ fontSize: '14px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.wind : 0} km/h</strong>
                  <small style={{ fontSize: '10px', color: '#BABDC6' }}>Wind</small>
                </Detial>
              </div>
            </div>
          </WeatherDetail>
        </div>

        <div style={{ marginTop: '20px' }}>
          <ResponsiveContainer width="100%" height={150}>
            <ComposedChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
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
      </Card>

    </>
  )
}

export { WeatherOutDoor }
