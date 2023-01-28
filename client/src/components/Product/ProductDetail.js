import {
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  ProductMainImage,
  ProductMainImg,
  TabInput
} from '../../styles/productStyle';

const ProductDetail = ({ product }) => {
  return (
    <ProductDetailContainer>
      <TabInput id="detailInfo" readOnly />
      <ProductDetailHeader>
        <ProductDetailTitle>상세정보</ProductDetailTitle>
      </ProductDetailHeader>

      <ProductMainImage>
        <ProductMainImg img={product.detailImageUrls[0]} />
      </ProductMainImage>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
