import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const RoomColor = styled.div<any>`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.code};
`;

const RoomNumber = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

type floorTabsProps = {
  floorValue: {
    value: number;
    room: string;
  }[];
};

export const FloorTabs = ({ floorValue }: floorTabsProps) => {
  const converter = (value: number) => {
    if (value < 10) {
      return 'rgb(215, 245, 228)';
    } else if (value < 20) {
      return 'rgb(200, 231, 253)';
    } else if (value < 30) {
      return 'rgb(73, 161, 248)';
    } else if (value < 40) {
      return 'rgb(57, 124, 221)';
    } else if (value < 50) {
      return 'rgb(32, 77, 141)';
    } else {
      return 'gray';
    }
  };

  return (
    <>
      {floorValue.map((value) => (
        <Grid
          item
          xs={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '20px 0px',
          }}
        >
          <RoomColor code={converter(value.value)} />
          <RoomNumber>{value.room}</RoomNumber>
        </Grid>
      ))}
    </>
  );
};