import { Link } from 'react-router-dom';
import {
  MobileBackImg,
  MobileButton,
  MobileButtonContainer,
  MobileCategoryButton,
  MobileCategoryContainer,
  MobileImgContainer,
  MobileMenuWrapper,
  MobileMyImg
} from '../../../styles/catagoryStyle';
import BackImg from './../../../assets/icons/BackImg.svg';
import UserImg from './../../../assets/icons/user.svg';

const MobileLoginMenu = () => {
  return (
    <MobileMenuWrapper>
      <MobileImgContainer>
        <Link to="/">
          <MobileBackImg src={BackImg} />
        </Link>
      </MobileImgContainer>
      <MobileButtonContainer>
        <MobileMyImg src={UserImg} />
        <MobileButton>로그아웃</MobileButton>
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

export default MobileLoginMenu;
