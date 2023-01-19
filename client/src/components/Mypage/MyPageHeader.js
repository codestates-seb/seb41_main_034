import { Container, Title, SubTitle } from '../../styles/myPageStyle';

const MyPageHeader = ({ tabTitle }) => {
  return (
    <>
      <Container>
        <Title>My Page</Title>
        <SubTitle>{tabTitle}</SubTitle>
      </Container>
    </>
  );
};

export default MyPageHeader;
