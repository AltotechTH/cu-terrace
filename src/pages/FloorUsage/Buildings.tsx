import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
// import CuTerrace from 'assets/images/cuterrace.svg';
import './style.css';
import { Cuterrace } from './Cuterrace';
import { Cuihouse } from './Cuihouse';

const Building = styled.div`
  margin: 5px;
  position: relative;
  display: flex;
  height: 100%;
  cursor: pointer;

  :first-child {
    justify-content: flex-start;
  }
  :last-child {
    justify-content: flex-end;
  }
`;

const BuildingName = styled.p`
  color: black;
  position: absolute;
  bottom: 0px;
  width: 200px;
  font-weight: bold;
`;

export const Buildings = ({ isFirstBuilding, onSelectedFloor, onMouseMove }: any) => {
  const AnimatedBuilding = animated(Building);

  const buildingAProps = useSpring({
    from: { width: '20%' },
    width: isFirstBuilding ? '80%' : '20%',
  });

  const buildingBProps = useSpring({
    from: { width: '80%' },
    width: isFirstBuilding ? '20%' : '80%',
  });
  return (
    <>
      <AnimatedBuilding style={buildingAProps}>
        <Cuterrace onClick={onSelectedFloor} onMouseMove={onMouseMove} />
        <BuildingName>Building : CU Terrace</BuildingName>
      </AnimatedBuilding>
      <AnimatedBuilding style={buildingBProps}>
        <Cuihouse onClick={onSelectedFloor} onMouseMove={onMouseMove} />
        <BuildingName>Building : CU iHouse</BuildingName>
      </AnimatedBuilding>
    </>
  );
};
