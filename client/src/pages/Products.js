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
import Pagination from '../components/Layout/Pagination';

const Products = () => {
  const category = decodeURI(window.location.pathname).substring(10);
  const categoryDb = localStorage.category;
  const [categoryName, setCategoryName] = useState('');
  const [sort, setSort] = useState(localStorage.sort || '');
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

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
        `/product?category=${category.toUpperCase()}&page=${page}&size=12&sort=${sort}`
      );
      setProducts(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.category = `${category}`;
    checkCategory(category);
    getProducts(category, sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort, page]);

  useEffect(() => {
    if (category !== categoryDb) {
      setPage(0);
      setSort('');
      localStorage.sort = '';
    }
  }, [category, categoryDb]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CategoryHeader>
            <CategoryTitle>{categoryName}</CategoryTitle>
            <SortNavbar sort={sort} setSort={setSort} setPage={setPage} />
          </CategoryHeader>

          <ProductList>
            {products.content.map((el, idx) => (
              <ProductItem product={el} category={category} key={idx} />
            ))}
          </ProductList>

          <Pagination
            total={products.totalPages}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default Products;
