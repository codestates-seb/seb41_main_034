import { Button, ButtonContainer, HeaderContainer, HeaderWrapper, Logo, SearchContainer, SearchInput, Img, MobileListImg, MobileInput, MobileSearchImg, MobileContainer, MobileFlex } from "../../styles/headerStyle";
import CartImg from './../../assets/icons/shopping-cart.png';
import SearchImg from './../../assets/icons/search.png';
import ListImage from './../../assets/icons/list.png';

const Login = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderContainer>
                    <Logo />
                    <SearchContainer>
                        <SearchInput />
                        <Img src={SearchImg} alt="검색"/>
                    </SearchContainer>
                    <ButtonContainer>
                        <Button>로그인</Button>
                        <Button>회원가입</Button>
                        <Img src={CartImg}/>
                        <MobileListImg src={ListImage}/>
                    </ButtonContainer>
                </HeaderContainer>
            </HeaderWrapper>
            <MobileFlex>
                <MobileContainer>
                    <MobileInput />
                    <MobileSearchImg src={SearchImg}/>
                </MobileContainer>
            </MobileFlex>
        </>
    )
};
export default Login;