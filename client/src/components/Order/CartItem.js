import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../store/orderSlice';
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

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <CartItemInfo>
        <CartItemImage>
          <Link>
            <CartItemImg img={cart.img} />
          </Link>
        </CartItemImage>

        <ProductName>
          <Link>{cart.name}</Link>
        </ProductName>
      </CartItemInfo>

      <PriceContainer>
        <OrderCounter cart={cart} />
        <ProductPrice>
          {cart.priceAmount.toLocaleString('ko-KR')}원
        </ProductPrice>
      </PriceContainer>

      <CartItemDelete>
        <DeleteButton
          type="button"
          onClick={() => dispatch(deleteCart({ id: cart.id }))}
        >
          <DeleteIcon />
        </DeleteButton>
      </CartItemDelete>
    </CartItemContainer>
  );
};

export default CartItem;
