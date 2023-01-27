import MyPageQuestionItem from './MyPageQuestionItem';
import {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text,
  TextWrapper,
  EditDeleteContainer
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { useState, useEffect } from 'react';
import { questionGetAPI } from '../../api/question';
import Loading from '../Layout/Loading';

const MyPageQuestionList = () => {
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reLoading, setReLoading] = useState(false);

  useEffect(() => {
    const API = async () => {
      const data = await questionGetAPI();
      setQuestion(data.data.content.map((el) => el));
      setIsLoading(true);
    };
    API();
  }, [setQuestion, reLoading]);

  return isLoading ? (
    <>
      <MyPageHeader title={'나의문의'} />
      <ListHeader>
        <LeftCotainer>
          <Text>제목 / 상품명</Text>
        </LeftCotainer>
        <RightContainer>
          <TextWrapper>
            <Text>작성일</Text>
          </TextWrapper>
          <TextWrapper>
            <Text>답변상태</Text>
          </TextWrapper>
          <EditDeleteContainer />
        </RightContainer>
      </ListHeader>
      {question.map((e, idx) => (
        <MyPageQuestionItem
          key={idx}
          question={e}
          setQuestion={setQuestion}
          setReLoading={setReLoading}
          reLoading={reLoading}
        />
      ))}
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionList;
