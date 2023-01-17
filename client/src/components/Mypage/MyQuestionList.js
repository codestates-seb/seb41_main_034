import MyQuestion from './MyQuestion';
import {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text
} from '../../styles/myPageStyle';

const MyQuestionList = () => {
  return (
    <>
      <ListHeader>
        <LeftCotainer>
          <Text>제목 / 상품명</Text>
        </LeftCotainer>
        <RightContainer>
          <Text>작성일</Text>
          <Text>답변상태</Text>
        </RightContainer>
      </ListHeader>
      <MyQuestion />
    </>
  );
};

export default MyQuestionList;
