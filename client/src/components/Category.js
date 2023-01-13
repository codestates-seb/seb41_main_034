import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../styles/catagoryStyle';

const Category = () => {
  return (
    <CatagoryWrapper>
      <CatagoryContainer>
        <CatagoryButton>카테고리</CatagoryButton>
        <CatagoryButton>카테고리</CatagoryButton>
        <CatagoryButton>카테고리</CatagoryButton>
        <CatagoryButton>카테고리</CatagoryButton>
      </CatagoryContainer>
    </CatagoryWrapper>
  );
};

export default Category;
