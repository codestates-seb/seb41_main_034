import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    /* bottom: 0; */
    /* position: fixed; */
    display: grid;
    justify-items: center;
    @media ${(props)=> props.theme.tablet}{
        border-top: 1px solid ${(props)=> props.theme.grayColor};
        padding: 0px;
    }
    @media ${(props)=> props.theme.mobile}{
        padding: 0px;
    }
`

export const FooterContainer = styled.footer`
    display: grid;
    justify-items: center;
    max-width: 1024px;
    width: 100%;
    border-top: 1px solid ${(props)=> props.theme.grayColor};
    padding: 142px 0 40px 64px;
    @media ${(props)=> props.theme.tablet}{
        border: none;
    }
`

export const FooterBlock = styled.div`
    width: 100%;
    display: grid;
    @media ${(props)=> props.theme.tablet}{
        width: 100%;
        padding-left: 0px;
    }
    @media ${(props)=> props.theme.mobile}{
        /* padding-left: 30px; */
    }
`

export const Text1 = styled.h5`
    //Desktop
    font-size: 15px;
    margin-bottom: 10px;
    //Tablet
    @media ${(props)=> props.theme.tablet}{
        font-size: 13px;
    }
    //Mobile
    @media ${(props)=> props.theme.mobile}{
       font-size: 11px;
       padding-right: 50px;
    }
`

export const Text2 = styled.h6`
    //Desktop
    font-size: 12px;
    margin-top: 10px;
    color: ${(props)=>props.theme.grayColor};
    //Tablet
    @media ${(props)=> props.theme.tablet}{
        font-size: 10px;
    }
    //Mobile
    @media ${(props)=> props.theme.mobile}{
       font-size: 8px;
       padding-right: 50px;
    }
`