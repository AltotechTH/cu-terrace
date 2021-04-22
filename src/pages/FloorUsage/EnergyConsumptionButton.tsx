import styled from 'styled-components';
import Chart from 'assets/images/graph.svg';
import Modal from 'react-modal';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    date: '1',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '2',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '3',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '4',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '5',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '6',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '7',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '8',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '9',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '10',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '11',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '12',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '13',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '14',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '15',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '16',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '17',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '18',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '19',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '20',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '21',
    actual: Math.floor(Math.random() * 100) + 30,
    predicted: 0,
  },
  {
    date: '22',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '23',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '24',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '25',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '26',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '27',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '28',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '29',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
  {
    date: '30',
    actual: 0,
    predicted: Math.floor(Math.random() * 100) + 30,
  },
];

const defs = [
  {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#38bcb2',
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: '#eed312',
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
];

const fill = [
  {
    match: {
      id: 'fries',
    },
    id: 'dots',
  },
  {
    match: {
      id: 'sandwich',
    },
    id: 'lines',
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    border: '0.5px solid #f3f3f3'
  },
};

const GraphImage = styled.img`
  width: 20px;
  height: 20px;
`;

const GraphText = styled.p`
  margin-left: 4px;
  font-size: 11px;
  color: #044e92;
  font-weight: bold;
`;

const GraphBlock = styled.div`
  width: 14%;
  height: 30px;
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #eff2f7;
  border-radius: 8px;
  padding: 0px 10px;
  cursor: pointer;
`;

export const EnergyConsumptionButton = ({ selectedGraph, closeModal, openModal }: any) => {
  return (
    <>
      <GraphBlock onClick={openModal}>
        <GraphImage src={Chart}></GraphImage>
        <GraphText>View Graph</GraphText>
      </GraphBlock>
      <Modal
        isOpen={selectedGraph}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div style={{ width: '1000px', height: '400px' }}>
          <ResponsiveBar
            data={data}
            keys={['actual', 'predicted']}
            indexBy="date"
            margin={{ top: 50, right: 50, bottom: 80, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#0E7EE4', '#E0F0FF']}
            defs={defs}
            fill={fill}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Date',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Energy Consumption (kWh)',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            labelSkipWidth={11}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 24,
                translateY: 64,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </Modal>
    </>
  );
};
