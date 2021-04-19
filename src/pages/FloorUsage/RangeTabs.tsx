import styled from 'styled-components';
import Chart from 'assets/images/bar-chart.svg';

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

const GraphImage = styled.img`
  width: 30px;
  height: 30px;
`;

type RangeTabsProps = {
  RangeData: {
    code: string;
    range: string;
  }[];
};

export const RangeTabs = ({ RangeData }: RangeTabsProps) => {
  return (
    <>
      {RangeData.map((range) => (
        <Block>
          <Color code={range.code}></Color>
          <Value>{range.range}</Value>
        </Block>
      ))}
      <GraphImage src={Chart}></GraphImage>
    </>
  );
};
