import { Link } from 'react-router-dom';
import {
  OrderItemWrapper,
  OrderItemContainer,
  OrderItemLeft,
  OrderItemRight,
  CheckInput,
  OrderItemImage,
  OrderItemImg,
  OrderItemName,
  OrderPrice,
  DeleteButton,
  CartItemDelete
} from '../../styles/orderStyle';
import OrderCounter from './OrderCounter';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';
import { useDispatch } from 'react-redux';
import { deleteCart, checkCart } from '../../store/orderSlice';

const OrderItem = ({ cart }) => {
  const dispatch = useDispatch();
  const priceAmount = cart.price * cart.quantity;

  return (
    <OrderItemWrapper>
      <CheckInput
        type={'checkbox'}
        checked={cart.check}
        onChange={() =>
          dispatch(checkCart({ productId: cart.productId, check: !cart.check }))
        }
      />
      <OrderItemContainer>
        <OrderItemLeft>
          <OrderItemImage>
            <Link to={`/product/${cart.productId}`}>
              <OrderItemImg img={cart.imageUrl} />
            </Link>
          </OrderItemImage>
          <OrderItemName>
            <Link to={`/product/${cart.productId}`}>{cart.productName}</Link>
          </OrderItemName>
        </OrderItemLeft>

        <OrderItemRight>
          <OrderCounter cart={cart} />
          <OrderPrice>{priceAmount.toLocaleString('ko-KR')}원</OrderPrice>
        </OrderItemRight>
      </OrderItemContainer>

      <CartItemDelete>
        <DeleteButton
          type="button"
          onClick={() => dispatch(deleteCart({ productId: cart.productId }))}
        >
          <DeleteIcon />
        </DeleteButton>
      </CartItemDelete>
    </OrderItemWrapper>
  );
};

export default OrderItem;
