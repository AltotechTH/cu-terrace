import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import { Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyle.css';
import CloseButtonIcon from 'assets/images/close.svg';
import CalendarIconImage from 'assets/images/calendarIcon.svg';

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
    border: '0.5px solid #f3f3f3',
  },
  overlay: {
    backgroundColor: 'rgba(119, 119, 119, 0.75)',
    zIndex: 999
  }
};

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

const HeaderTab = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled.h4`
  color: black;
`;

const HeaderTextFloor = styled.h4`
  color: black;
  font-weight: 400;
  margin-left: 5px;
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
  cursor: pointer;
`;

const CalendarIconBox = styled.div`
  width: 27px;
  height: 27px;
  padding: 5px;
  background-color: #eff2f7;
  border-radius: 5px 0px 0px 5px;
`;

const CalendarIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export const GraphModal = ({
  selectedGraphOpen,
  closeModal,
  selectedFloor,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: any) => {
  return (
    <>
      <Modal
        isOpen={selectedGraphOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <HeaderTab>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <HeaderText>Energy Consumption :</HeaderText>
              <HeaderTextFloor>{selectedFloor}</HeaderTextFloor>
            </Grid>
            <Grid item xs={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <CalendarIconBox>
                <CalendarIcon src={CalendarIconImage} />
              </CalendarIconBox>
              <DatePicker
                className="input-class-first"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
              />
              <DatePicker
                className="input-class-last"
                selected={endDate}
                onChange={(date: any) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Stop date"
              />
              {/* <DateRangePicker /> */}
            </Grid>
            <Grid item xs={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <CloseButton src={CloseButtonIcon} onClick={closeModal} />
            </Grid>
          </Grid>
        </HeaderTab>
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
