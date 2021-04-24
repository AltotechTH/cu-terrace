import React from 'react'
import { useStyles, } from './useStyles'
import Paper from '@material-ui/core/Paper';
import { Tooltip, Legend, ResponsiveContainer, PieChart, Cell, Label, Pie } from 'recharts'
import { Card } from './styles'

const COLORS = ['#0E7EE4', '#00A3FF', '#C0E8FF', '#CEF7E3'];


const EnergyConsumptionByZone = (data: any) => {
  const classes = useStyles()
  const data1 = data.data
  return (
    <>

      <Card style={{ marginTop: '20px', height: '208px' }}>
        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '16px' }}>Energy Consumption by Zone</div>
        <ResponsiveContainer width="100%" height={150}>

          <PieChart >
            <Pie
              data={data1}
              cx={100}
              cy={80}
              dataKey="value"
              innerRadius={50}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={2}
            >

              <Label
                value="235" position="center" className='label-top' fontSize='15px'
              />
              <Label
                value="MWh" position="centerTop" className='label' fontSize='10px'
              />
              {
                data1.map((entry: any, index: any) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip />
            <Legend layout='vertical' verticalAlign="middle" align="right" style={{ fontSize: '12px' }} />
            {/* <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
              <h2>Energy Consumption By Zone</h2>
            </foreignObject> */}
          </PieChart>


        </ResponsiveContainer>

        {/* </div> */}
      </Card>



    </>
  )
}

export { EnergyConsumptionByZone }
