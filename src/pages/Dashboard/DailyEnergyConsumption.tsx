import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from './styles'


const DailyEnergyConsumption = (data: any) => {
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
        <ResponsiveContainer width="100%" height={130}>
          <BarChart
            width={500}
            height={300}
            data={data.data}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#57a2e7" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

    </div>
  )
}

export { DailyEnergyConsumption }
