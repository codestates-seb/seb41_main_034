import styled from 'styled-components';
import ProductItem from '../components/Product/ProductItem';

const Products = () => {
  return (
    <ProductList>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
        <ProductItem key={idx} />
      ))}
    </ProductList>
  );
};

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 64px 0;
`;

export default Products;
