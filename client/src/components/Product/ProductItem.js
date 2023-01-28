import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

const ProductItem = ({ product, category }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart);
  const cartFilter = cart.filter((el) => el.productId === product.id)[0];

  const onClickAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCart({
        productId: product.id,
        imageUrl: product.imageUrls[0],
        productName: product.name,
        price: product.price,
        quantity: cartFilter === undefined ? 1 : cartFilter.quantity + 1
      })
    );
  };

  return (
    <ProductContainer>
      <Link to={`/product/${product.id}`}>
        <ProductImageContainer>
          <ProductImage src={product.imageUrls[0]} alt={''} />
          <CartButton type="button" onClick={onClickAddCart}>
            <CartIcon />
          </CartButton>
        </ProductImageContainer>

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price.toLocaleString('ko-KR')}</ProductPrice>
          <ProductReview>후기 0</ProductReview>
        </ProductInfo>
      </Link>
    </ProductContainer>
  );
};

export default ProductItem;
