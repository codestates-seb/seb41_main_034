import {
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  ItemText,
  MarginSpace,
  ItemLinkText
} from '../../styles/myPageStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { questionDeleteAPI, questionGetAPI } from '../../api/question';
import { useEffect, useState } from 'react';

const MyQuestion = () => {
  const [question, setQuestion] = useState(null);

  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 문의를 삭제하시겠습니까?')) {
      const body = 'questionId';
      questionDeleteAPI(body);
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };

  useEffect(() => {
    const body = 'questionId';
    const data = questionGetAPI(body);
    setQuestion(data);
    console.log(question);
  }, ['question']);

  return (
    <ListHeader2>
      <LeftCotainer2>
        <ItemLinkText aria-label="상품명에 대한 문의보기 버튼입니다.">
          상품명
        </ItemLinkText>
        <MarginSpace />
        <ItemLinkText aria-label="상품명에 대한 문의보기 버튼입니다.">
          상품에 대한 문의합니다..
        </ItemLinkText>
      </LeftCotainer2>
      <RightContainer2>
        <ItemText>2023.1.13</ItemText>
        <ItemText>답변완료</ItemText>
        <CancelIcon onClick={onRemove} alt="문의 삭제 버튼입니다" />
      </RightContainer2>
    </ListHeader2>
  );
};

export default MyQuestion;
