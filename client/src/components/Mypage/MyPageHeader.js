import { Container, Title } from '../../styles/myPageStyle';

const MyPageHeader = ({ title }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default MyPageHeader;
