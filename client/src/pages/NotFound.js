import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubTitle>요청하신 페이지를 찾을 수 없습니다!</NotFoundSubTitle>
      <NotFoundDesc>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
        없습니다.
        <br /> 입력하신 주소가 정확한지 다시 한번 확인해 주세요
      </NotFoundDesc>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
`;

const NotFoundTitle = styled.h2`
  font-size: 64px;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.desktop} {
    font-size: 100px;
  }
`;

const NotFoundSubTitle = styled.h3`
  margin-top: 24px;
  font-size: 16px;
  text-align: center;

  @media ${(props) => props.theme.desktop} {
    font-size: 24px;
  }
`;

const NotFoundDesc = styled.p`
  margin-top: 30px;
  font-size: 14px;

  text-align: center;

  @media ${(props) => props.theme.desktop} {
    font-size: 16px;
  }
`;

export default NotFound;
