import styled from 'styled-components';

const ProductImageContainer = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 4px;
  border-radius: 4px;
  overflow: hidden;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: transform 0.3s;
`;

const CartButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.primaryColor};
  opacity: 0.6;

  svg {
    position: relative;
    left: -2px;

    g {
      g {
        stroke: ${(props) => props.theme.whiteColor};
      }
    }
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: 16px;
`;

const ProductContainer = styled.li`
  position: relative;
  width: calc(25% - 4px);
  height: 300px;
  padding: 8px;
  border-radius: 4px;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      border: 1px solid ${(props) => props.theme.borderColor};

      ${ProductImage} {
        transform: scale(1.1);
      }

      h3 {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: calc(100% / 3 - 8px);
    height: 280px;
    padding: 0;
  }

  @media ${(props) => props.theme.mobile} {
    width: calc(50% - 8px);
    height: 180px;
    padding: 0;
  }
`;

const ProductInfo = styled.div`
  margin-top: 8px;
`;

const ProductName = styled.h3`
  margin-bottom: 4px;
  font-size: 14px;
  transition: color 0.3s;
`;

const ProductPrice = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
`;

const ProductReview = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ListContainer = styled.div`
  width: 100%;
`;

const TitleText = styled.div`
  width: 100%;
  margin: 73px 0 0 16px;
  font-size: 30px;

  @media ${(props) => props.theme.tablet} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 56px 0 0 4px;
    font-size: 22px;
  }
`;

const SubTitleText = styled.div`
  margin: 22px 0 21px 16px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
    margin: 12px 0 12px 4px;
    font-size: 8px;
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 16px 0 16px 0;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    justify-content: flex-end;
  }
`;

const QuestionButton = styled.button`
  display: flex;
  width: 131px;
  height: 43px;
  margin-right: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      transition: 0.5s;
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 72px;
    height: 24px;
    margin: 0 16px 8px 0;
    font-size: 8px;
  }
`;
//ItemQuestion
const FlexContainer2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  align-items: center;
`;

const QAText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};
  margin: 8px 8px 8px 0;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ItemText = styled.div`
  margin: 8px 8px 0 8px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerText = styled.div`
  margin: 20px 0 20px 24px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerBox = styled.div`
  padding: 2px 4px 2px 4px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  font-size: 8px;

  @media ${(props) => props.theme.tablet} {
    font-size: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1px;
    font-size: 10px !important;
    zoom: 0.8;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpenQuestion ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 97;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 425px;
  padding: 24px 48px 48px 48px;
  margin-top: 24px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  transition: transform 0.5s;
  transform: translate(-50%, -50%)
    ${(props) => (props.isOpenQuestion ? 'translateY(0)' : 'translateY(-200%)')};
  z-index: 98;

  @media ${(props) => props.theme.mobile} {
    padding: 12px 24px 24px 24px;
  }
`;

const MiddleText = styled.div`
  display: flex;
  margin: 4px 0 28px 0;
  justify-content: center;
  font-size: 28px;

  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LeftText = styled.label`
  width: 100%;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SmallInput = styled.input`
  width: 100%;
  margin: 16px 0 32px 0;
  padding: 4px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    margin: 12px 0 20px 0;
    font-size: 8px;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const BigInput = styled.textarea`
  width: 100%;
  padding: 4px 4px 208px 4px;
  margin: 16px 0 32px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-left: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  resize: none;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    margin: 12px 0 20px 0;
    font-size: 8px;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const CompletButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    padding: 8px 0 8px 0;
    font-size: 8px;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: background-color 0.5s;
  }
`;

const CancleImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  svg {
    fill: black;
  }
`;

const ReviewContainer = styled.div`
  width: 520px;
  height: 1205px;
  margin: auto;
  background-color: red;
`;

const ReviewHeader = styled.div`
  font-size: 50px;
`;

const ReviewText = styled.div`
  font-size: 20px;
`;

const ProductWrapper = styled.div`
  display: block;

  @media ${(props) => props.theme.desktop} {
    display: flex;
    width: 100%;
    gap: 20px;
  }
`;

const ProductContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const ProductOrder = styled.div`
  display: none;

  @media ${(props) => props.theme.desktop} {
    display: block;
    width: 100%;
    max-width: 320px;
    flex-shrink: 0;
  }
`;

const ProductButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 8px;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

export {
  ProductContainer,
  ProductList,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductReview,
  QuestionButton,
  FlexContainer,
  QuestionContainer,
  SubTitleText,
  TitleText,
  ListContainer,
  ListWrapper,
  FlexContainer2,
  QAText,
  ItemText,
  AnswerText,
  AnswerBox,
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  ModalContainer,
  ModalWrapper,
  CancleImgContainer,
  ReviewContainer,
  ReviewHeader,
  ReviewText,
  CartButton,
  ProductContent,
  ProductOrder,
  ProductWrapper,
  ProductButtonContainer
};
