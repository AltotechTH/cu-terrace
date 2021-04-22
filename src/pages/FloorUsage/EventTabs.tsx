import styled from 'styled-components';
import TotalIoTDisconnected from 'assets/images/icon/TotalIOTDisconnected.svg';
import TotalAnomaly from 'assets/images/icon/TotalAnomalyEvent.svg';
import TenantRequest from 'assets/images/icon/TenantRequest.svg';

const tabsData = [
  { image: TotalIoTDisconnected, text: 'IoT Disconnected' },
  { image: TotalAnomaly, text: 'Anomaly Event' },
  { image: TenantRequest, text: 'Tenant Request' },
];

const Block = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.div<any>`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
`;

const Value = styled.p`
  font-size: 13px;
`;

export const EventTabs = () => {
  return (
    <>
      {tabsData.map((data) => (
        <Block key={data.text}>
          <Image image={data.image}></Image>
          <Value>{data.text}</Value>
        </Block>
      ))}
    </>
  );
};
