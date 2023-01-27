import {
  ReviewListContainer,
  QuestionButton,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  TabInput
} from '../../styles/productStyle';
import ProductQuestionItem from './ProductQuestionItem';
import { useState, useEffect } from 'react';
import QuestionModal from './QuestionModal';
import { itemQuestionGetAPI } from '../../api/question';
import Loading from '../Layout/Loading';

const ProductQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionOpen = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };

  useEffect(() => {
    const API = async () => {
      const data = await itemQuestionGetAPI(0, 1);
      setQuestion(data.data.content.map((el) => el));
      setIsLoading(true);
    };
    API();
  }, [isOpenQuestion]);

  return isLoading ? (
    <>
      <ProductDetailContainer>
        <TabInput id="question" readOnly />
        <ProductDetailHeader>
          <ProductDetailTitle>문의</ProductDetailTitle>
          <QuestionButton type="button" onClick={handleQuestionOpen}>
            문의하기
          </QuestionButton>
        </ProductDetailHeader>
        <ReviewListContainer>
          {question.map((e, idx) => (
            <ProductQuestionItem key={idx} question={e} />
          ))}
        </ReviewListContainer>
      </ProductDetailContainer>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
        question={question}
        setQuestion={setQuestion}
      />
    </>
  ) : (
    <Loading />
  );
};

export default ProductQuestionList;
