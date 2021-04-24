import styled from 'styled-components';
import Chart from 'assets/images/graph.svg';
import Modal from 'react-modal';

const GraphImage = styled.img`
  width: 20px;
  height: 20px;
`;

const GraphText = styled.p`
  margin-left: 4px;
  font-size: 11px;
  color: #044e92;
  font-weight: bold;
`;

const GraphBlock = styled.div`
  width: 14%;
  height: 30px;
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #eff2f7;
  border-radius: 8px;
  padding: 0px 10px;
  cursor: pointer;
`;

Modal.setAppElement('#root');

export const EnergyConsumptionButton = ({ openModalGraph }: any) => {
  return (
    <>
      <GraphBlock onClick={openModalGraph}>
        <GraphImage src={Chart}></GraphImage>
        <GraphText>View Graph</GraphText>
      </GraphBlock>
    </>
  );
};
