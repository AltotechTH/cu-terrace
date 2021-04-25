import Noticard from 'assets/images/messageboxup.svg';
import styled from 'styled-components';

interface FloorInfomationType {
  props: {
    header: string;
    floors: string;
    size: number;
    right: number;
    top: number;
    onClick: () => void;
  };
  noti: {
    right: number;
    top: number;
  };
  infohead: {
    right: number;
  };
}

const Header = styled.strong`
  position: relative;
  top: -4.5em;
  right: 9.5em;
  font-size: 20px;
  color: #0e7ee4;
`;
const InfoHeader = styled.small<FloorInfomationType['infohead']>`
  position: relative;
  top: -5em;
  right: ${(prop) => prop.right}em;
  font-size: 12px;
  color: #788796;
`;

const Noti = styled.div<FloorInfomationType['noti']>`
  position: absolute;
  right: ${(prop) => prop.right}%;
  top: ${(prop) => prop.top}%;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: baseline;
  cursor: pointer;
`;

export const FloorInformation = ({
  header,
  floors,
  size,
  right,
  top,
  onClick,
}: FloorInfomationType['props']) => {
  return (
    <Noti right={right} top={top} onClick={onClick}>
      <img src={Noticard} alt="Noti" />
      <Header>{header}</Header>

      <InfoHeader right={24} style={{ textAlign: 'left' }}>
        Energy <br />
        <small style={{ fontSize: '16px', color: 'black' }}>{size} kWh</small>
      </InfoHeader>
      <InfoHeader right={22} style={{ textAlign: 'left' }}>
        Floor <br />
        <small style={{ fontSize: '16px', color: 'black' }}>{floors}</small>
      </InfoHeader>
    </Noti>
  );
};

export default FloorInformation;
