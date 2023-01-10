import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    width:100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid black;
`

export const Footer = styled.div`
    //Desktop
    width: 100%;
    max-width: 1024px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    display: grid;
`

export const Text1 = styled.h5`
    //Desktop
    font-size: 20px;
    margin-bottom: 10px;
    //Tablet
    @media screen and (max-width:768px){
        font-size: 16px;
    }
    //Mobile
    @media screen and (max-width: 425px){
       font-size: 12px;
    }
`

export const Text2 = styled.h6`
    //Desktop
    font-size: 12px;
    margin-top: 10px;
    color: #ADB5BD;
    //Tablet
    @media screen and (max-width:768px){
        font-size: 10px;
    }
    //Mobile
    @media screen and (max-width: 425px){
       font-size: 8px;
    }
`