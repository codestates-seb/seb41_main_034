import styled from 'styled-components';
import MyCartItem from './MyCartItem';

const MyCartList = () => {
  return (
    <MyCartContainer>
      <MyCartHeader>
        <MyCartTitle>장바구니</MyCartTitle>
      </MyCartHeader>
      <MyCartContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, idx) => (
          <MyCartItem key={idx} />
        ))}
      </MyCartContent>
    </MyCartContainer>
  );
};

const MyCartContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin-bottom: 120px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const MyCartHeader = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const MyCartTitle = styled.h2`
  font-size: 24px;
`;

const MyCartContent = styled.section`
  height: 500px;
  overflow-y: auto;

  @media ${(props) => props.theme.mobile} {
    height: 240px;
  }
`;

export default MyCartList;
