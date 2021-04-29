// import { Tooltip, Legend, ResponsiveContainer, PieChart, Cell, Label, Pie } from 'recharts'
import { Card } from './styles'
import { PieChartComponent } from 'components/Graph/GraphComponent'
import { LoadingPage } from 'components/LoadingPage/LoadingPage'


const EnergyConsumptionByZone = (data: any) => {
  const data1 = data.data
  return (
    <>

      <Card style={{ marginTop: '20px', height: '208px' }}>
        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '16px' }}>Energy Consumption by Zone</div>
        {data1 !== undefined ? <div style={{ width: '100%', height: '180px' }}>
          <PieChartComponent data={data1 !== undefined ? data1 : []} />
        </div> : <LoadingPage height='180px' />}

      </Card>



    </>
  )
}

export { EnergyConsumptionByZone }
