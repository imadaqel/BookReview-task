import styled from 'styled-components'
import { device } from '../../device';

export const CategoriesWrapper=styled.section`
    margin: 0;
    padding: 0;
`
export const SectionContent=styled.section`
    max-width: 800px;
    margin: auto;
    padding: 5rem 0;
    @media ${device.tablet} {
        padding: 5rem 7rem;
    }
    @media ${device.mobileL} {
        padding: 5rem 4rem;  
    }
`
export const CategoriesHeader=styled.h1`
    margin: 0;
    padding: 0;
     @media ${device.mobileS} {
        font-size: 20px;
        text-align: center;
    }
    @media ${device.mobileM} {
        font-size: 26px;
        text-align: center;
    }
`
export const SectionContentSpan=styled.span`
      font-weight: lighter;
`
export const CategoriesMain=styled.section`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto auto auto;
    margin-top: 2rem;
    @media ${device.tablet} {
        display: grid;
        grid-gap: 0rem;
        grid-template-columns: auto auto;
        /* padding: 5rem 7rem; */
    }
    @media ${device.mobileL} {
        display: grid;
        grid-gap: 0rem;
        grid-template-columns: auto ;
        margin: 2rem 2rem;
        justify-content: start
    }
`
export const CategoriesCard=styled.div`
    display: flex;
    flex-direction: row;
    min-width: 170px;
    padding: 0;
    margin: 0;
    @media ${device.tablet} { 
        max-width: 28rem;
        padding-top: 1rem;
    }
    @media ${device.mobileL} {
        max-width: 28rem;
            padding: 1rem 0;
    }
`
export const CategoriesCardContent=styled.div`
      flex: 1;
    padding-left: 10px;
`
export const CategoriesMainTitle=styled.h4`
    margin: 0;
`
export const CategoriesCardParg=styled.p`
     margin: .25rem 0 0;
    hyphens: auto;
    overflow: hidden;
    color: gray;
`
export const CategoriesCardImg=styled.img`
    display: inline-block;
        width: 40px;
        height: 40px;
        padding: 0;
    @media ${device.mobileS} {
    
    }
    @media ${device.tablet} {
    
    }
    @media ${device.laptop} {
    
    }
` 
export const CategoriesCard_header=styled.h4`
   margin-left: 3.5rem;
    margin-top: 0px;
    font-size: 3rem;
    @media ${device.laptop} {
          margin-left: 7rem;
          text-align: start;
          padding-top: 2rem;
          font-size: 48px;
    }
    @media ${device.tablet} {
          text-align: center;
          margin-left: 0;
          padding-top: 2rem;
    }
    @media ${device.mobileS} {
        text-align: center;
        margin-left: 0;
        padding-top: 2rem;
        font-size: 32px;
    }
`
