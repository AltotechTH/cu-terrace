import { Card } from './styles'
import { BarChartComponent } from 'components/Graph/GraphComponent'
import { LoadingPage } from 'components/LoadingPage/LoadingPage'


const DailyEnergyConsumption = ({ data }: any) => {
  return (
    <div>
      <Card style={{ marginTop: '20px', height: '208px' }}>
        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '18px' }}>
          <strong style={{
            display: 'flex', justifyContent: 'flex-start',
            width: '100%'
          }}>
            Today
          </strong>
          <strong style={{
            display: 'flex', justifyContent: 'flex-end',
            width: '100%'
          }}>
            90kW
          </strong>
        </div>
        <div style={{ padding: '0px 20px 0px 20px', display: 'flex', fontSize: '14px' }}>Daily Energy Consumption</div>
        {data !== undefined ? <div style={{ width: '100%', height: '145px' }}>
          {/* <h4 style={{ color: 'black', textAlign: 'center' }}></h4> */}
          <BarChartComponent data={data !== undefined ? data : []} yUnit="kW" xUnit='Days' />
        </div> : <LoadingPage height='145px' />}
      </Card>

    </div>
  )
}

export { DailyEnergyConsumption }
