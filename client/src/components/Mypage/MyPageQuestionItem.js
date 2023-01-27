import {
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  ItemText,
  MarginSpace,
  ItemLinkText
} from '../../styles/myPageStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { questionDeleteAPI } from '../../api/question';
import { useState, useEffect } from 'react';
import Loading from '../Layout/Loading';
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg';
import EditQuestionModal from './EditQuestionModal';

const MyPageQuestionItem = ({ question }) => {
  const [itemQuestion, setItemQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 문의를 삭제하시겠습니까?')) {
      const body = question.id;
      questionDeleteAPI('1', body);
      window.location.reload();
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    const QuestionAPI = async () => {
      setItemQuestion(question);
      setIsLoading(true);
      const dater = new Date(question.createdAt).toLocaleDateString();
      setDate(dater);
    };
    QuestionAPI();
  }, [question]);

  return isLoading ? (
    <>
      <ListHeader2>
        <LeftCotainer2>
          <ItemLinkText aria-label="상품명에 대한 문의보기 버튼입니다.">
            {itemQuestion.productName}
          </ItemLinkText>
          <MarginSpace />
          <ItemLinkText aria-label="상품명에 대한 문의보기 버튼입니다.">
            {itemQuestion.body}
          </ItemLinkText>
        </LeftCotainer2>
        <RightContainer2>
          <ItemText>{date}</ItemText>
          {itemQuestion.answer === null ? (
            <ItemText>답변대기</ItemText>
          ) : (
            <ItemText>답변완료</ItemText>
          )}
          <EditIcon onClick={onEdit} alt="문의수정 버튼입니다" />
          <CancelIcon onClick={onRemove} alt="문의 삭제 버튼입니다" />
        </RightContainer2>
      </ListHeader2>

      <EditQuestionModal isEdit={isEdit} setIsEdit={setIsEdit} />
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionItem;
