import ProductItem from '../components/Product/ProductItem';
import {
  ProductList,
  CategoryHeader,
  CategoryTitle
} from '../styles/productStyle';
import SortNavbar from '../components/Product/SortNavbar';

const Products = () => {
  const categoryName = decodeURI(window.location.pathname).substring(10);

  return (
    <>
      <CategoryHeader>
        <CategoryTitle>{categoryName}</CategoryTitle>
        <SortNavbar />
      </CategoryHeader>

      <ProductList>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24
        ].map((el, idx) => (
          <ProductItem key={idx} />
        ))}
      </ProductList>
    </>
  );
};

export default Products;
