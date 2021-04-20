import { FC, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Line, ComposedChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Cell, Label, Pie } from 'recharts'
import moment from 'moment'
import axios from 'axios'
import Clock from 'react-live-clock';
import GaugeChart from 'react-gauge-chart'
import { FaTemperatureLow } from 'react-icons/fa'
import { RiSunFill } from 'react-icons/ri'
import { AiOutlineAntCloud } from 'react-icons/ai'
import { BiTrendingDown } from 'react-icons/bi'
import { HiOutlineLightBulb } from 'react-icons/hi'


const d = new Date()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];




const data1 = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '9',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '13',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '14',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '15',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '16',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '17',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [{ name: 'Group A', value: 5 }, { name: 'Group B', value: 4 },
{ name: 'Group C', value: 1 }, { name: 'Group D', value: 1 }]



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '16px 0px 0px 0px',
      borderRadius: '10px',
    },
  }),
);

export const Overview: FC = () => {
  const classes = useStyles();

  const [data, setData] = useState({
    data: []
  })

  const dayOfTheWeek = (day: number, month: number, year: number
  ) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()];
  };

  useEffect(() => {
    axios.get(
      "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken"
    )

  }, [])


  const convertDate = (timestamp: number) => moment(new Date(timestamp * 1000)).format('MMM YY\'');
  const convertValue = (value: number) => `${Math.floor(value / 10e2)}M`;
  return (
    <div className="content">
      <Grid container spacing={2}>

        <Grid item xs={3}>

          <Paper className={classes.paper}>
            {/* <div style={{ width: "100%", height: 150 }}> */}
            <ResponsiveContainer width="100%" height={150}>
              <ComposedChart data={data.data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  <filter id="shadow" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
                    <feOffset in="blur" dx="0" dy="7" result="offsetBlur" />
                    <feFlood floodColor="#006991" floodOpacity="0.5" result="offsetColor" />
                    <feComposite
                      in="offsetColor"
                      in2="offsetBlur"
                      operator="in"
                      result="offsetBlur"
                    />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <XAxis dataKey="time" tickFormatter={convertDate} fontSize={10} />
                <YAxis tickFormatter={convertValue} fontSize={10} />
                <Tooltip />
                <CartesianGrid vertical={false} stroke="#DDD" />

                <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
                  filter="url(#shadow)"
                  style={{ strokeDasharray: `0 60% 40%` }}
                  dataKey="close"
                  stroke="#57a2e7"
                  dot={false}
                  legendType="none"
                />
                <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
                  <h2>Real-time Power Consumption</h2>
                </foreignObject>
              </ComposedChart>
            </ResponsiveContainer>

            {/* </div> */}
          </Paper>

          <Paper className={classes.paper}>
            {/* <div style={{ width: "100%", height: 150 }}> */}
            <ResponsiveContainer width="100%" height={150}>

              <BarChart
                width={500}
                height={300}
                data={data1}
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

          <Paper className={classes.paper}>
            {/* <div style={{ width: "100%", height: 150 }}> */}
            <ResponsiveContainer width="100%" height={150}>

              <BarChart
                width={500}
                height={300}
                data={data1}
                margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                <Bar dataKey="pv" fill="#447cf5" />
                <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
                  <h2>Energy Consumption By Floor</h2>
                </foreignObject>
                {/* <foreignObject x="200" y="10" width="500" height="150" fontSize={10}>
                  <Paper style={{ width: 100, padding: '10px 0px 10px 0px' }}>
                    <strong style={{ color: '#57a2e7', fontSize: 15 }}>Rank 8</strong> <br />
                    <small >Fl. 14: 48 kWh</small> <br />
                  </Paper>
                </foreignObject> */}
              </BarChart>
            </ResponsiveContainer>

            {/* </div> */}
          </Paper>

          <Paper className={classes.paper}>
            <ResponsiveContainer width="100%" height={150}>

              <PieChart >
                <Pie
                  data={data01}
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
                    data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
                <Tooltip />
                <Legend layout='vertical' verticalAlign="middle" align="right" fontSize='15px' />
                <foreignObject x="30" y="0" width="300" height="150" fontSize={10}>
                  <h2>Energy Consumption By Zone</h2>
                </foreignObject>
              </PieChart>


            </ResponsiveContainer>

            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <div style={{ textAlign: 'center', color: 'black', marginTop: '2rem' }}>
            <h4>{`${monthNames[d.getUTCMonth()]} ${d.getDate()}, ${d.getFullYear()}`} | <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bangkok'} /></h4>
          </div>

          <div style={{ textAlign: 'center', color: 'black', marginTop: '1rem' }}>
            <h2>Building Energy Performance</h2>
          </div>

          <div style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <GaugeChart
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              percent={0.6}
              textColor="#000000"
              formatTextValue={(value) => value + ' kWh/m2'}
              fontSize='20px'
              style={{ width: '50%' }}

            />
          </div>

          <img className={classes.paper} src="/assets/img/unnamed.jpg" alt="building" width='100%' height='60%' />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>

            <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline' }}>
              <Paper style={{ width: '40px', padding: '10px', borderRadius: '40%', backgroundColor: '#0077ff' }}>
                <FaTemperatureLow color='#ffff' />
              </Paper>

              <h4 style={{ width: '40%' }}>Temperature</h4>
            </div>

            <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline', marginTop: '20px' }}>
              <Paper style={{ width: '100%', padding: '10px', borderRadius: '15px', backgroundColor: '#0077ff', display: 'inline-flex', alignItems: 'center', color: '#ffff' }}>
                <RiSunFill color='#ffee00' fontSize='50px' />
                <h4 style={{ display: 'flex', fontSize: '40px', marginLeft: '20px', marginRight: '0px', padding: '0px' }}>32 <span style={{ fontSize: '20px' }}>&#8451;</span></h4>
                <div>
                  <strong style={{ fontSize: '10px', display: 'flex', marginLeft: '20px' }}>
                    Pathumwan, Bangkok
                  </strong>
                  <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                    {dayOfTheWeek(d.getDate(), d.getUTCMonth() + 1, d.getFullYear())} &nbsp; <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Bangkok'} />
                  </span >
                  <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                    Sunny
                  </span>
                </div>


              </Paper>
            </div>

            <div style={{ marginTop: '20px', display: 'flex' }}>

              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Precipitation</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>47%</strong>
              </Paper>
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
              </Paper>
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Wind</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>15</strong>
              </Paper>
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px' }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>US AQI</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>38</strong>
                <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Good</strong>

              </Paper>


            </div>

            <div style={{ marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height={125}>
                <ComposedChart data={data.data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
                  <defs>
                    <filter id="shadow" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
                      <feOffset in="blur" dx="0" dy="7" result="offsetBlur" />
                      <feFlood floodColor="#006991" floodOpacity="0.5" result="offsetColor" />
                      <feComposite
                        in="offsetColor"
                        in2="offsetBlur"
                        operator="in"
                        result="offsetBlur"
                      />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <XAxis dataKey="time" tickFormatter={convertDate} fontSize={10} />
                  <YAxis tickFormatter={convertValue} fontSize={10} />
                  <Tooltip />
                  <CartesianGrid vertical={false} stroke="#DDD" />

                  <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
                    filter="url(#shadow)"
                    style={{ strokeDasharray: `0 60% 40%` }}
                    dataKey="close"
                    stroke="#57a2e7"
                    dot={false}
                    legendType="none"
                  />
                  <foreignObject x="30" y="0" width="300" height="150" fontSize={10} >
                    <div style={{ display: 'flex' }}>
                      <h4 style={{ cursor: 'pointer', textDecoration: 'underline like solid #006991' }}>Temperature</h4> &nbsp; &nbsp;
                      <h4 style={{ cursor: 'pointer' }}>Precipitation</h4>&nbsp; &nbsp;
                      <h4 style={{ cursor: 'pointer' }}>Wind</h4>&nbsp; &nbsp;
                      <h4 style={{ cursor: 'pointer' }}>AQI</h4>
                    </div>

                  </foreignObject>
                </ComposedChart>
              </ResponsiveContainer>

            </div>
            <div style={{ width: "100%", marginTop: '20px' }}>
              <Paper style={{ width: '100%', padding: '10px', borderRadius: '15px', backgroundColor: '#17bc91', display: 'flex', alignItems: 'center', color: '#ffff' }}>
                {/* <RiSunFill color='#ffee00' fontSize='50px' /> */}
                <h4 style={{ display: 'flex', fontSize: '40px', marginLeft: '20px', marginRight: 'auto', padding: '0px', justifyContent: 'flex-start' }}>25 <span style={{ fontSize: '20px' }}>&#8451;</span></h4>
                <div>
                  <strong style={{ fontSize: '15px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                    Indoor
                  </strong>
                  <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                    {dayOfTheWeek(d.getDate(), d.getUTCMonth() + 1, d.getFullYear())} &nbsp; <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Bangkok'} />
                  </span >
                  <span style={{ fontSize: '10px', display: 'flex', marginLeft: '20px', justifyContent: 'flex-end' }}>
                    Chill
                  </span>
                </div>


              </Paper>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>

              {/* <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '5px', }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Precipitation</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>47%</strong>
              </Paper> */}
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px', }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', marginBottom: '10px' }}>Humidity</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>50%</strong>
              </Paper>
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px' }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>CO2</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>500</strong>
                <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Normal</strong>

              </Paper>
              <Paper style={{ width: '70px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '30%', backgroundColor: '#ffff', margin: '10px' }}>
                <span style={{ fontSize: '9px', textAlign: 'center', display: 'block', }}>US AQI</span>
                <strong style={{ fontSize: '16px', textAlign: 'center' }}>38</strong>
                <strong style={{ fontSize: '10px', textAlign: 'center', display: 'block' }}>Good</strong>

              </Paper>


            </div>


          </Paper>

          <Paper className={classes.paper}>
            <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline' }}>
              <Paper style={{ width: '40px', padding: '10px', borderRadius: '40%', backgroundColor: '#4f5255' }}>
                <AiOutlineAntCloud color='#ffff' />
              </Paper>

              <h4 style={{ width: '40%' }}>CO2 Emission</h4>


            </div>

            <div style={{ width: "100%" }}>


              <h4 style={{ width: '40%', marginTop: '20px' }}>This Year</h4>
              <h2 style={{ width: '65%', marginTop: '10px' }}>12,259.78 kg</h2>

              <div style={{ marginTop: '10px' }}>

                <ResponsiveContainer width="100%" height={100}>
                  <ComposedChart data={data.data} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
                    <defs>
                      <filter id="shadow" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
                        <feOffset in="blur" dx="0" dy="7" result="offsetBlur" />
                        <feFlood floodColor="#006991" floodOpacity="0.5" result="offsetColor" />
                        <feComposite
                          in="offsetColor"
                          in2="offsetBlur"
                          operator="in"
                          result="offsetBlur"
                        />
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <XAxis dataKey="time" tickFormatter={convertDate} fontSize={10} />
                    <YAxis tickFormatter={convertValue} fontSize={8} />
                    <Tooltip />
                    <CartesianGrid vertical={false} stroke="#f1f1f1" />

                    <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
                      filter="url(#shadow)"
                      style={{ strokeDasharray: `0 60% 40%` }}
                      dataKey="close"
                      stroke="#57a2e7"
                      dot={false}
                      legendType="none"
                    />
                    <foreignObject x="30" y="0" width="300" height="150" fontSize={10} >
                      <div style={{ display: 'flex' }}>
                        <Paper style={{ width: '15px', padding: '1px', borderRadius: '40%', backgroundColor: '#e2ffe7' }}>< BiTrendingDown color='#17bc91' /></Paper> &nbsp; &nbsp;
                        <h4 style={{ color: '#17bc91' }}> -0.24%</h4>&nbsp; &nbsp;
                        <h4 >from last year</h4>&nbsp; &nbsp;

                      </div>

                    </foreignObject>

                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

          </Paper>

          <Paper className={classes.paper}>
            {/* <div style={{ width: "100%", height: 150 }}> */}
            <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline' }}>
              <Paper style={{ width: '30px', padding: '5px', borderRadius: '40%', backgroundColor: '#0077ff' }}>
                <HiOutlineLightBulb color='#ffff' fontSize={20} />
              </Paper>
              <strong style={{ width: '100%', margin: 'auto' }}>Raise your thermostat by 1 <span >&#8451;</span></strong>
            </div>

            {/* </div> */}
            <div style={{ marginTop: '5px', textAlign: 'left', width: '80%' }}>
              <p>
                A change in 1 &#8451; can affect your bill by up to 6%
              </p>
            </div>
          </Paper>


        </Grid>
      </Grid>

    </div >);
};

export const Users: FC = () => {
  return <div className="overview">Users</div>;
};

export const Revenue: FC = () => {
  return <div className="overview">Revenue</div>;
};

export const Order: FC = () => {
  return <div className="overview">Order</div>;
};

export const History: FC = () => {
  return <div className="overview">History</div>;
};

export const Configurations: FC = () => {
  return <div className="overview">Configurations</div>;
};
