import styled from 'styled-components'
import { device } from './device';

export const ChildrenContainer=styled.section`
    background-color: #f6f6f6;
`
export const ChildrenContent=styled.section`
  max-width: 800px;
    margin: auto;
`
export const ChildrenTitle=styled.h4`
   margin:0;
font-weight: lighter;
font-size: 14px;
`
export const ChildrenParg=styled.p`
    color:gray;
    margin:0;
    font-size: x-small;
    `
export const ChildrenImg=styled.img`
  width: 120px;
    height: 160px;
@media ${device.mobileS} {
      width: 180px;
    height: 200px;
}
@media ${device.tablet} {
  width: 120px;
    height: 160px;
}
@media ${device.laptop} {
  width: 120px;
    height: 160px;
}
` 
export const ChildrenHeader=styled.h1`
   margin-left: 3.5rem;
    margin-top: 0px;
    font-size: 3rem;
@media ${device.mobileS} {
      text-align: center;
      margin-left: 0;
      padding-top: 2rem;
      font-size: 32px;
}
@media ${device.tablet} {
      text-align: center;
      margin-left: 0;
      padding-top: 2rem;
}
@media ${device.laptop} {
      margin-left: 7rem;
      text-align: start;
      padding-top: 2rem;
      font-size: 48px;
}
`

