import {
  ProductInfoContainer,
  ProductInfoImage,
  ProductInfoImg,
  Info,
  ProductInfoName,
  ProductInfoPrice
} from '../../styles/productStyle';

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductInfoImage>
        <ProductInfoImg
          img={
            'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
          }
        />
      </ProductInfoImage>
      <Info>
        <ProductInfoName>사과</ProductInfoName>
        <ProductInfoPrice>{(12000).toLocaleString('ko-KR')}원</ProductInfoPrice>
      </Info>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
