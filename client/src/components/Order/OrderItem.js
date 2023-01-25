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

const OrderItem = () => {
  return (
    <OrderItemWrapper>
      <CheckInput type={'checkbox'} />

      <OrderItemContainer>
        <OrderItemLeft>
          <OrderItemImage>
            <Link>
              <OrderItemImg
                img={
                  'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
                }
              />
            </Link>
          </OrderItemImage>
          <OrderItemName>
            <Link>사과</Link>
          </OrderItemName>
        </OrderItemLeft>

        <OrderItemRight>
          <OrderCounter />
          <OrderPrice>{`${(12000).toLocaleString('ko-KR')}`}원</OrderPrice>
        </OrderItemRight>
      </OrderItemContainer>

      <CartItemDelete>
        <DeleteButton>
          <DeleteIcon />
        </DeleteButton>
      </CartItemDelete>
    </OrderItemWrapper>
  );
};

export default OrderItem;
