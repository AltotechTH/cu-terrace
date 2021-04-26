import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import './style.css';
import { CuiHouseWithTag } from './CuiHouseWithTag';
import { CuTerraceWithTag } from './CuTerraceWithTag';

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
  buildingName,
  onSelectedFloor,
  onMouseMove,
  opacityStateTerrace,
  opacityStateiHouse,
  onMouseLeave,
  selectedFloorYTerrace,
  selectedFloorYiHouse,
  tagOpacity,
  hoveredFloor,
}: any) => {
  const AnimatedBuilding = animated(Building);

  const buildingAProps = useSpring({
    from: { width: '20%' },
    width: buildingName === 'Terrace' ? '80%' : '20%',
  });

  const buildingBProps = useSpring({
    from: { width: '80%' },
    width: buildingName === 'iHouse' ? '80%' : '20%',
  });
  return (
    <>
      <AnimatedBuilding style={buildingAProps}>
        <CuTerraceWithTag
          onClick={onSelectedFloor}
          onMouseMove={onMouseMove}
          opacityStateTerrace={opacityStateTerrace}
          onMouseLeave={onMouseLeave}
          selectedFloorY={selectedFloorYTerrace}
          selectedFloor={
            buildingName === 'Terrace' && hoveredFloor.substring(0, 7) === 'Terrace' && hoveredFloor
          }
          tagOpacity={
            buildingName === 'Terrace' && hoveredFloor.substring(0, 7) === 'Terrace'
              ? tagOpacity
              : 0
          }
        />
        <BuildingName>
          Building <br />
          CU Terrace
        </BuildingName>
      </AnimatedBuilding>

      <AnimatedBuilding style={buildingBProps}>
        <CuiHouseWithTag
          onClick={onSelectedFloor}
          onMouseMove={onMouseMove}
          opacityStateiHouse={opacityStateiHouse}
          onMouseLeave={onMouseLeave}
          selectedFloorY={selectedFloorYiHouse}
          selectedFloor={
            buildingName === 'iHouse' && hoveredFloor.substring(0, 6) === 'iHouse' && hoveredFloor
          }
          tagOpacity={
            buildingName === 'iHouse' && hoveredFloor.substring(0, 6) === 'iHouse' ? tagOpacity : 0
          }
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
