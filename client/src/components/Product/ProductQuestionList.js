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
import Loading from '../Layout/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { authAPI } from '../../api/customAxios';

const ProductQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const Login = localStorage.getItem('userId');

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
    const ItemQuestionAPI = async (productId) => {
      try {
        const result = await authAPI.get(`/product/${productId}/question`);
        setIsLogin(Login);
        setIsLoading(true);
        setQuestion(result.data.data.content.map((el) => el));
      } catch (err) {
        console.log(err);
      }
    };
    ItemQuestionAPI(params.productId);
  }, [Login, isOpenQuestion, params.productId]);

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
        params={params}
      />
    </>
  ) : (
    <Loading />
  );
};

export default ProductQuestionList;
