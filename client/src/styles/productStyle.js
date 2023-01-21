import styled from 'styled-components';

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
  border-radius: 4px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 4px;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
`;

const ProductContainer = styled.li`
  position: relative;
  width: 100%;
  height: auto;
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
    padding: 0;
  }

  @media ${(props) => props.theme.mobile} {
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
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

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

const ProductMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const ProductMainImage = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProductMainImg = styled.div`
  width: 100%;
  height: 0;
  padding-top: calc(928 / 928 * 100%);
  background: url(${(props) => props.img}) center center / cover no-repeat;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 16px;

  @media ${(props) => props.theme.mobile} {
    padding: 0 4px;
  }
`;

const ProductMainName = styled.strong`
  display: block;
  font-size: 24px;

  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
  }
`;

const ProductMainPrice = styled.strong`
  display: block;
  font-size: 30px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

const ProductModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpenOrder ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const ProductModalCancle = styled.div`
  position: absolute;
  right: 16px;
  bottom: 220px;
`;

const ProductNavbarList = styled.ol`
  position: sticky;
  top: 120px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 48px 0;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    margin: 32px 0;
  }
`;

const NavbarItemName = styled.p`
  font-size: 16px;
  transition: color 0.3s;

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const ProductNavbarItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      ${NavbarItemName} {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
`;

const NavbarItemCount = styled.span`
  font-size: 12px;
  margin-left: 4px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const ProductDetailContainer = styled.div`
  width: 100%;
  margin-top: 72px;

  @media ${(props) => props.theme.mobile} {
    margin-top: 56px;
  }
`;

const ProductDetailHeader = styled.div`
  margin-bottom: 24px;
  padding: 0 0 24px 16px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const ProductDetailTitle = styled.h3`
  font-size: 30px;

  @media ${(props) => props.theme.tablet} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 22px;
  }
`;

export {
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  ProductInfoContainer,
  NavbarItemName,
  NavbarItemCount,
  ProductNavbarItem,
  ProductNavbarList,
  ProductModalCancle,
  ProductModalWrapper,
  ProductMainContainer,
  Info,
  ProductMainName,
  ProductMainPrice,
  ProductMainImg,
  ProductMainImage,
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
