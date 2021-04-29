import { Card, WeatherInfo, Img, WeatherDetail, Detial, LabelCard } from './styles'
import Sunny from 'assets/images/icon/weather/sunny.svg'
import GradientImg from 'assets/images/Gradient.svg'
import Raining from 'assets/images/icon/weather/Raining.svg'
import Humidity from 'assets/images/icon/weather/Humidity.svg'
import AirQuality from 'assets/images/icon/weather/Strom.svg'
import Wind from 'assets/images/icon/weather/Wind.svg'
import { LineChartComponent } from 'components/Graph/GraphComponent'
import { LoadingPage } from 'components/LoadingPage/LoadingPage'

interface OutdoorType {
  plotData: any;
  dashboardData: any;
}


const WeatherOutDoor = ({ plotData, dashboardData }: OutdoorType) => {

  const tempData = [
    {
      id: 'Temperature History',
      data: plotData !== undefined ? plotData : [],
    },
  ];


  return (
    <>
      <Card style={{ marginTop: '10px', top: '0px', paddingBottom: '20px' }}>
        <Img src={GradientImg} alt='gradient' width='100%' />

        <WeatherInfo>

          <h4 style={{ display: 'flex', fontSize: '32px', padding: '0px' }}>{dashboardData !== undefined ? Number(dashboardData.outdoor_weather.temperature.value).toFixed(1) : 0}  <span style={{ fontSize: '12px' }}>&#8451;</span></h4>
          <div>
            <strong style={{ fontSize: '14px', display: 'flex', marginLeft: '20px' }}>
              {dashboardData !== undefined ? dashboardData.outdoor_weather.location : '-'}
            </strong>
            <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', marginTop: '5px' }}>
              {dashboardData !== undefined ? dashboardData.outdoor_weather.fill : '-'}
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
                <strong style={{ fontSize: '14px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.humidity.value : 0}%</strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>Humidity</small>
              </Detial>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Img src={Wind} alt='wind' />
                <Detial>
                  <strong style={{ fontSize: '14px' }}>{dashboardData !== undefined ? dashboardData.outdoor_weather.wind_speed.value : 0} km/h</strong>
                  <small style={{ fontSize: '10px', color: '#BABDC6' }}>Wind</small>
                </Detial>
              </div>
            </div>
          </WeatherDetail>
        </div>

        {/* <div style={{ marginTop: '20px' }}> */}
        {plotData !== undefined ? <div style={{ width: '100%', height: '145px' }}>
          <h4 style={{ color: 'black', textAlign: 'center' }}></h4>
          <LineChartComponent data={tempData !== undefined ? tempData : []} unit="celcius" />
        </div> : <LoadingPage height='145px' />}

        {/* </div> */}
      </Card>

    </>
  )
}

export { WeatherOutDoor }
