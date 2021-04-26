import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SmartCityImage from 'assets/buildingsvg/smartcity.jpeg';
import UpIcon from 'assets/images/icon/up.svg';
import DownIcon from 'assets/images/icon/down.svg';
import FloorInformation from './FloorInformation';
import Circle from 'assets/images/locationDot.svg';
import { building } from 'api/services/Building';
import { OverviewTable } from './OverviewTable';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Body = styled.div`
  height: 500px;
  width: 100%;
`;

const BackgroundImage = styled.div<any>`
  height: 100%;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
`;

const SummaryBox = styled.div`
  width: 100%;
  height: 144px;
  padding: 17px;
  background-color: #f7f9fc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

const SummaryBoxHeader = styled.p`
  font-size: 15px;
  color: #212529;
`;

const SummaryBoxValue = styled.p`
  font-size: 32px;
  color: #212529;
  font-weight: 500;
`;

const SummaryBoxUnit = styled.p`
  font-size: 32px;
  color: #212529;
  margin-left: 8px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const PercentChange = styled.p`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
  margin-left: 5px;
`;

const Comparative = styled.p`
  font-size: 16px;
  color: #838383;
  font-weight: 400;
  margin-left: 5px;
`;

const HeaderText = styled.h3`
  color: black;
  margin-left: 20px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
      marginLeft: '74px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '10px',
    },
    buttonroot: {
      color: 'black',
    },
    span: {
      borderBottom: '1px soilid black',
    },
  })
);

export const Overview = () => {
  const classes = useStyles();
  const [buildingData, setBuildingData] = useState([
    {
      building_name: '...',
      building_rank: '...',
      energy_intensity: '...',
      energy_kWh: '...',
      energy_use_percent: '...',
      hotel: '...',
    },
  ]);

  useEffect(() => {
    building.getBuildingAPI().then((res: any) => {
      setBuildingData(res.data.buildings);
    });
  });

  return (
    <>
      <div className={classes.root}>
        <div style={{ height: 'calc(100vh - 80px)' }}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Body>
                <BackgroundImage image={SmartCityImage} />
                <img
                  style={{
                    position: 'absolute',
                    left: '38.3%',
                    top: '26%',
                    width: '25px',
                    cursor: 'pointer',
                  }}
                  src={Circle}
                  alt="circle"
                  onClick={() => (window.location.href = '/dashboard')}
                />
                <img
                  style={{ position: 'absolute', left: '22%', top: '20%', width: '25px' }}
                  src={Circle}
                  alt="circle"
                />
                <img
                  style={{ position: 'absolute', left: '24%', top: '35%', width: '25px' }}
                  src={Circle}
                  alt="circle"
                />
                <img
                  style={{ position: 'absolute', left: '45%', top: '50%', width: '25px' }}
                  src={Circle}
                  alt="circle"
                />
                <img
                  style={{ position: 'absolute', left: '53%', top: '29%', width: '25px' }}
                  src={Circle}
                  alt="circle"
                />
                <img
                  style={{ position: 'absolute', left: '70%', top: '65%', width: '25px' }}
                  src={Circle}
                  alt="circle"
                />

                <FloorInformation
                  header="CU Terrace"
                  size={32}
                  floors={'FL10'}
                  right={40}
                  top={30}
                  onClick={() => (window.location.href = '/dashboard')}
                />
                <OverviewTable rows={buildingData} />
              </Body>
            </Grid>
            <Grid item xs={12}>
              <HeaderText>Intelligent Energy Management</HeaderText>
            </Grid>
            <Grid item sm={12} style={{ padding: '10px 30px' }}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <SummaryBox>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <SummaryBoxHeader>Total Energy Consumption</SummaryBoxHeader>
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                        <SummaryBoxValue>1,053,403</SummaryBoxValue>
                        <SummaryBoxUnit></SummaryBoxUnit>
                      </Grid>
                      <Grid item xs={12} style={{ display: 'flex' }}>
                        <Icon src={DownIcon} />
                        <PercentChange>-0.84%</PercentChange>
                        <Comparative>than yesterday</Comparative>
                      </Grid>
                    </Grid>
                  </SummaryBox>
                </Grid>
                <Grid item xs={3}>
                  <SummaryBox>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <SummaryBoxHeader>GHGs Equivalent to Metric Tons CO2</SummaryBoxHeader>
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                        <SummaryBoxValue>5,000</SummaryBoxValue>
                        <SummaryBoxUnit></SummaryBoxUnit>
                      </Grid>
                      <Grid item xs={12} style={{ display: 'flex' }}>
                        <Icon src={UpIcon} />
                        <PercentChange>-0.84%</PercentChange>
                        <Comparative>than yesterday</Comparative>
                      </Grid>
                    </Grid>
                  </SummaryBox>
                </Grid>
                <Grid item xs={3}>
                  <SummaryBox>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <SummaryBoxHeader>GHGs Equivalent to Trees</SummaryBoxHeader>
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                        <SummaryBoxValue>6,000</SummaryBoxValue>
                        <SummaryBoxUnit></SummaryBoxUnit>
                      </Grid>
                      <Grid item xs={12} style={{ display: 'flex' }}>
                        <Icon src={DownIcon} />
                        <PercentChange>-0.84%</PercentChange>
                        <Comparative>than yesterday</Comparative>
                      </Grid>
                    </Grid>
                  </SummaryBox>
                </Grid>
                <Grid item xs={3}>
                  <SummaryBox>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <SummaryBoxHeader>GHGs Equivalent to Barrel of Oil</SummaryBoxHeader>
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                        <SummaryBoxValue>2,000</SummaryBoxValue>
                        <SummaryBoxUnit></SummaryBoxUnit>
                      </Grid>
                      <Grid item xs={12} style={{ display: 'flex' }}>
                        <Icon src={DownIcon} />
                        <PercentChange>-0.84%</PercentChange>
                        <Comparative>than yesterday</Comparative>
                      </Grid>
                    </Grid>
                  </SummaryBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
