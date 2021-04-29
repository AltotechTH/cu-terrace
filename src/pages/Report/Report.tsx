import { useState, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { CardHeader } from 'components/CardHeader';
import styled from 'styled-components';
import { makeStyles, createStyles, Theme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import ReportTableImage from 'assets/images/reportTable.svg';
// import RightTabImage from 'assets/images/rightTabReport.svg';
import MUIDataTable from "mui-datatables";
import { invoiceAPI } from 'api/services/Invoices'

const SummaryBox = styled.div`
  width: 100%;
  height: 103px;
  padding: 10px;
  background-color: white;
  border-radius: 16px;
`;

const SummaryHeaderOverdue = styled.div`
  width: 60%;
  height: 25px;
  background-color: #ffcacc;
  color: #f25c62;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const SummaryHeaderPaid = styled.div`
  width: 50%;
  height: 25px;
  background-color: #cef6e3;
  color: #089953;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Value = styled.h4`
  color: black;
  /* font-size: 22px; */
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 35px;

`;

const Unit = styled.p`
  color: #929292;
  margin-left: 5px;
  overflow: hidden;
`;

const Pendding = styled.div`
background: #FFF3DE;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
padding: 0px;
width: 60%;
text-align: center;
color: #F5A623;
`

const Paid = styled.div`
background: #CEF7E3;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
padding: 0px;
width: 60%;
text-align: center;
color: #089953;
`
const Overdue = styled.div`
background: #FFCACC;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
padding: 0px;
width: 60%;
text-align: center;
color: #F25C62;
`


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
      marginLeft: '74px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '10px',
    },
    buttonroot: {
      color: 'black',
    },
    span: {
      borderBottom: '1px soilid black',
    },
  })
);

const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTableBodyCell: {

      root: {
        backgroundColor: "#fffff",
        fontSize: '12px',
        textAlign: 'center'
      }
    },

    MUIDataTableHeadCell: {
      root: {
        backgroundColor: '#EFF2F7',
      },
      data: {
        fontSize: '12px',
      }
    },
    MuiPaper: {
      elevation4: {
        borderRadius: '15px',
        boxShadow: 'none'
      }
    },
    MUIDataTablePagination: {
      tableCellContainer: {
        border: 'none'
      }
    }

  }
})

export const Report = () => {
  const [overduePayment, setOverduePayment] = useState({ baht: '120,948', bill: 46 });
  const [paidPayment, setPaidPayment] = useState({ paid: '322,948', bill: 56 });
  const [invoiceData, setInvoiceData] = useState<[] | undefined>()
  const classes = useStyles();
  const [invoiceDataTable, setInvoiceDataTable] = useState<any>()

  useMemo(() => {
    invoiceAPI.getInvoiceAPI().then((res: any) => setInvoiceData(res?.data['invoices']))
  }, [])

  useMemo(() => {

    if (invoiceData !== undefined) {

      let tmp: {}[] = []
      invoiceData.forEach((element: any | undefined) => {
        tmp.push({ room_no: element['room']['room_name'], customer_name: element['tenant']['first_name'], contract_no: element['tenant']['contract_no'], meter_id: element['tenant']['meter_id'], meter_no: element['tenant']['meter_no'], recent_reading: element['recent_reading'], previous_reading: element['previous_reading'], total_value: element['total_value'], rate: element['rate'], total_charge: element['balance_due'], status: <Paid>{element['status']}</Paid> })
      });
      return setInvoiceDataTable(tmp)
    }

  }, [invoiceData])

  // console.log(invoiceDataTable)

  const columns = [
    {
      name: "room_no",
      label: "Room No.",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "customer_name",
      label: "Customer Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "contract_no",
      label: "Contract No.",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "meter_id",
      label: "Meter ID",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "meter_no",
      label: "Meter No.",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "recent_reading",
      label: "Recent Reading",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "previous_reading",
      label: "Previous Reading",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "total_value",
      label: "Total Value (unit)",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "rate",
      label: "Rate (THB/kWh)",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "total_charge",
      label: "Total Charge (THB)",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: false,
        sort: true,
      }
    },
  ];

  const options: any = {
    filterType: 'checkbox',
  };


  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardHeader
              headerName={'Report and Billing'}
              parentName={'Dashboard'}
              childName={'Report and Billing'}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <SummaryBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <SummaryHeaderOverdue>Overdue Payment</SummaryHeaderOverdue>
                    </Grid>
                    <Grid item xs={6} style={{
                      display: 'flex', alignItems: 'center',
                      'justifyContent': 'center'
                    }}>
                      <Value>{overduePayment.baht}</Value>
                      <Unit>THB</Unit>
                    </Grid>
                    <Grid item xs={6} style={{
                      display: 'flex', alignItems: 'center',
                      'justifyContent': 'center'
                    }}>
                      <Value>{overduePayment.bill}</Value>
                      <Unit>Bill Overdue</Unit>
                    </Grid>
                  </Grid>
                </SummaryBox>
              </Grid>
              <Grid item xs={6}>
                <SummaryBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <SummaryHeaderPaid>Paid Payment</SummaryHeaderPaid>
                    </Grid>
                    <Grid item xs={6} style={{
                      display: 'flex', alignItems: 'center',
                      'justifyContent': 'center'
                    }}>
                      <Value>{paidPayment.paid}</Value>
                      <Unit>THB</Unit>
                    </Grid>
                    <Grid item xs={6} style={{
                      display: 'flex', alignItems: 'center',
                      'justifyContent': 'center'
                    }}>
                      <Value>{paidPayment.bill}</Value>
                      <Unit>Bill Paid</Unit>
                    </Grid>
                  </Grid>
                </SummaryBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                  title={"Search for Tenant Energy Consumption"}
                  data={invoiceDataTable !== undefined ? invoiceDataTable : []}
                  columns={columns}
                  options={options}
                />
              </MuiThemeProvider>

            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
