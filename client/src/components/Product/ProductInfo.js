import {
  ProductInfoContainer,
  ProductMainImage,
  ProductMainImg
} from '../../styles/productStyle';

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      {[1, 2, 3, 4].map((el, idx) => {
        return (
          <ProductMainImage key={idx}>
            <ProductMainImg
              img={
                'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
              }
            />
          </ProductMainImage>
        );
      })}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
