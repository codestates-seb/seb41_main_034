import styled from 'styled-components';

const OrderItem = () => {
  return <></>;
};

const OrderItemContainer = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export default OrderItem;
