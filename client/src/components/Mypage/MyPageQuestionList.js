import MyPageQuestionItem from './MyPageQuestionItem';
import {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const MyPageQuestionList = () => {
  return (
    <>
      <MyPageHeader title={'나의문의'} />
      <ListHeader>
        <LeftCotainer>
          <Text>제목 / 상품명</Text>
        </LeftCotainer>
        <RightContainer>
          <Text>작성일</Text>
          <Text>답변상태</Text>
          <CancelIcon />
        </RightContainer>
      </ListHeader>
      <MyPageQuestionItem />
      <MyPageQuestionItem />
    </>
  );
};

export default MyPageQuestionList;
