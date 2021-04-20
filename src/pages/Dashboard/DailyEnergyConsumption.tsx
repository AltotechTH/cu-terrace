import { useStyles } from './useStyles'
import Paper from '@material-ui/core/Paper';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const DailyEnergyConsumption = (data: any) => {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.paper}>
        {/* <div style={{ width: "100%", height: 150 }}> */}
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
            <Bar dataKey="uv" fill="#57a2e7" />
            <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
              <h2>Daily Energy Consumption Trend</h2>
            </foreignObject>
            <foreignObject x="0" y="130" width="500" height="150" fontSize={10}>
              <h4>Today : 90 kWh</h4>
            </foreignObject>
          </BarChart>
        </ResponsiveContainer>

        {/* </div> */}
      </Paper>

    </div>
  )
}

export { DailyEnergyConsumption }
