import {
  ReviewListContainer,
  QuestionButton,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle
} from '../../styles/productStyle';
import ProductQuestionItem from './ProductQuestionItem';
import { useState, useEffect } from 'react';
import QuestionModal from './QuestionModal';
import { itemQuestionGetAPI } from '../../api/question';
import Loading from '../Layout/Loading';

const ProductQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [Question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionOpen = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };

  useEffect(() => {
    const API = async () => {
      const data = await itemQuestionGetAPI(0, 1);
      setQuestion(data.data.content);
      setIsLoading(true);
    };
    API();
  }, []);

  // console.log(Question);

  return isLoading ? (
    <>
      <ProductDetailContainer>
        <ProductDetailHeader>
          <ProductDetailTitle>문의</ProductDetailTitle>
          <QuestionButton type="button" onClick={handleQuestionOpen}>
            문의하기
          </QuestionButton>
        </ProductDetailHeader>
        <ReviewListContainer>
          {Question.map((e, idx) => (
            <ProductQuestionItem key={idx} question={e} />
          ))}
        </ReviewListContainer>
      </ProductDetailContainer>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
        question={Question}
      />
    </>
  ) : (
    <Loading />
  );
};

export default ProductQuestionList;
