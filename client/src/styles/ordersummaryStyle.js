import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: blue;
`;

export const OrderContainer = styled.div`
  width: 520px;
  height: 416px;
  /* background-color: red; */
`;
export const OrderHeader = styled.div`
  font-size: 30px;

  @media ${(props) => props.theme.tablet} {
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const OrderSummaryComponent = styled.div`
  width: 280px;
  height: 170px;
  border: 1px #dee2e6 solid;
  border-radius: 10px;
  margin: 40px 0px;
`;
export const OrderContentTop = styled.div`
  width: 85%;
  height: 110px;
  margin: auto;
  display: table;
  font-size: 15px;
  border-bottom: 1px #dee2e6 solid;
`;
export const OrderContentTopContainer = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
`;
export const OrderContentTopDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const OrderContentTopDetailItem = styled.div`
  font-size: 15px;
`;
export const OrderContentBottom = styled.div`
  width: 85%;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;
export const OrderContentTotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const OrderButton = styled.button`
  width: 268px;
  height: 46px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  font-size: 20px;
`;

// export {
//   OrderContainer,
//   OrderHeader,
//   OrderSummaryComponent,
//   OrderContentTop,
//   OrderContentTopContainer,
//   OrderContentTopDetail,
//   OrderContentTopDetailItem,
//   OrderContentBottom,
//   OrderContentTotalPrice,
//   OrderButton
// };
