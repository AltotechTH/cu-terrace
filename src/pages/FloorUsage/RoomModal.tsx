import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyle.css';
import CloseButtonIcon from 'assets/images/close.svg';
import CalendarIconImage from 'assets/images/calendarIcon.svg';
import { Tabs, Tab } from 'components/StyledTabs/StyledTabs';
import InvoiceMockupImage from 'assets/images/Invoice.svg';
import UpIcon from 'assets/images/icon/up.svg';
import DownIcon from 'assets/images/icon/down.svg';
import CircleIcon from 'assets/images/Circle.svg';
import PowerChart from 'assets/images/powerChart.png';
import Select from 'react-select';

const SummaryBox = styled.div`
  width: 100%;
  height: 144px;
  padding: 17px;
  background-color: #f7f9fc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

const SummaryBoxHeader = styled.p`
  font-size: 15px;
  color: #212529;
`;

const SummaryBoxValue = styled.p`
  font-size: 32px;
  color: #212529;
  font-weight: 500;
`;

const SummaryBoxUnit = styled.p`
  font-size: 32px;
  color: #212529;
  margin-left: 8px;
`;

const PersonSummaryBox = styled.div`
  width: 100%;
  height: 110px;
  padding: 10px;
  background-color: #f7f9fc;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

const PersonDetail = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: black;
  margin-top: 12px;
  margin: 0px;
  padding: 0px;
  width: 50%;
`;

const EnergySummaryBox = styled.div`
  width: 100%;
  padding: 17px;
  background-color: #f7f9fc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderText = styled.h3`
  color: black;
`;

const HeaderTextFloor = styled.h3`
  color: black;
  font-weight: 400;
  margin-left: 5px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  margin: 5px;
  cursor: pointer;
`;

const CalendarIconBox = styled.div`
  width: 27px;
  height: 27px;
  padding: 4px;
  background-color: #eff2f7;
  border-radius: 5px 0px 0px 5px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const PercentChange = styled.p`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
  margin-left: 5px;
`;

const Comparative = styled.p`
  font-size: 16px;
  color: #838383;
  font-weight: 400;
  margin-left: 5px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '60%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    border: '0.5px solid #f3f3f3',
    padding: '25px',
    maxHeight: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(119, 119, 119, 0.75)'
  }
};

const ShortNameBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FullWidthIcon = styled.img`
  height: 100%;
  position: absolute;
  padding: 10px;
`;

const ShortNameText = styled.p`
  font-size: 25px;
  font-weight: 500;
  z-index: 9999;
  color: black;
`;

const InvoiceImage = styled.img`
  width: 100%;
