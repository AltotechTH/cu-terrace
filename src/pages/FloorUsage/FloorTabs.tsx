import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const RoomColor = styled.div<any>`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.code};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'not-allowed')};
`;

const RoomNumber = styled.p`
  margin: 5px 0px;
  font-size: 14px;
  cursor: pointer;
`;

type floorTabsProp = {
  value: number;
  room: string;
};

interface floorTabsProps {
  floorValue: floorTabsProp[];
  selectRoom: (e: string) => void;
}

export const FloorTabs = ({ floorValue, selectRoom }: floorTabsProps) => {
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
      return '#d2d2d2';
    }
  };

  const handleSelectRoom = (value: floorTabsProp) => {
    console.log(value);
    if (converter(value.value) !== '#d2d2d2') {
      selectRoom(value.room);
    }
  };

  return (
    <>
      {floorValue.map((value: floorTabsProp) => (
        <Grid
          item
          xs={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '25px 0px',
          }}
          key={value.room}
        >
          <RoomColor
            code={converter(value.value)}
            onClick={() => handleSelectRoom(value)}
            clickable={converter(value.value) !== '#d2d2d2'}
          />
          <RoomNumber>{value.room}</RoomNumber>
        </Grid>
      ))}
    </>
  );
};
