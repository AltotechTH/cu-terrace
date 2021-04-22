import styled from 'styled-components';

const tabsData = [
  { code: 'rgb(215, 245, 228)', range: '0-10 kWh' },
  { code: 'rgb(200, 231, 253)', range: '10-20 kWh' },
  { code: 'rgb(73, 161, 248)', range: '20-30 kWh' },
  { code: 'rgb(57, 124, 221)', range: '30-40 kWh' },
  { code: 'rgb(32, 77, 141)', range: '40-50 kWh' },
];

const Block = styled.div`
  width: 17%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const Color = styled.div<any>`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background-color: ${(props) => props.code};
`;

const Value = styled.p`
  font-size: 13px;
`;


export const RangeTabs = () => {
  return (
    <>
      {tabsData.map((range) => (
        <Block key={range.code}>
          <Color code={range.code}></Color>
          <Value>{range.range}</Value>
        </Block>
      ))}
    </>
  );
};
