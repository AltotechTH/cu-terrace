import { useStyles, convertDate, convertValue } from './useStyles'
import Paper from '@material-ui/core/Paper';
import { Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const RealtimeConsumption = (data: any) => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper}>
        {/* <div style={{ width: "100%", height: 150 }}> */}
        <ResponsiveContainer width='100%' height={150}>
          <ComposedChart
            data={data.data}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <filter id='shadow' height='200%'>
                <feGaussianBlur
                  in='SourceAlpha'
                  stdDeviation='7'
                  result='blur'
                />
                <feOffset in='blur' dx='0' dy='7' result='offsetBlur' />
                <feFlood
                  floodColor='#006991'
                  floodOpacity='0.5'
                  result='offsetColor'
                />
                <feComposite
                  in='offsetColor'
                  in2='offsetBlur'
                  operator='in'
                  result='offsetBlur'
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>
            <XAxis dataKey='time' tickFormatter={convertDate} fontSize={10} />
            <YAxis tickFormatter={convertValue} fontSize={10} />
            <Tooltip />
            <CartesianGrid vertical={false} stroke='#DDD' />

            <Line
              type='monotone'
              unit='M'
              strokeLinecap='round'
              strokeWidth={2}
              filter='url(#shadow)'
              style={{ strokeDasharray: `0 0 0` }}
              dataKey='close'
              stroke='#57a2e7'
              dot={false}
              legendType='none'
            />
            <foreignObject x='30' y='0' width='300' height='150' fontSize={10}>
              <h2>Real-time Power Consumption</h2>
            </foreignObject>
          </ComposedChart>
        </ResponsiveContainer>

        {/* </div> */}
      </Paper>
    </>
  );
};

export { RealtimeConsumption };
