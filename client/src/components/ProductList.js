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

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
  margin: 64px 0;
`;

export default ProductList;
