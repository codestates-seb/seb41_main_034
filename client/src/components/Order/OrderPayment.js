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

  @media ${(props) => props.theme.tablet} {
    max-width: 928px;
    margin-top: 20px;
  }

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
  border-radius: 4px;

  @media ${(props) => props.theme.desktop} {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
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

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const ReceiptTitle = styled(ReceiptAmount)`
  font-weight: 700;
`;

const ReceiptPayment = styled.h3`
  font-size: 24px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 18px;
  }
`;

const OrderButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 14px;

  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    position: relative;
    font-size: 18px;
    border-radius: 4px;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }
`;

export default OrderPayment;
