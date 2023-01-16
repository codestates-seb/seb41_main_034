import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../../styles/catagoryStyle';

const Category = () => {
  return (
    <CatagoryWrapper>
      <CatagoryContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
          <CatagoryButton to={`/products/${el}`} key={idx}>
            카테고리
          </CatagoryButton>
        ))}
      </CatagoryContainer>
    </CatagoryWrapper>
  );
};

export default Category;
