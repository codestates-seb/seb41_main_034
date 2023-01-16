import styled from 'styled-components';

export const ItemRow = styled.div`
  width: 378px;
  padding: 16px 0 16px 0;

  @media ${(props) => props.theme.tablet} {
    /* width: 321px; */
    width: 65%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 65%;
  }
`;

export const ItemFlex2 = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    fill: ${(props) => props.theme.blackColor};
  }
`;

export const ItemText = styled.div`
  width: 124px;
  height: 18px;
  font-size: 14px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

export const PlusMinusBox = styled.div`
  width: 94px;
  height: 26px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    width: 90px;
    height: 22px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 86px;
    height: 18px;
  }
`;

export const PlusMinusButton = styled.button`
  width: 26px;
  height: 26px;
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    width: 22px;
    height: 22px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
`;

export const PlusMinusNum = styled.div`
  width: 42px;
  height: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    width: 38px;
    height: 20px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 34px;
    height: 16px;
    font-size: 10px;
  }
`;

export const ItemFlex = styled.div`
  display: flex;
`;

export const ItemImg = styled.img`
  width: 106px;
  height: 85px;
  border: 1px solid black;
  margin: 16px 18px 16px 18px;

  @media ${(props) => props.theme.tablet} {
    width: 92px;
    height: 78px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 74px;
  }
`;
