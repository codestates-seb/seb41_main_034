import {
  ReviewListContainer,
  QuestionButton,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle
} from '../../styles/productStyle';
import ProductQuestionItem from './ProductQuestionItem';
import { useState } from 'react';
import QuestionModal from './QuestionModal';
// import { questionAPI } from '../../api/question';

const ProductQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  // const [Question, setQuestion] = useState(null);

  const handleQuestionOpen = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };

  // useEffect(() => {
  //   setQuestion(questionAPI)
  // }, [Question,setQuestion])

  return (
    <>
      <ProductDetailContainer>
        <ProductDetailHeader>
          <ProductDetailTitle>문의</ProductDetailTitle>
          <QuestionButton type="button" onClick={handleQuestionOpen}>
            문의하기
          </QuestionButton>
        </ProductDetailHeader>

        <ReviewListContainer>
          <ProductQuestionItem />
          <ProductQuestionItem />
        </ReviewListContainer>
      </ProductDetailContainer>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
      />
    </>
  );
};

export default ProductQuestionList;
