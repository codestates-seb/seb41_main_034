import { Link } from 'react-router-dom';
import {
  CartItemContainer,
  CartItemImage,
  CartItemImg,
  CartItemInfo,
  CartItemDelete,
  ProductName,
  PriceContainer,
  ProductPrice,
  DeleteButton
} from '../../styles/orderStyle';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';
import OrderCounter from './OrderCounter';

const MyCartItem = () => {
  return (
    <CartItemContainer>
      <CartItemInfo>
        <CartItemImage>
          <Link>
            <CartItemImg
              img={
                'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
              }
            />
          </Link>
        </CartItemImage>

        <ProductName>
          <Link>사과</Link>
        </ProductName>
      </CartItemInfo>

      <PriceContainer>
        <OrderCounter />
        <ProductPrice>{`${(12000).toLocaleString('ko-KR')}`}원</ProductPrice>
      </PriceContainer>

      <CartItemDelete>
        <DeleteButton>
          <DeleteIcon />
        </DeleteButton>
      </CartItemDelete>
    </CartItemContainer>
  );
};

export default MyCartItem;
