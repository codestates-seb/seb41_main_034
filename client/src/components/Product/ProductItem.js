import { Link } from 'react-router-dom';
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
  return (
    <ProductContainer>
      <Link>
        <ProductImageContainer>
          <ProductImage
            img={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
          />
          <CartButton>
            <CartIcon />
          </CartButton>
        </ProductImageContainer>

        <ProductInfo>
          <ProductName>사과</ProductName>
          <ProductPrice>12,000원</ProductPrice>
          <ProductReview>후기 120</ProductReview>
        </ProductInfo>
      </Link>
    </ProductContainer>
  );
};

export default ProductItem;
