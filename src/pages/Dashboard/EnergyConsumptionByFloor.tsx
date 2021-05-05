import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { Card } from './styles'
import { BarChartComponent } from 'components/Graph/GraphComponent'
import { LoadingPage } from 'components/LoadingPage/LoadingPage'

interface FloorType {
  cuTerrace: any
  cuiHouse: any
}

const Header = styled.div`
  width : 100%;
  display : flex;
  
  border-bottom: 1px solid #E1E6F0;
  padding : 10px 0px 0px 0px
`
const List = styled.span`
  font-size : 10px;
  padding : 0px 10px 0px 10px;
  margin-left : 20px;
  cursor: pointer;

  &:hover {
    text-decoration: solid underline #F2C94C 3px ;
  }

`

const EnergyConsumptionByFloor = ({ cuTerrace, cuiHouse }: FloorType) => {


  const [floorRank, setFloorRank] = useState()
  const [currentTab, setCurrentTab] = useState('all')

  const onClick = (selectd: string) => {
    if (cuTerrace && cuiHouse !== undefined) {
      if (selectd === 'terrace') {
        setFloorRank(cuTerrace)
      }
      else if (selectd === 'ihouse') {
        setFloorRank(cuiHouse)
      } else {
        setFloorRank(cuTerrace.concat(cuiHouse))
      }
    }
  }
  useMemo(() => {

    onClick(currentTab)
    // eslint-disable-next-line 
  }, [currentTab, cuTerrace, cuiHouse])

  return (
    <>
      <Card style={{ marginTop: '20px', height: '208px' }}>

        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', fontSize: '16px' }}>Energy Consumption by Floor</div>



        {floorRank !== undefined ?
          <>
            <Header>
              <List onClick={() => setCurrentTab('all')} >All</List>
              <List onClick={() => setCurrentTab('terrace')}>CUTerrace</List>
              <List onClick={() => setCurrentTab('ihouse')}>CUiHouse</List>
            </Header>
            <div style={{ width: '100%', height: '145px' }}>
              <BarChartComponent data={floorRank !== undefined ? floorRank : []} yUnit="kW" xUnit='Floor' />
            </div> </> : <><LoadingPage height='145px' /> </>
        }
      </Card>
    </>
  )
}

export { EnergyConsumptionByFloor }