`;

const options = [
  { value: 'activePower', label: 'Active Power' },
  { value: 'reactivePower', label: 'Reactive Power' },
  { value: 'apparentPower', label: 'Apparent Power' },
  { value: 'current', label: 'Current' },
  { value: 'voltage', label: 'Voltage' },
  { value: 'prequency', label: 'Frequency' },
  { value: 'powerFactor', label: 'Power Factor' },
];

export const RoomModal = ({
  selectedRoomOpen,
  closeModal,
  selectedRoom,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedModalTab,
  handleChangeModalTab,
}: any) => {
  const [value, setValue] = useState<{}[]>([{ value: 'activePower', label: 'Active Power' }]);

  const handleChange = (newValue: any, actionMeta: any) => {
    setValue(newValue);
  };
  return (
    <>
      <Modal
        isOpen={selectedRoomOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <Grid container spacing={3}>
          <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  paddingBottom: '0px',
                  paddingTop: '30px',
                }}
              >
                <HeaderText>Room :</HeaderText>
                <HeaderTextFloor>{selectedRoom}</HeaderTextFloor>
              </Grid>
              <Grid item xs={12}>
                <Tabs>
                  <Tab
                    defaultValue={'Information'}
                    selectedTab={selectedModalTab}
                    onClick={handleChangeModalTab}
                  />
                  <Tab
                    defaultValue={'Energy'}
                    selectedTab={selectedModalTab}
                    onClick={handleChangeModalTab}
                  />
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <PersonSummaryBox>
              <Grid container spacing={3} style={{ height: '100%' }}>
                <Grid item xs={3} style={{ padding: '0px' }}>
                  <ShortNameBox>
                    <FullWidthIcon src={CircleIcon} />
                    <ShortNameText>JD</ShortNameText>
                  </ShortNameBox>
                </Grid>
                <Grid item xs={9} style={{ paddingTop: '0px', display: 'flex' }}>
                  <Grid container spacing={3} style={{ height: '100%' }}>
                    <Grid item xs={4}>
                      <h5 style={{ color: 'black', marginTop: '12px' }}>John Doe</h5>
                    </Grid>
                    <Grid item xs={4}>
                      <h5 style={{ color: 'black', marginTop: '12px' }}>{selectedRoom}</h5>
                    </Grid>
                    <Grid item xs={4}>
                      <h5 style={{ color: 'black', marginTop: '12px' }}>089-XXX-XXXX</h5>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Floor :</PersonDetail>
                      <PersonDetail>6</PersonDetail>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Contract No.:</PersonDetail>
                      <PersonDetail>CT0809/2020</PersonDetail>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Building :</PersonDetail>
                      <PersonDetail>Cu Terrace</PersonDetail>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Meter No. :</PersonDetail>
                      <PersonDetail>326414044</PersonDetail>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Zone :</PersonDetail>
                      <PersonDetail>Front</PersonDetail>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ paddingBottom: '0px', paddingTop: '0px', display: 'flex' }}
                    >
                      <PersonDetail>Meter ID :</PersonDetail>
                      <PersonDetail>A1-F6-03</PersonDetail>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </PersonSummaryBox>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={4}>
            <SummaryBox>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SummaryBoxHeader>Total Energy Consumption</SummaryBoxHeader>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                  <SummaryBoxValue>8</SummaryBoxValue>
                  <SummaryBoxUnit>kWh</SummaryBoxUnit>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex' }}>
                  <Icon src={DownIcon} />
                  <PercentChange>-0.84%</PercentChange>
                  <Comparative>than yesterday</Comparative>
                </Grid>
              </Grid>
            </SummaryBox>
          </Grid>
          <Grid item xs={4}>
            <SummaryBox>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SummaryBoxHeader>Total Energy Consumption</SummaryBoxHeader>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                  <SummaryBoxValue>8</SummaryBoxValue>
                  <SummaryBoxUnit>kWh</SummaryBoxUnit>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex' }}>
                  <Icon src={DownIcon} />
                  <PercentChange>-0.84%</PercentChange>
                  <Comparative>than last month</Comparative>
                </Grid>
              </Grid>
            </SummaryBox>
          </Grid>
          <Grid item xs={4}>
            <SummaryBox>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SummaryBoxHeader>Total Energy Consumption</SummaryBoxHeader>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: '0px', display: 'flex' }}>
                  <SummaryBoxValue>8</SummaryBoxValue>
                  <SummaryBoxUnit>kWh</SummaryBoxUnit>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex' }}>
                  <Icon src={UpIcon} />
                  <PercentChange>0.84%</PercentChange>
                  <Comparative>than last month</Comparative>
                </Grid>
              </Grid>
            </SummaryBox>
          </Grid>
        </Grid>

        {selectedModalTab === 'Information' && (
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={8}>
              <HeaderText>Invoice</HeaderText>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}
            >
              <CalendarIconBox>
                <Icon src={CalendarIconImage} />
              </CalendarIconBox>
              <DatePicker
                className="input-class-first"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                popperPlacement="left-end"
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
                popperPlacement="left-end"
              />
            </Grid>
            <Grid item xs={12}>
              <InvoiceImage src={InvoiceMockupImage} />
            </Grid>
          </Grid>
        )}
        {selectedModalTab === 'Energy' && (
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={8}>
              <HeaderText>Electric Meter Performance</HeaderText>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}
            >
              <CalendarIconBox>
                <Icon src={CalendarIconImage} />
              </CalendarIconBox>
              <DatePicker
                className="input-class-first"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                popperPlacement="left-end"
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
                popperPlacement="left-end"
              />
            </Grid>

            <Grid item xs={4}>
              <Select
                value={value}
                defaultValue={[options[0]]}
                onChange={handleChange}
                isMulti
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                  input: (styles) => ({ ...styles, color: 'black' }),
                  option: (styles) => ({ ...styles, color: 'black' }),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {value &&
                value.map((data: any) => {
                  return (
                    <EnergySummaryBox key={data}>
                      <InvoiceImage src={PowerChart} />
                    </EnergySummaryBox>
                  );
                })}
            </Grid>
          </Grid>
        )}
        <CloseButton src={CloseButtonIcon} onClick={closeModal} />
      </Modal>
    </>
  );
};
