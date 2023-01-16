import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <ProductWrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
        <ProductItem key={idx} />
      ))}
    </ProductWrapper>
  );
};

const ProductWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 64px 0;
`;

export default ProductList;
