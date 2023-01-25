import {
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  ProductMainImage,
  ProductMainImg
} from '../../styles/productStyle';

const ProductDetail = () => {
  return (
    <ProductDetailContainer>
      <ProductDetailHeader>
        <ProductDetailTitle>상세정보</ProductDetailTitle>
      </ProductDetailHeader>

      <ProductMainImage>
        <ProductMainImg
          img={
            'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
          }
        />
      </ProductMainImage>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
