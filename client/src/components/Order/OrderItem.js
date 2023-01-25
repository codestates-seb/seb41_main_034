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
import { deleteCart } from '../../store/orderSlice';

const OrderItem = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <OrderItemWrapper>
      <CheckInput type={'checkbox'} />

      <OrderItemContainer>
        <OrderItemLeft>
          <OrderItemImage>
            <Link>
              <OrderItemImg img={cart.img} />
            </Link>
          </OrderItemImage>
          <OrderItemName>
            <Link>{cart.name}</Link>
          </OrderItemName>
        </OrderItemLeft>

        <OrderItemRight>
          <OrderCounter cart={cart} />
          <OrderPrice>{cart.priceAmount.toLocaleString('ko-KR')}원</OrderPrice>
        </OrderItemRight>
      </OrderItemContainer>

      <CartItemDelete>
        <DeleteButton
          type="button"
          onClick={() => dispatch(deleteCart({ id: cart.id }))}
        >
          <DeleteIcon />
        </DeleteButton>
      </CartItemDelete>
    </OrderItemWrapper>
  );
};

export default OrderItem;
