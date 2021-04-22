import styled from 'styled-components';

const SingleTab = styled.div`
  height: 80px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  background-color: rgb(248, 249, 252);
  :first-child {
    border-radius: 10px 0px 0px 10px;
  }
  :last-child {
    border-radius: 0px 10px 10px 0px;
    border-right: 1px solid #d3d3d3;
  }
`;

const Name = styled.p`
  margin: 5px;
  font-size: 13px;
`;

const Value = styled.h3`
  margin: 5px;
  color: black;
`;

const Unit = styled.h3`
  margin: 5px;
  color: black;
`;

type SummaryProps = {
  summaryData: { name: string; value: number; unit: string }[];
};

export const SummaryTabs = ({ summaryData }: SummaryProps) => {
  return (
    <>
      {summaryData.map((data) => (
        <SingleTab key={data.name}>
          <Name>{data.name}</Name>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Value>{data.value}</Value>
            <Unit>{data.unit}</Unit>
          </div>
        </SingleTab>
      ))}
    </>
  );
};
