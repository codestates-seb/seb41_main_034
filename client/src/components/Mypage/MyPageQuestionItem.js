import {
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  ItemText,
  ItemLinkText,
  EditDeleteButton,
  EditDeleteContainer,
  DeleteEditButton,
  ItemText2
} from '../../styles/myPageStyle';
import { useState, useEffect } from 'react';
import Loading from '../Layout/Loading';
import EditQuestionModal from './EditQuestionModal';
import { authAPI } from '../../api/customAxios';
import { useNavigate } from 'react-router-dom';

const MyPageQuestionItem = ({ question }) => {
  const navigate = useNavigate();
  const [itemQuestion, setItemQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const onRemove = async () => {
    if (window.confirm('해당 상품에 대한 문의를 삭제하시겠습니까?')) {
      try {
        await authAPI.delete(`/question/${question.id}`);
        alert('삭제되었습니다.');
        window.location.reload();
      } catch (error) {
        alert(error.response.data.error.message);
      }
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
  }, [question, setIsEdit]);

  return isLoading ? (
    <>
      <ListHeader2>
        <LeftCotainer2>
          <ItemText
            type="button"
            onClick={() => navigate(`/product/${itemQuestion.productId}`)}
          >
            {itemQuestion.productName}
          </ItemText>
          <ItemLinkText>{itemQuestion.body}</ItemLinkText>
        </LeftCotainer2>

        <RightContainer2>
          <ItemText>{date}</ItemText>

          {itemQuestion.answer === null ? (
            <ItemText2>답변대기</ItemText2>
          ) : (
            <ItemText2>답변완료</ItemText2>
          )}
        </RightContainer2>

        <EditDeleteContainer>
          <DeleteEditButton
            type="button"
            onClick={onRemove}
            alt="문의 삭제 버튼입니다"
          >
            삭제
          </DeleteEditButton>
          <EditDeleteButton
            type="button"
            onClick={onEdit}
            alt="문의수정 버튼입니다"
          >
            수정
          </EditDeleteButton>
        </EditDeleteContainer>
      </ListHeader2>

      <EditQuestionModal
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        itemQuestion={itemQuestion}
      />
    </>
  ) : (
    <Loading />
  );
};

export default MyPageQuestionItem;
