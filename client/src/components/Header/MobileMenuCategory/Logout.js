import {
  MobileBackImg,
  MobileButton,
  MobileButtonContainer,
  MobileCategoryButton,
  MobileCategoryContainer,
  MobileImgContainer,
  MobileMenuWrapper
} from '../../../styles/catagoryStyle';
import BackImg from './../../../assets/icons/cancleIcon.svg';

const MobileLogoutMenu = ({ MobileMenuClose }) => {
  return (
    <MobileMenuWrapper>
      <MobileImgContainer>
        <MobileBackImg src={BackImg} onClick={MobileMenuClose} />
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
  );
};

export default MobileLogoutMenu;
