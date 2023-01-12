import { Button, ButtonContainer, HeaderContainer, HeaderWrapper, Logo, SearchContainer, SearchInput, Img, MobileListImg, MobileInput, MobileSearchImg, MobileContainer, MobileFlex} from "../../styles/headerStyle";
import CartImg from './../../assets/icons/shopping-cart.svg';
import SearchImg from './../../assets/icons/search.svg';
import ListImage from './../../assets/icons/list.svg';
import LogoImg from './../../assets/icons/foodmeet.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileLogoutMenu from "./MobileMenuCategory/Logout";
import { CatagoryButton, CatagoryContainer, CatagoryWrapper } from "../../styles/catagoryStyle";

const Logout = () => {
    const [isMobile,setIsMobile] = useState(false);

    const MobileMenuOpen = () => {
        setIsMobile(true);
    }
    return (
        <>
            <HeaderWrapper>
                <HeaderContainer>
                    <Link to='/'>
                      <Logo src={LogoImg}/>
                    </Link>
                    <SearchContainer>
                        <SearchInput />
                        <Img src={SearchImg} alt="검색"/>
                    </SearchContainer>
                    <ButtonContainer>
                        <Button>로그인</Button>
                        <Button>회원가입</Button>
                            <Img src={CartImg} alt="장바구니이미지"/>
                                <MobileListImg src={ListImage}
                                onClick={MobileMenuOpen}/>
                    </ButtonContainer>
                </HeaderContainer>
            </HeaderWrapper>
            <MobileFlex>
                <MobileContainer>
                    <MobileInput />
                    <MobileSearchImg src={SearchImg}/>
                </MobileContainer>
            </MobileFlex>
            <CatagoryWrapper>
                <CatagoryContainer>
                    <CatagoryButton>카테고리</CatagoryButton>
                    <CatagoryButton>카테고리</CatagoryButton>
                    <CatagoryButton>카테고리</CatagoryButton>
                    <CatagoryButton>카테고리</CatagoryButton>
                </CatagoryContainer>
            </CatagoryWrapper>
            {isMobile === true && (<MobileLogoutMenu />)}
        </>
    )
};
export default Logout;