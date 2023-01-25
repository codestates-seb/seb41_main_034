import {
  SortNavbarContainer,
  SortNavbarItem,
  SortNavbarButton
} from '../../styles/productStyle';

const SortNavbar = () => {
  return (
    <SortNavbarContainer>
      <SortNavbarItem>
        <SortNavbarButton>최신순</SortNavbarButton>
      </SortNavbarItem>
      <SortNavbarItem>
        <SortNavbarButton>낮은가격순</SortNavbarButton>
      </SortNavbarItem>
      <SortNavbarItem>
        <SortNavbarButton>높은가격순</SortNavbarButton>
      </SortNavbarItem>
    </SortNavbarContainer>
  );
};

export default SortNavbar;
