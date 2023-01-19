import ProductItem from '../components/Product/ProductItem';
import { ProductList } from '../styles/productStyle';

const Products = () => {
  return (
    <ProductList>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
        <ProductItem key={idx} />
      ))}
    </ProductList>
  );
};

export default Products;
