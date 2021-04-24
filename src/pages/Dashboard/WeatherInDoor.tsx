import { useStyles } from './useStyles'
import { Card, WeatherInfo, Img, WeatherDetail, Detial, LabelCard } from './styles'
import Cold from 'assets/images/icon/weather/Cold.svg'
import GradientImg from 'assets/images/Gradient1.svg'
// import Raining from 'assets/images/icon/weather/Raining.svg'
import Humidity from 'assets/images/icon/weather/Humidity.svg'
import AirQuality from 'assets/images/icon/weather/Strom.svg'
import CO2 from 'assets/images/icon/weather/CO2.svg'



const WeatherInDoor = () => {
  const classes = useStyles()
  return (
    <Card style={{ marginTop: '20px', top: '0px', paddingBottom: '20px' }}>
      <Img src={GradientImg} alt='gradient' width='100%' />

      <WeatherInfo>

        <h4 style={{ display: 'flex', fontSize: '32px', padding: '0px' }}>25 <span style={{ fontSize: '12px' }}>&#8451;</span></h4>
        <div>
          <strong style={{ fontSize: '14px', display: 'flex', marginLeft: '20px' }}>
            Indoor, CU Terrace
          </strong>
          <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', marginTop: '5px' }}>
            Chill
          </span>

        </div>
        <img src={Cold} alt='cold' style={{ marginLeft: 20 }} />
      </WeatherInfo>

      <div style={{ marginTop: '20px' }}>
        <WeatherDetail>
          <div style={{ width: '100%', display: 'flex' }}>
            <Img src={Humidity} alt='humi' />
            <Detial>
              <strong style={{ fontSize: '14px' }}>68%</strong>
              <small style={{ fontSize: '10px', color: '#BABDC6' }}>Humidity</small>
            </Detial>
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={AirQuality} alt='air' />
              <Detial>
                <strong style={{ fontSize: '14px', display: 'flex' }}>38 &nbsp; <LabelCard style={{ backgroundColor: '#7BCE5A' }}>Good</LabelCard></strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>Air Quality Index</small>
              </Detial>
            </div>
          </div>
        </WeatherDetail>

        <WeatherDetail>
          <div style={{ width: '100%', display: 'flex' }}>
            <Img src={CO2} alt='co2' />
            <Detial>
              <strong style={{ fontSize: '14px', display: 'flex' }}>500 ppm &nbsp; <LabelCard style={{ backgroundColor: '#7BCE5A' }}>Normal</LabelCard></strong>
              <small style={{ fontSize: '10px', color: '#BABDC6' }}>CO2</small>
            </Detial>
          </div>

          {/* <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={Wind} alt='wind' />
              <Detial>
                <strong style={{ fontSize: '14px' }}>47%</strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>Precipitation</small>
              </Detial>
            </div>
          </div> */}
        </WeatherDetail>




      </div>
    </Card>

  )
}

export { WeatherInDoor }
