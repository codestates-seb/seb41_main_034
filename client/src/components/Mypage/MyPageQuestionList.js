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
import Loading from '../Layout/Loading';
import { authAPI } from '../../api/customAxios';

const MyPageQuestionList = () => {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const QuestionAPI = async () => {
      try {
        const result = await authAPI.get(`/question/question-history`);
        setQuestion(result.data.data.content.map((el) => el));
      } catch (err) {
        console.log(err);
      }
    };
    setIsLoading(true);
    QuestionAPI();
  }, [setQuestion]);

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
        <MyPageQuestionItem key={idx} question={e} setQuestion={setQuestion} />
      ))}
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionList;
