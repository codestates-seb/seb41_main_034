import MyPageQuestionItem from './MyPageQuestionItem';
import {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text,
  TextWrapper
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState, useEffect } from 'react';
import { questionGetAPI } from '../../api/question';
import Loading from '../Layout/Loading';

const MyPageQuestionList = () => {
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const API = async () => {
      const data = await questionGetAPI();
      setQuestion(data.data.content);
      setIsLoading(true);
    };
    API();
  }, []);

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
          <CancelIcon />
        </RightContainer>
      </ListHeader>
      {question.map((e, idx) => (
        <MyPageQuestionItem key={idx} question={e} />
      ))}
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionList;
