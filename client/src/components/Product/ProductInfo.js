import {
  ProductInfoContainer,
  ProductMainImage,
  ProductMainImg,
  TabInput
} from '../../styles/productStyle';

const ProductInfo = ({ product }) => {
  return (
    <ProductInfoContainer>
      <TabInput id="productInfo" readOnly />
      {[product.imageUrls[1], product.imageUrls[2], product.imageUrls[3]].map(
        (el, idx) => {
          return (
            <ProductMainImage key={idx}>
              <ProductMainImg img={el} />
            </ProductMainImage>
          );
        }
      )}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
