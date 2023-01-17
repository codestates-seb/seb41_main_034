import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 650px;
  padding: 30px;
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;

  @media ${(props) => props.theme.tablet} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  width: calc(100% - 250px);
  height: 45px;
  font-size: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin: 0px 0px 0px auto;

  @media ${(props) => props.theme.tablet} {
    width: calc(100% - 150px);
    font-size: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
