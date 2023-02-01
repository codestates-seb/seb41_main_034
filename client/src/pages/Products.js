import ProductItem from '../components/Product/ProductItem';
import {
  ProductList,
  CategoryHeader,
  CategoryTitle
} from '../styles/productStyle';
import SortNavbar from '../components/Product/SortNavbar';
import { useState } from 'react';
import { baseAPI } from '../api/customAxios';
import { useEffect } from 'react';
import Loading from '../components/Layout/Loading';

const Products = () => {
  const category = decodeURI(window.location.pathname).substring(10);
  const [categoryName, setCategoryName] = useState('');
  const [sort, setSort] = useState(localStorage.sort || '');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const checkCategory = (category) => {
    switch (category) {
      case 'vegetable':
        setCategoryName('채소');
        break;
      case 'fruit':
        setCategoryName('과일');
        break;
      case 'nut':
        setCategoryName('견과류');
        break;
      case 'meat':
        setCategoryName('육류');
        break;
      case 'seafood':
        setCategoryName('해산물');
        break;
      default:
    }
  };

  const getProducts = async (category, sort) => {
    try {
      const res = await baseAPI.get(
        `/product?category=${category.toUpperCase()}&size=12&sort=${sort}`
      );
      setProducts(res.data.data.content);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkCategory(category);
    getProducts(category, sort);
  }, [category, sort]);

  useEffect(() => {
    setSort('');
  }, [category]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CategoryHeader>
            <CategoryTitle>{categoryName}</CategoryTitle>
            <SortNavbar sort={sort} setSort={setSort} />
          </CategoryHeader>

          <ProductList>
            {products.map((el, idx) => (
              <ProductItem product={el} category={category} key={idx} />
            ))}
          </ProductList>
        </>
      )}
    </>
  );
};

export default Products;
