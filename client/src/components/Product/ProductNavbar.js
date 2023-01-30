import {
  ProductNavbarList,
  ProductNavbarItem,
  NavbarItemName,
  NavbarItemCount
} from '../../styles/productStyle';

const ProductNavbar = () => {
  return (
    <ProductNavbarList>
      <ProductNavbarItem>
        <NavbarItemName htmlFor="productInfo">상품정보</NavbarItemName>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName htmlFor="detailInfo">상세정보</NavbarItemName>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName htmlFor="review">
          후기 <NavbarItemCount>(0)</NavbarItemCount>
        </NavbarItemName>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName htmlFor="question">문의</NavbarItemName>
      </ProductNavbarItem>
    </ProductNavbarList>
  );
};

export default ProductNavbar;
