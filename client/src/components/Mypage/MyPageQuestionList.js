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
import Pagination from '../Layout/Pagination';

const MyPageQuestionList = () => {
  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const QuestionAPI = async () => {
      try {
        const result = await authAPI.get(
          `/question/question-history?page=${page}&size=10`
        );
        setQuestion(result.data.data);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    QuestionAPI();
  }, [setQuestion, page]);

  return isLoading ? (
    <>
      <MyPageHeader title={'나의문의'} />
      <ListHeader>
        <LeftCotainer>
          <Text>상품명 / 내용</Text>
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

      {question.content.map((el, idx) => (
        <MyPageQuestionItem key={idx} question={el} />
      ))}

      <Pagination total={question.totalPages} page={page} setPage={setPage} />
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionList;
