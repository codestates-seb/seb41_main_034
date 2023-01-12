import { Link } from "react-router-dom";
import { MobileBackImg, MobileButton, MobileButtonContainer, MobileCategoryButton, MobileCategoryContainer, MobileImgContainer, MobileMenuWrapper} from "../../../styles/catagoryStyle";
import BackImg from './../../../assets/icons/BackImg.svg'

const MobileLogoutMenu = () => {
    return (
        <MobileMenuWrapper>
            <MobileImgContainer>
                <Link to='/'>
                    <MobileBackImg src={BackImg}/>
                </Link>
            </MobileImgContainer>
            <MobileButtonContainer>
                <MobileButton>로그인</MobileButton>
                <MobileButton>회원가입</MobileButton>
            </MobileButtonContainer>
            <MobileCategoryContainer>
                <MobileCategoryButton>카테고리</MobileCategoryButton>
                <MobileCategoryButton>카테고리</MobileCategoryButton>
                <MobileCategoryButton>카테고리</MobileCategoryButton>
                <MobileCategoryButton>카테고리</MobileCategoryButton>
            </MobileCategoryContainer>
        </MobileMenuWrapper>
    )
};
export default MobileLogoutMenu;