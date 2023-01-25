import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/orderSlice';
import {
  ProductContainer,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductReview,
  CartButton
} from '../../styles/productStyle';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';

const ProductItem = () => {
  const dispatch = useDispatch();

  const onClickAddCart = (e) => {
    e.preventDefault();
    dispatch(
      addCart({
        id: 1,
        img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg',
        name: '사과',
        price: 1000,
        priceAmount: 1000,
        count: 1
      })
    );
  };

  return (
    <ProductContainer>
      <Link to={'/product/1'}>
        <ProductImageContainer>
          <ProductImage
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt={''}
          />
          <CartButton type="button" onClick={onClickAddCart}>
            <CartIcon />
          </CartButton>
        </ProductImageContainer>

        <ProductInfo>
          <ProductName>사과</ProductName>
          <ProductPrice>1,000원</ProductPrice>
          <ProductReview>후기 120</ProductReview>
        </ProductInfo>
      </Link>
    </ProductContainer>
  );
};

export default ProductItem;
