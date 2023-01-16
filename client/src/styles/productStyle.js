import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductImageContainer = styled.div`
  width: 100%;
  height: 70%;
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

const ProductContainer = styled.li`
  position: relative;
  width: calc(25% - 12px);

  a {
    display: block;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      ${ProductImage} {
        transform: scale(1.1);
      }

      h3 {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: calc(100% / 3 - 12px);
  }

  @media ${(props) => props.theme.mobile} {
    width: calc(50% - 12px);
  }
`;

const ProductLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
`;

const ProductInfo = styled.div`
  padding-bottom: 100%;
`;

const ProductName = styled.h3`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const ProductPrice = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const ProductReview = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

export {
  ProductContainer,
  ProductLink,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductReview
};
