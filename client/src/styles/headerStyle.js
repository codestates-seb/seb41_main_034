import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    display: grid;
    height: 70px;
    justify-items: center;
    /* justify-content: center; */
    @media ${(props)=>props.theme.tablet} {
        border-bottom: 1px solid ${((props)=>props.theme.grayColor)};
        padding: 0px;
    }
    @media ${(props)=> props.theme.mobile} {
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    max-width: 1024px;
    border-bottom: 1px solid ${((props)=>props.theme.grayColor)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    position: relative;
    @media ${(props)=> props.theme.mobile} {
        border-style: none;
        padding: 0px;
        width: 80%;
    }
`

export const Logo = styled.img`
    width: 100px;
    height: 50px;
    margin-right: 50px;
    //tablet
    @media ${(props)=>props.theme.tablet} {
        width: 80px;
        height: 40px;
    }
    @media ${(props)=> props.theme.mobile} {
        width: 80px;
        height: 30px;
        margin-right: 0px;
    }
`
export const SearchContainer = styled.div`
    width: 40%;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    @media ${(props)=>props.theme.tablet} {
        width: 30%;
        height: 40px;
    }
    @media ${(props)=> props.theme.mobile} {
        display: none;
    }
`

export const SearchInput = styled.input`
    width: 95%;
    height: 37px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    @media ${(props)=>props.theme.tablet} {
        width: 90%;
        height: 30px;
    }
`
export const ButtonContainer = styled.div`
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // pixel margin
    /* padding-left: 200px; */
    @media ${(props)=>props.theme.tablet} {
        width: 30%;
        height: 40px;
    }
    @media ${(props)=>props.theme.mobile} {
        width: 20%;
        height: 15px;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 21px;
    font-size: 15px;
    @media ${(props)=>props.theme.tablet} {
        width: 100px;
        height: 30px;
        font-size: 13px;
    }
    @media ${(props)=> props.theme.mobile} {
        display: none;
    }
`

export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    @media ${(props)=>props.theme.tablet} {
        width: 15px;
        height: 15px;
    }
`

export const MobileListImg = styled.img`
    display: none;
    @media ${(props)=>props.theme.tablet} {
        display: none;
    }
    @media ${(props)=> props.theme.mobile} {
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
`

export const MobileFlex = styled.div`
    display: flex;
    width: 100%;
    @media ${(props)=> props.theme.mobile} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

export const MobileContainer = styled.div`
    display: none;
    @media ${(props)=>props.theme.tablet} {
        display: none;
    }
    @media ${(props)=> props.theme.mobile} {
        width: 80%;
        height: 31px;
        display: flex;
        align-items: center;
        border: 1px solid black;
    }
`

export const MobileInput = styled.input `
    display: none;
    @media ${(props)=>props.theme.tablet} {
        display: none;
    }
    @media ${(props)=> props.theme.mobile} {
        display: block;
        width: 90%;
        height: 29px;
        border: none;
    }
`

export const MobileSearchImg = styled.img`
    display: none;
    @media ${(props)=>props.theme.tablet} {
        display: none;
    }
    @media ${(props)=> props.theme.mobile} {
        display: block;
        width: 10px;
        height: 10px;
    }
`