import styled from 'styled-components';

function OrderPayment() {
  return (
    <OrderPaymentWrapper>
      <OrderPaymentContainer>
        <OrderReceipt>
          <ReceiptContainer>
            <ReceiptAmount>총 상품금액</ReceiptAmount>
            <ReceiptAmount>
              {`${(120000).toLocaleString('ko-KR')}`}원
            </ReceiptAmount>
          </ReceiptContainer>

          <ReceiptContainer>
            <ReceiptAmount>총 배송비</ReceiptAmount>
            <ReceiptAmount>
              {`+${(3000).toLocaleString('ko-KR')}`}원
            </ReceiptAmount>
          </ReceiptContainer>

          <ReceiptContainer>
            <ReceiptAmount>총 할인금액</ReceiptAmount>
            <ReceiptAmount>{`-${(0).toLocaleString('ko-KR')}`}원</ReceiptAmount>
          </ReceiptContainer>

          <PaymentContainer>
            <ReceiptTitle>결제금액</ReceiptTitle>
            <ReceiptPayment>
              {`${(123000).toLocaleString('ko-KR')}`}원
            </ReceiptPayment>
          </PaymentContainer>
        </OrderReceipt>

        <OrderButton>주문하기</OrderButton>
      </OrderPaymentContainer>
    </OrderPaymentWrapper>
  );
}

const OrderPaymentWrapper = styled.div`
  width: 100%;
  max-width: 320px;

  @media ${(props) => props.theme.mobile} {
    max-width: 544px;
    margin-top: 20px;
  }
`;

const OrderPaymentContainer = styled.div`
  position: sticky;
  top: 168px;

  @media ${(props) => props.theme.mobile} {
    position: relative;
    top: 0;
  }
`;

const OrderReceipt = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ReceiptContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const PaymentContainer = styled(ReceiptContainer)`
  margin-top: 30px;
`;

const ReceiptAmount = styled.strong`
  display: block;
  font-size: 16px;
`;

const ReceiptTitle = styled(ReceiptAmount)`
  font-weight: 700;
`;

const ReceiptPayment = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 12px 96px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 0;
  }
`;

export default OrderPayment;
