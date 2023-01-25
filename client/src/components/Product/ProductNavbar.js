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
        <NavbarItemName>상품정보</NavbarItemName>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName>상세정보</NavbarItemName>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName>후기</NavbarItemName>
        <NavbarItemCount>(0)</NavbarItemCount>
      </ProductNavbarItem>
      <ProductNavbarItem>
        <NavbarItemName>문의</NavbarItemName>
      </ProductNavbarItem>
    </ProductNavbarList>
  );
};

export default ProductNavbar;
