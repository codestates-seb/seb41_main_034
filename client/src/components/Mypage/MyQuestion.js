import {
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  Text2,
  MarginSpace
} from '../../styles/myPageStyle';

const MyQuestion = () => {
  return (
    <ListHeader2>
      <LeftCotainer2>
        <Text2>상품명</Text2>
        <MarginSpace />
        <Text2>상품에 대한 문의합니다..</Text2>
      </LeftCotainer2>
      <RightContainer2>
        <Text2>2023.1.13</Text2>
        <Text2>답변완료</Text2>
      </RightContainer2>
    </ListHeader2>
  );
};

export default MyQuestion;
