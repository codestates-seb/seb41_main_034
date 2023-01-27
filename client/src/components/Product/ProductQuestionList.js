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
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const Login = useSelector((state) => state.user.dbId);

  const handleQuestionOpen = () => {
    if (isLogin === '') {
      if (
        window.confirm(
          '로그인하셔야 본 서비스를 이용하실 수 있습니다.\n로그인페이지로 이동하시겠습니까?'
        )
      ) {
        navigate(`/login`);
      } else {
        alert('취소했습니다.');
      }
    } else {
      setIsOpenQuestion(!isOpenQuestion);
    }
  };

  useEffect(() => {
    const API = async () => {
      const data = await itemQuestionGetAPI(params.productId);
      setIsLogin(Login);
      setQuestion(data.data.content.map((el) => el));
      setIsLoading(true);
    };
    API();
  }, [Login, isOpenQuestion, params.productId]);

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
          {question.map((e, idx) => (
            <ProductQuestionItem key={idx} question={e} />
          ))}
        </ReviewListContainer>
      </ProductDetailContainer>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
        params={params}
      />
    </>
  ) : (
    <Loading />
  );
};

export default ProductQuestionList;
