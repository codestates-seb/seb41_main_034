import { Link } from 'react-router-dom';
import {
  OrderItemContainer,
  OrderItemLeft,
  OrderItemRight,
  CheckInput,
  OrderItemImage,
  OrderItemImg,
  OrderItemName,
  ProductPrice,
  DeleteButton
} from '../../styles/orderStyle';
import OrderCounter from './OrderCounter';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';

const OrderItem = () => {
  return (
    <OrderItemContainer>
      <OrderItemLeft>
        <CheckInput type={'checkbox'} />
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

        <ProductPrice>{`${(12000).toLocaleString('ko-KR')}`}원</ProductPrice>

        <DeleteButton>
          <DeleteIcon />
        </DeleteButton>
      </OrderItemRight>
    </OrderItemContainer>
  );
};

export default OrderItem;
