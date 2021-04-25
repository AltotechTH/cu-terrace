
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from './styles'

const EnergyConsumptionByFloor = (data: any) => {
  return (
    <>
      <Card style={{ marginTop: '20px', height: '208px' }}>
        {/* <div style={{ width: "100%", height: 150 }}> */}

        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '16px' }}>Energy Consumption by Floor</div>
        <ResponsiveContainer width="100%" height={150}>

          <BarChart
            width={500}
            height={300}
            data={data.data}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
            <Bar dataKey="pv" fill="#447cf5" />
          </BarChart>
        </ResponsiveContainer>

        {/* </div> */}
      </Card>

    </>
  )
}

export { EnergyConsumptionByFloor }
