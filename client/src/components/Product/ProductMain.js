import {
  ProductMainContainer,
  ProductMainImage,
  ProductMainImg,
  Info,
  ProductMainName,
  ProductMainPrice
} from '../../styles/productStyle';

const ProductMain = ({ product }) => {
  return (
    <ProductMainContainer>
      <ProductMainImage>
        <ProductMainImg img={product.imageUrls[0]} />
      </ProductMainImage>

      <Info>
        <ProductMainName>{product.name}</ProductMainName>
        <ProductMainPrice>
          {(product.price || 0).toLocaleString('ko-KR')}원
        </ProductMainPrice>
      </Info>
    </ProductMainContainer>
  );
};

export default ProductMain;
