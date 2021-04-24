import styled from 'styled-components'


export const Card = styled.div`
position: relative;
background: #FFFFFF;
/* opacity: 0.7; */
/* top: 17px; */
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.21), 0px 16px 32px -4px rgba(225, 230, 240, 0.24);
border-radius: 16px;
color: black;
/* margin: 17px */
`
export const LabelCard = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 3px;
font-weight: lighter;
font-size: 10px;
color: #FFFFFF;

background: #F5A623;
border-radius: 4px;
`

export const WeatherInfo = styled.div`
display: flex;
position: absolute;
top: 10px;
width: 100%;
padding: 10px;
justify-content: center;
align-items: center;
`

export const Img = styled.img`
`
export const WeatherDetail = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 30px 10px 30px; 
`
export const Detial = styled.div`
margin-left: 10px;
display: inline-grid;
`

