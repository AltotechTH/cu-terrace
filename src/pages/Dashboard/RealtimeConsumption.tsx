import { convertDate, convertValue } from './useStyles'
import { Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from './styles'


interface RealtimeType {
  data: any;
  dashboardData: any;
}



const RealtimeConsumption = ({ data, dashboardData }: RealtimeType) => {

  // console.log(dashboardData)

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

        <ResponsiveContainer width='100%' height={150}>
          <ComposedChart
            data={data}
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
          </ComposedChart>
        </ResponsiveContainer>

      </Card>
    </>
  );
};

export { RealtimeConsumption };
