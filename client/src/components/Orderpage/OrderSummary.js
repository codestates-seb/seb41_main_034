import {
  OrderContainer,
  OrderHeader,
  OrderSummaryComponent,
  OrderContentTop,
  OrderContentTopContainer,
  OrderContentTopDetail,
  OrderContentTopDetailItem,
  OrderContentBottom,
  OrderContentTotalPrice,
  OrderButton
} from '../../styles/ordersummaryStyle';

function OrderSummary() {
  return (
    <>
      <OrderContainer>
        <OrderHeader>주문내역</OrderHeader>
        <OrderSummaryComponent>
          <OrderContentTop>
            <OrderContentTopContainer>
              <OrderContentTopDetail>
                <OrderContentTopDetailItem>
                  총 상품 수량
                </OrderContentTopDetailItem>
                <OrderContentTopDetailItem>3개</OrderContentTopDetailItem>
              </OrderContentTopDetail>
              <OrderContentTopDetail>
                <OrderContentTopDetailItem>총 배송비</OrderContentTopDetailItem>
                <OrderContentTopDetailItem>0원</OrderContentTopDetailItem>
              </OrderContentTopDetail>
            </OrderContentTopContainer>
          </OrderContentTop>
          <OrderContentBottom>
            결제 금액
            <OrderContentTotalPrice>50000원</OrderContentTotalPrice>
          </OrderContentBottom>
        </OrderSummaryComponent>
        <OrderButton>주문하기</OrderButton>
      </OrderContainer>
    </>
  );
}
export default OrderSummary;
