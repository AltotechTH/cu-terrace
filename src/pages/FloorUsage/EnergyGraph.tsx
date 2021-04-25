import { ResponsiveLine } from "@nivo/line";
import moment from 'moment'

export const EnergyGraph = (prop: any) => (

  < ResponsiveLine

    data={prop.data}
    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d %H:%M:%S",
      precision: "minute"
    }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    // xFormat="time:%Y-%m-%d %H:%M:%S"
    xFormat="time:%Y-%m-%d %H:%M:%S"
    axisBottom={{
      format: "%d, %H:%M",
      // tickValues: "every 1 hour",
      legend: "Time (Date, h:m)",
      legendOffset: 34,
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      // tickRotation: 45,
      legendPosition: "middle"
    }}
    enableSlices="x"
    sliceTooltip={({ slice }) => {
      const date = slice.points[0].data.xFormatted
      return (
        <div>
          <strong style={{ color: 'black' }}>
            {`${moment(date).format('MMMM Do YYYY, h:mm')}`}
          </strong>
          {slice.points.map(point => (
            <div key={point.id}>
              <strong style={{ color: 'red' }}>
                {`${point.serieId} ${point.data.yFormatted}`}
              </strong>
            </div>
          ))}
        </div>
      )
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: `${prop.unit}`,
      legendOffset: -50,
      legendPosition: 'middle'
    }}
    enablePoints={false}
    colors={{ scheme: 'category10' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ theme: 'background' }}
    pointLabelYOffset={- 12}
    useMesh={true}
    enableGridX={false}
    enableGridY={false}
    legends={[]}
  // legends={
  //   [
  //     {
  //       anchor: 'bottom-right',
  //       direction: 'column',
  //       justify: true,
  //       translateX: 100,
  //       translateY: 0,
  //       itemsSpacing: 0,
  //       itemDirection: 'left-to-right',
  //       itemWidth: 80,
  //       itemHeight: 20,
  //       itemOpacity: 0.75,
  //       symbolSize: 12,
  //       symbolShape: 'circle',
  //       symbolBorderColor: 'rgba(0, 0, 0, .5)',
  //       effects: [
  //         {
  //           on: 'hover',
  //           style: {
  //             itemBackground: 'rgba(0, 0, 0, .03)',
  //             itemOpacity: 1
  //           }
  //         }
  //       ]
  //     }
  //   ]}
  />
)
