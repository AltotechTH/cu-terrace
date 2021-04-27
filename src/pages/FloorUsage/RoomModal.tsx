import { useState, useMemo } from 'react';
import Modal from 'react-modal';
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
import Select from 'react-select';
import { historyApi } from 'api/services/History';
import { deviceApi } from 'api/services/Devices';
import { EnergyGraph } from './EnergyGraph';
import moment from 'moment';
import {
  CalendarIconBox,
  CloseButton,
  Comparative,
  EnergySummaryBox,
  FullWidthIcon,
  HeaderText,
  HeaderTextFloor,
  Icon,
  InvoiceImage,
  PercentChange,
  PersonDetail,
  PersonSummaryBox,
  ShortNameBox,
  ShortNameText,
  SummaryBox,
  SummaryBoxHeader,
  SummaryBoxUnit,
  SummaryBoxValue,
  customStyles,
} from './Styled';

const options = [
  { value: 'activePower', label: 'Active Power' },
  { value: 'reactivePower', label: 'Reactive Power' },
  { value: 'apparentPower', label: 'Apparent Power' },
  { value: 'current', label: 'Current' },
  { value: 'voltage', label: 'Voltage' },
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
  const [fetchData, setFetchData] = useState<[]>();
  const [fetchDevice, setFetchDevice] = useState<[]>();
  // const [energyPlot, setEnergyPlot] = useState()
  const [powerPlot, setPowerPlot] = useState();
  const [powerApparentPlot, setPowerApparentPlot] = useState();
  const [powerReactivePlot, setPowerReactivePlot] = useState();
  const [currentPlot, setCurrentPlot] = useState();
  const [voltagePlot, setVoltagePlot] = useState();
  const [pfPlot, setPfPlot] = useState();

  const handleChange = (newValue: any, actionMeta: any) => {
    setValue(newValue);
    console.log(newValue);
  };

  function Energy(
    deviceId: string,
    sub_dev: number,
    device_activity: boolean,
    startDate: any,
    stopDate: any,
    sampling_time: number
  ) {
    historyApi
      .getHistoryAPI(deviceId, sub_dev, device_activity, startDate, stopDate, sampling_time)
      .then((res: any) => setFetchData(res?.data['results']));
  }

  function Devices(room: string) {
    deviceApi
      .getDeviceAPI(room)
      .then((res: any) => setFetchDevice(res?.data['devices'][0]['device_id']))
      .catch(() => {
        setFetchData(fetchDevice);
      });
  }

  function convertToPlot(histData: any) {
    if (histData) {
      let tmpCurrent: any = [];
      let tmpPowerReactive: any = [];
      let tmpPowerApparent: any = [];
      let tmpVoltage: any = [];
      let tmpPower: any = [];
      let tmpPF: any = [];

      Object.values(histData).forEach((val: any, index: number) => {
        tmpPower.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['power'],
        });
        tmpVoltage.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['voltage'],
        });
        tmpCurrent.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['current'],
        });
        tmpPowerReactive.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['power_reactive'],
        });
        tmpPowerApparent.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['power_apparent'],
        });
        tmpPF.push({
          x: moment(moment(val['timestamp']).format()).format('YYYY-MM-DD HH:mm:ss'),
          y: val['power_factor'],
        });
      });

      setPowerPlot(tmpPower);
      setPowerReactivePlot(tmpPowerReactive);
      setPowerApparentPlot(tmpPowerApparent);
      setVoltagePlot(tmpVoltage);
      setCurrentPlot(tmpCurrent);
      setPfPlot(tmpPF);
    }
  }

  useMemo(() => {
    if (selectedRoom !== undefined) {
      Devices(String(selectedRoom).substr(1, 3));
    }
    // eslint-disable-next-line
  }, [selectedRoom]);

  useMemo(() => {
    if (selectedModalTab === 'Energy' && startDate !== undefined) {
      Energy(String(fetchDevice), 0, false, startDate, endDate, 15);
    }
  }, [startDate, endDate, selectedModalTab, fetchDevice]);

  useMemo(() => {
    convertToPlot(fetchData);
  }, [fetchData]);

  const powerData = [
    {
      id: 'Power',
      data: fetchData !== undefined ? powerPlot : [],
    },
  ];

  const powerReactiveData = [
    {
      id: 'Power Reactive',
      data: fetchData !== undefined ? powerReactivePlot : [],
    },
  ];

  const powerApparentData = [
    {
      id: 'Power Apparent',
      data: fetchData !== undefined ? powerApparentPlot : [],
    },
  ];

  const currentData = [
    {
      id: 'Current',
      data: fetchData !== undefined ? currentPlot : [],
    },
  ];

  const voltageData = [
    {
      id: 'Voltage',
      data: fetchData !== undefined ? voltagePlot : [],
    },
  ];

  const pfData = [
    {
      id: 'Power factor',
      data: fetchData !== undefined ? pfPlot : [],
    },
  ];

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

            {/* ## BEGIN Chart plot */}
            <Grid item xs={12}>
              {value &&
                value.map((data: any, index: number) => {
                  // { console.log(data['value']) }
                  return (
                    <>
                      {data['value'] === 'activePower' && (
                        <EnergySummaryBox key={index}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {powerData[0]['id']}
                            </h4>
                            <EnergyGraph unit="kW" data={powerData} />
                          </div>
                        </EnergySummaryBox>
                      )}

                      {data['value'] === 'reactivePower' && (
                        <EnergySummaryBox key={index + 1}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index + 1} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {powerReactiveData[0]['id']}
                            </h4>
                            <EnergyGraph unit="kVAR" data={powerReactiveData} />
                          </div>
                        </EnergySummaryBox>
                      )}

                      {data['value'] === 'apparentPower' && (
                        <EnergySummaryBox key={index + 2}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index + 2} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {powerApparentData[0]['id']}
                            </h4>
                            <EnergyGraph unit="kVA" data={powerApparentData} />
                          </div>
                        </EnergySummaryBox>
                      )}

                      {data['value'] === 'current' && (
                        <EnergySummaryBox key={index + 3}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index + 3} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {currentData[0]['id']}
                            </h4>
                            <EnergyGraph unit="A" data={currentData} />
                          </div>
                        </EnergySummaryBox>
                      )}

                      {data['value'] === 'voltage' && (
                        <EnergySummaryBox key={index + 4}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index + 4} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {voltageData[0]['id']}
                            </h4>
                            <EnergyGraph unit="V" data={voltageData} />
                          </div>
                        </EnergySummaryBox>
                      )}

                      {data['value'] === 'powerFactor' && (
                        <EnergySummaryBox key={index + 5}>
                          {/* <InvoiceImage src={PowerChart} /> */}
                          <div key={index + 5} style={{ width: '100%', height: '200px' }}>
                            <h4 style={{ color: 'black', textAlign: 'center' }}>
                              {pfData[0]['id']}
                            </h4>
                            <EnergyGraph unit="W/VA" data={pfData} />
                          </div>
                        </EnergySummaryBox>
                      )}
                    </>
                  );
                })}
            </Grid>
            {/* ## END Chart plot */}
          </Grid>
        )}
        <CloseButton src={CloseButtonIcon} onClick={closeModal} />
      </Modal>
    </>
  );
};
