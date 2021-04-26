import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { CardHeader } from 'components/CardHeader';
import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReportTableImage from 'assets/images/reportTable.svg';
import RightTabImage from 'assets/images/rightTabReport.svg';

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
  border-radius: 5px;
`;

const SummaryHeaderPaid = styled.div`
  width: 60%;
  height: 25px;
  background-color: #cef6e3;
  color: #089953;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Value = styled.h4`
  color: black;
  font-size: 22px;
`;

const Unit = styled.p`
  color: black;
  margin-left: 5px;
  overflow: hidden;
`;

const CardBody = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: white;
  border-radius: 16px;
`;

const HeaderName = styled.h3`
  color: black;
  margin: 20px 0px 0px 10px;
`;

const BillImage = styled.img`
  width: 100%;
  height: auto;
  padding: 20px 10px;
`;

const RightTab = styled.img`
  width: 80%;
  height: auto;
  margin: 10px;
`;

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

export const Report = () => {
  const [overduePayment, setOverduePayment] = useState({ baht: '120,948', bill: 46 });
  const [paidPayment, setPaidPayment] = useState({ paid: '322,948', bill: 56 });
  const classes = useStyles();

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
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Value>{overduePayment.baht}</Value>
                      <Unit>THB</Unit>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'flex-end' }}>
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
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Value>{paidPayment.paid}</Value>
                      <Unit>THB</Unit>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Value>{paidPayment.bill}</Value>
                      <Unit>Bill Overdue</Unit>
                    </Grid>
                  </Grid>
                </SummaryBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardBody>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <HeaderName>Search for Tenant Energy Consumption</HeaderName>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  <RightTab src={RightTabImage}></RightTab>
                </Grid>
                <Grid item xs={12}>
                  <BillImage src={ReportTableImage}></BillImage>
                </Grid>
              </Grid>
            </CardBody>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
