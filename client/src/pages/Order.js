import styled from 'styled-components';
import OrderSummary from '../components/Order/OrderSummary';

const Order = () => {
  return (
    <OrderContainer>
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

export default Order;
