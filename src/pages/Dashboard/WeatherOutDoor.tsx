import { useState, useMemo } from 'react';
import {
  Card,
  WeatherInfo,
  Img,
  WeatherDetail,
  Detial,
  LabelCard
} from './styles';
import Sunny from 'assets/images/icon/weather/sunny.svg';
import GradientImg from 'assets/images/Gradient.svg';
import Raining from 'assets/images/icon/weather/Raining.svg';
import Humidity from 'assets/images/icon/weather/Humidity.svg';
import AirQuality from 'assets/images/icon/weather/Strom.svg';
import Wind from 'assets/images/icon/weather/Wind.svg';
import { LineChartComponent } from 'components/Graph/GraphComponent';
import { LoadingPage } from 'components/LoadingPage/LoadingPage';
import moment from 'moment';
import styled from 'styled-components';

interface OutdoorType {
  dashboardData: any;
}

const Header = styled.div`
  width: 100%;
  display: flex;

  border-top: 1px solid #e1e6f0;
  padding: 10px 0px 0px 0px;
`;
const List = styled.span`
  font-size: 10px;
  padding: 0px 10px 0px 10px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: solid underline #f2c94c 3px;
  }
`;

const WeatherOutDoor = ({ dashboardData }: OutdoorType) => {
  const [plotData, setPlotData]: any = useState();
  const [unit, setUnit] = useState('°C');
  const [currentTab, setCurrentTab] = useState('temperature');

  useMemo(() => {
    if (dashboardData !== undefined) {
      if (currentTab === 'temperature') {
        const data = dashboardData.weather_forecast.temperature;
        let temTemperature: {}[] = [];
        const tempData = [
          {
            id: 'Temperature',
            data: temTemperature !== undefined ? temTemperature : []
          }
        ];
        Object.keys(data).map((value: any) =>
          temTemperature.push({
            x: moment.unix(Number(value)).format('YYYY-MM-DD HH:mm:ss'),
            y: data[value]
          })
        );
        setPlotData(tempData);
        setUnit('°C');
      }
      if (currentTab === 'humidity') {
        const data = dashboardData.weather_forecast.relative_humidity;
        let temPrecipitation: {}[] = [];
        const tempData = [
          {
            id: 'Humidity',
            data: temPrecipitation !== undefined ? temPrecipitation : []
          }
        ];
        Object.keys(data).map((value: any) =>
          temPrecipitation.push({
            x: moment.unix(Number(value)).format('YYYY-MM-DD HH:mm:ss'),
            y: data[value]
          })
        );
        setPlotData(tempData);
        setUnit('%');
      }
      if (currentTab === 'wind') {
        const data = dashboardData.weather_forecast.wind_speed;
        let temWind: {}[] = [];
        const tempData = [
          {
            id: 'Wind',
            data: temWind !== undefined ? temWind : []
          }
        ];
        Object.keys(data).map((value: any) =>
          temWind.push({
            x: moment.unix(Number(value)).format('YYYY-MM-DD HH:mm:ss'),
            y: data[value]
          })
        );
        setPlotData(tempData);
        setUnit('km/h');
      }
    }
  }, [dashboardData, currentTab]);

  return (
    <>
      <Card style={{ marginTop: '10px', top: '0px', paddingBottom: '20px' }}>
        <Img src={GradientImg} alt='gradient' width='100%' />

        <WeatherInfo>
          <h4 style={{ display: 'flex', fontSize: '32px', padding: '0px' }}>
            {dashboardData !== undefined
              ? Number(dashboardData.outdoor_weather.temperature.value).toFixed(
                  1
                )
              : 0}{' '}
            <span style={{ fontSize: '12px' }}>&#8451;</span>
          </h4>
          <div>
            <strong
              style={{ fontSize: '14px', display: 'flex', marginLeft: '20px' }}
            >
              {dashboardData !== undefined
                ? dashboardData.outdoor_weather.location
                : '-'}
            </strong>
            <span
              style={{
                fontSize: '10px',
                display: 'flex',
                marginLeft: '20px',
                marginTop: '5px'
              }}
            >
              {dashboardData !== undefined
                ? dashboardData.outdoor_weather.weather
                : '-'}
            </span>
          </div>
          <img src={Sunny} alt='sunny' style={{ marginLeft: 20 }} />
        </WeatherInfo>

        <div style={{ marginTop: '20px' }}>
          <WeatherDetail>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={Raining} alt='raining' />
              <Detial>
                <strong style={{ fontSize: '14px' }}>
                  {dashboardData !== undefined
                    ? dashboardData.outdoor_weather.precipitation
                    : 0}
                  %
                </strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>
                  Precipitation
                </small>
              </Detial>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Img src={AirQuality} alt='air' />
                <Detial>
                  <strong style={{ fontSize: '14px', display: 'flex' }}>
                    {dashboardData !== undefined
                      ? dashboardData.outdoor_weather.air_quality_index
                      : 0}{' '}
                    &nbsp; <LabelCard>Moderate</LabelCard>
                  </strong>
                  <small style={{ fontSize: '10px', color: '#BABDC6' }}>
                    Air Quality Index
                  </small>
                </Detial>
              </div>
            </div>
          </WeatherDetail>

          <WeatherDetail>
            <div style={{ width: '100%', display: 'flex' }}>
              <Img src={Humidity} alt='humi' />
              <Detial>
                <strong style={{ fontSize: '14px' }}>
                  {dashboardData !== undefined
                    ? dashboardData.outdoor_weather.relative_humidity.value
                    : 0}
                  %
                </strong>
                <small style={{ fontSize: '10px', color: '#BABDC6' }}>
                  Humidity
                </small>
              </Detial>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Img src={Wind} alt='wind' />
                <Detial>
                  <strong style={{ fontSize: '14px' }}>
                    {dashboardData !== undefined
                      ? dashboardData.outdoor_weather.wind_speed.value
                      : 0}{' '}
                    km/h
                  </strong>
                  <small style={{ fontSize: '10px', color: '#BABDC6' }}>
                    Wind
                  </small>
                </Detial>
              </div>
            </div>
          </WeatherDetail>
        </div>

        {plotData !== undefined ? (
          <div style={{ width: '100%', height: '145px' }}>
            <Header>
              <List onClick={() => setCurrentTab('temperature')}>
                Temperature
              </List>
              <List onClick={() => setCurrentTab('humidity')}>Humidity</List>
              <List onClick={() => setCurrentTab('wind')}>Wind</List>
            </Header>
            <LineChartComponent
              data={plotData !== undefined ? plotData : []}
              unit={unit}
            />
          </div>
        ) : (
          <LoadingPage height='145px' />
        )}
      </Card>
    </>
  );
};

export { WeatherOutDoor };
