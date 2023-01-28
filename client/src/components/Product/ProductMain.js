import {
  ProductMainContainer,
  ProductMainImage,
  ProductMainImg,
  Info,
  ProductMainName,
  ProductMainPrice
} from '../../styles/productStyle';

const ProductMain = () => {
  return (
    <ProductMainContainer>
      <ProductMainImage>
        <ProductMainImg
          img={
            'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
          }
        />
      </ProductMainImage>

      <Info>
        <ProductMainName>사과</ProductMainName>
        <ProductMainPrice>{(1000).toLocaleString('ko-KR')}원</ProductMainPrice>
      </Info>
    </ProductMainContainer>
  );
};

export default ProductMain;
