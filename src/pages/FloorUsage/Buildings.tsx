import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
// import CuTerrace from 'assets/images/cuterrace.svg';
import './style.css';
import { CuiHouse } from './CuiHouse';
import { CuTerrace } from './CuTerrace';


const Building = styled.div`
  margin: 5px 20px;
  position: relative;
  display: flex;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: flex-end;
`;

const BuildingName = styled.p`
  color: black;
  position: absolute;
  bottom: 0px;
  width: 200px;
  font-weight: bold;
  text-align: center;
`;

export const Buildings = ({
  isFirstBuilding,
  onSelectedFloor,
  onMouseMove,
  opacityStateTerrace,
  opacityStateiHouse,
  onMouseLeave,
  selectedFloorYTerrace,
  selectedFloorYiHouse,
}: any) => {
  const AnimatedBuilding = animated(Building);

  const buildingAProps = useSpring({
    from: { width: '30%' },
    width: isFirstBuilding ? '70%' : '30%',
  });

  const buildingBProps = useSpring({
    from: { width: '70%' },
    width: isFirstBuilding ? '30%' : '70%',
  });
  return (
    <>
      <AnimatedBuilding style={buildingAProps}>
        <CuTerrace
          onClick={onSelectedFloor}
          onMouseMove={onMouseMove}
          opacityStateTerrace={opacityStateTerrace}
          onMouseLeave={onMouseLeave}
          selectedFloorY={selectedFloorYTerrace}
        />
        <BuildingName>
          Building <br />
          CU Terrace
        </BuildingName>
      </AnimatedBuilding>
      <AnimatedBuilding style={buildingBProps}>
        <CuiHouse
          onClick={onSelectedFloor}
          onMouseMove={onMouseMove}
          opacityStateiHouse={opacityStateiHouse}
          onMouseLeave={onMouseLeave}
          selectedFloorY={selectedFloorYiHouse}
        />
        <BuildingName>
          Building
          <br />
          CU iHouse
        </BuildingName>
      </AnimatedBuilding>
    </>

  );
};
