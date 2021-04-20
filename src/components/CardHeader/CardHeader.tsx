import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';

type CardHeaderProps = {
  headerName: string;
  parentName: string;
  childName: string;
};

const HeaderName = styled.h2`
  color: black;
  margin: 10px 0px 0px 0px;
`;

const ParentName = styled.p`
  color: black;
`;
const ChildName = styled.p`
  font-weight: bold;
  color: black;
`;

export const CardHeader = ({ headerName, parentName, childName }: CardHeaderProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderName>{headerName}</HeaderName>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
          <ParentName>{parentName}</ParentName>
          {' / '}
          <ChildName>{childName}</ChildName>
        </Grid>
      </Grid>
    </>
  );
};
