import React from 'react'
import { useStyles } from './useStyles'
import Paper from '@material-ui/core/Paper';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from './styles'

const EnergyConsumptionByFloor = (data: any) => {
  const classes = useStyles()
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
            {/* <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
              <h2>Energy Consumption By Floor</h2>
            </foreignObject> */}
            {/* <foreignObject x="200" y="10" width="500" height="150" fontSize={10}>
                  <Paper style={{ width: 100, padding: '10px 0px 10px 0px' }}>
                    <strong style={{ color: '#57a2e7', fontSize: 15 }}>Rank 8</strong> <br />
                    <small >Fl. 14: 48 kWh</small> <br />
                  </Paper>
                </foreignObject> */}
          </BarChart>
        </ResponsiveContainer>

        {/* </div> */}
      </Card>

    </>
  )
}

export { EnergyConsumptionByFloor }
