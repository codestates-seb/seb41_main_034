import {
  HomeProductContainer,
  HomeProductHeader,
  HomeProductTitle
} from '../../styles/productStyle';
import { ProductList } from '../../styles/productStyle';
import ProductItem from './ProductItem';

const HomeProduct = ({ title, homeData }) => {
  return (
    <HomeProductContainer>
      <HomeProductHeader>
        <HomeProductTitle>{title}</HomeProductTitle>
      </HomeProductHeader>

      <ProductList>
        {homeData.map((el, idx) => (
          <ProductItem key={idx} />
        ))}
      </ProductList>
    </HomeProductContainer>
  );
};

export default HomeProduct;
