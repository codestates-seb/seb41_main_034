import styled from "styled-components";

export const CatagoryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CatagoryContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    border-bottom: 1px solid ${(props)=> props.theme.grayColor};
    @media ${(props)=> props.theme.mobile} {
        display: none;
    }
`

export const CatagoryButton = styled.button`
    width: 68px;
    height: 57px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
    &:hover {
        color: ${(props)=> props.theme.hoverColor};
    }
    @media ${(props)=> props.theme.tablet} {
        font-size: 13px;
        height: 45px;
    }
    @media ${(props)=> props.theme.mobile} {
        display: none;
    }
`

export const MobileMenuWrapper = styled.div`
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
`

export const MobileImgContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
`
export const MobileBackImg = styled.img`
    width: 24px;
    height: 24px;
    margin: 20px 32px 0 0;
`
export const MobileButtonContainer = styled.div`
    width: 95%;
    display: flex;
    margin: 40px 0 0 64px;
`
export const MobileButton = styled.button`
    width: 70px;
    height: 28px;
    font-size: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 12px 0 0;
    &:hover {
        color: ${(props)=> props.theme.hoverColor}
    }
`
export const MobileCategoryContainer = styled.div`
    width: 95%;
    margin: 40px 0 0 64px;
    display: grid;
`
export const MobileCategoryButton = styled.button`
    width: 74px;
    height: 24px;
    font-size: 18px;
    margin: 24px 0 0 0;
    display: flex;
    justify-content: left;
    &:hover {
        color: ${(props)=> props.theme.hoverColor}
    }
`
export const MobileMyImg = styled.img`
    width: 28px;
    height: 28px;
    margin: 0 20px 0 0;
`