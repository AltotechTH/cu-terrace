import styled from 'styled-components'
import Scale from 'assets/images/Frame.svg';
import Arrow from 'assets/images/Indicator.svg';
import UnionSvg from 'assets/images/Union.svg'

interface typeComponent {
  positionArrow: { positionArrow: number; }
  unionPosition: { unionPosition: number; }
  labelPosition: { labelPosition: number; }
  labelPercent: { labelPercent: number; }
  dataDashboard: any
}

const ArrowComponent = styled.img<typeComponent['positionArrow']>`
  position: absolute;
  margin-top: -1em;
  margin-left: ${(prop) => prop.positionArrow - 0.2}em;
`;

const TextScale = styled.div`
  position: absolute;
  margin-top: 2.5em;
  font-size: 12px;
  font-weight: bold

`;

const Union = styled.img<typeComponent['unionPosition']>`
  position: absolute;
  margin-top: -5em;
  margin-left: ${(prop) => prop.unionPosition - 0.2}em;
`;

const UnionLabel = styled.div<typeComponent['labelPosition']>`
  position: absolute;
  margin-top: -6.4em;
  font-size: 10px;
  margin-left: ${(prop) => prop.labelPosition}em;
`

const UnionPercent = styled.div<typeComponent['labelPercent']>`
  position: absolute;
  margin-top: -3.2em;
  font-size: 16px;
  color : #089953;
  font-weight: bold;
  margin-left: ${(prop) => prop.labelPercent}em;
`


const BuildingPerformance = ({ data }: typeComponent['dataDashboard']) => {
  /* console.log(data) */
  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4em',
        marginBottom: '2em',
      }}
    >
      <ArrowComponent src={Arrow} positionArrow={21.5} />
      <Union src={UnionSvg} alt='union' unionPosition={21.5} />
      <UnionLabel labelPosition={34}>Excellent</UnionLabel>
      <UnionPercent labelPercent={21.5}>90%</UnionPercent>

      <img src={Scale} alt='scale' width='100%' />

      <TextScale style={{ marginLeft: '-27.5em' }}>Poor</TextScale>
      <TextScale style={{ marginLeft: '-9em' }}>Fair</TextScale>
      <TextScale style={{ marginLeft: '10em' }}>Good</TextScale>
      <TextScale style={{ marginLeft: '29em' }}>Excellent</TextScale>
    </div>

  )
}

export { BuildingPerformance }
