import { FC } from 'react'
import styled from 'styled-components'
import Scale from 'assets/images/power-scale.svg';
import Arrow from 'assets/images/arrow.svg';


type positionArrowType = {
  positionArrow: number;
};

const ArrowComponent = styled.img<positionArrowType>`
  position: absolute;
  margin-top: -1.5em;
  margin-left: ${(prop) => prop.positionArrow}em;
`;

const TextScale = styled.div`
  position: absolute;
  margin-top: 1.3em;
  font-size: 10px;
`;

const BuildingPerformance: FC = () => {
  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2em',
        marginBottom: '2em',
      }}
    >
      <ArrowComponent src={Arrow} positionArrow={2} />
      <img src={Scale} alt='scale' />
      <TextScale style={{ marginLeft: '-18.5em' }}>Poor</TextScale>
      <TextScale style={{ marginLeft: '-7em' }}>Fair</TextScale>
      <TextScale style={{ marginLeft: '7em' }}>Good</TextScale>
      <TextScale style={{ marginLeft: '19em' }}>Excellent</TextScale>
    </div>

  )
}

export { BuildingPerformance }
