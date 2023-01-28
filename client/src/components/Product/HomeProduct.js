import {
  HomeProductContainer,
  HomeProductHeader,
  HomeProductTitle
} from '../../styles/productStyle';
import { ProductList } from '../../styles/productStyle';
import ProductItem from './ProductItem';

const HomeProduct = ({ title, data }) => {
  return (
    <HomeProductContainer>
      <HomeProductHeader>
        <HomeProductTitle>{title}</HomeProductTitle>
      </HomeProductHeader>

      <ProductList>
        {data.map((el, idx) => (
          <ProductItem product={el} key={idx} />
        ))}
      </ProductList>
    </HomeProductContainer>
  );
};

export default HomeProduct;
