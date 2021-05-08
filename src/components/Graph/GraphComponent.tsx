import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import moment from 'moment';

export const LineChartComponent = (prop: any) => (
  <ResponsiveLine
    data={prop.data}
    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d %H:%M:%S',
      precision: 'second',
      useUTC: false,
      stacked: true
    }}
    yScale={{
      type: 'linear',
      min: 0,
      max: 'auto',
      stacked: false,
      reverse: false
    }}
    yFormat=' >-.2f'
    axisTop={null}
    axisRight={null}
    xFormat='time:%Y-%m-%d %H:%M:%S'
    axisBottom={{
      format: '%H:%M',
      // tickValues: 'every 2 hour',
      legend: 'Time',
      legendOffset: 34,
      orient: 'bottom',
      tickSize: 2,
      tickPadding: 5,
      legendPosition: 'middle',
      tickRotation: -25
    }}
    enableSlices='x'
    sliceTooltip={({ slice }) => {
      const date = slice.points[0].data.xFormatted;
      return (
        <div
          style={{
            backgroundColor: 'white',
            fontSize: '10px',
            border: '1px solid #dfdfdf',
            padding: '2px',
            borderRadius: '8px'
          }}
        >
          <strong style={{ color: 'black' }}>
            {`${moment(date).format('MMMM Do YYYY, H:mm')}`}
          </strong>
          {slice.points.map(point => (
            <div key={point.id}>
              <strong style={{ color: 'red' }}>
                {`${point.serieId} ${point.data.yFormatted} ${prop.unit}`}
              </strong>
            </div>
          ))}
        </div>
      );
    }}
    axisLeft={{
      tickValues: 3,
      orient: 'left',
      tickSize: 2,
      tickPadding: 3,
      tickRotation: 0,
      legend: `${prop.unit}`,
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    enablePoints={false}
    colors={{ scheme: 'category10' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ theme: 'background' }}
    pointLabelYOffset={-12}
    useMesh={true}
    enableGridX={false}
    enableGridY={false}
    legends={[]}
    curve='catmullRom'
  />
);

export const PieChartComponent = (prop: any) => (
  <ResponsivePie
    data={prop.data}
    margin={{ top: 20, right: 80, bottom: 80, left: 0 }}
    innerRadius={0.8}
    padAngle={1}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'pastel1' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor='#333333'
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'ruby'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'c'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'go'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'python'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'scala'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'lisp'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'elixir'
        },
        id: 'lines'
      },
      {
        match: {
          id: 'javascript'
        },
        id: 'lines'
      }
    ]}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 50,
        translateY: 0,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 10,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);

export const BarChartComponent = (prop: any) => (
  <ResponsiveBar
    data={prop.data}
    // keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy='label'
    margin={{ top: 30, right: 20, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    // indexScale={{ type: 'band', round: true }}
    colors={['#0E7EE4', '#E0F0FF']}
    borderColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: prop.xUnit,
      legendPosition: 'middle',
      legendOffset: 32,
      format: ticks => ticks.toString().split('_')[1]
    }}
    axisLeft={{
      tickValues: 3,
      tickSize: 2,
      tickPadding: 5,
      tickRotation: 0,
      legend: prop.yUnit,
      legendPosition: 'middle',
      legendOffset: -40
    }}
    enableGridY={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
    // legends={[
    //   {
    //     dataFrom: 'keys',
    //     anchor: 'bottom-right',
    //     direction: 'column',
    //     justify: false,
    //     translateX: 120,
    //     translateY: 0,
    //     itemsSpacing: 2,
    //     itemWidth: 100,
    //     itemHeight: 20,
    //     itemDirection: 'left-to-right',
    //     itemOpacity: 0.85,
    //     symbolSize: 20,
    //     effects: [
    //       {
    //         on: 'hover',
    //         style: {
    //           itemOpacity: 1
    //         }
    //       }
    //     ]
    //   }
    // ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
