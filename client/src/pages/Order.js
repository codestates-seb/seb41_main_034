import styled from 'styled-components';
import OrderItem from '../components/Order/OrderItem';
import OrderSummary from '../components/Order/OrderSummary';

const Order = () => {
  return (
    <OrderContainer>
      <OrderList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, idx) => (
          <OrderItem key={idx} />
        ))}
      </OrderList>
      <OrderSummary />
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const OrderList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.blackColor};
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
`;

export default Order;
