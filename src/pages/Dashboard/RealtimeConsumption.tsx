// import { convertDate, convertValue } from './useStyles'
import { Card } from './styles'
import { LineChartComponent } from 'components/Graph/GraphComponent'
import { LoadingPage } from 'components/LoadingPage/LoadingPage'


interface RealtimeType {
  dashboardData: any;
  powerPlot: any;
}



const RealtimeConsumption = ({ dashboardData, powerPlot }: RealtimeType) => {

  // console.log(powerPlot)

  const powerData = [
    {
      id: 'Power',
      data: powerPlot !== undefined ? powerPlot : [],
    },
  ];


  return (
    <>
      <Card style={{ height: '208px' }}>
        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '18px' }}>
          <strong style={{
            display: 'flex', justifyContent: 'flex-start',
            width: '100%'
          }}>
            Now
          </strong>
          <strong style={{
            display: 'flex', justifyContent: 'flex-end',
            width: '100%'
          }}>
            {dashboardData !== undefined ? dashboardData.kw_now.kw : 0} kW
          </strong>
        </div>
        <div style={{ padding: '0px 20px 0px 20px', display: 'flex', fontSize: '14px' }}>Real-time Power Consumption</div>

        {powerPlot !== undefined ? <div style={{ width: '100%', height: '145px' }}>
          <h4 style={{ color: 'black', textAlign: 'center' }}></h4>
          <LineChartComponent data={powerData !== undefined ? powerData : []} unit="kW" />
        </div> : <LoadingPage height='145px' />}
      </Card>
    </>
  );
};

export { RealtimeConsumption };
