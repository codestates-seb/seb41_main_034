import {
  SortNavbarContainer,
  SortNavbarItem,
  SortNavbarButton,
  ActiveSortButton
} from '../../styles/productStyle';

const SortNavbar = ({ sort, setSort }) => {
  return (
    <SortNavbarContainer>
      <SortNavbarItem>
        {sort === '' ? (
          <ActiveSortButton
            onClick={() => {
              setSort('');
              localStorage.sort = '';
            }}
          >
            최신순
          </ActiveSortButton>
        ) : (
          <SortNavbarButton
            onClick={() => {
              setSort('');
              localStorage.sort = '';
            }}
          >
            최신순
          </SortNavbarButton>
        )}
      </SortNavbarItem>
      <SortNavbarItem>
        {sort === 'sold,desc' ? (
          <ActiveSortButton
            onClick={() => {
              setSort('sold,desc');
              localStorage.sort = 'sold,desc';
            }}
          >
            판매량순
          </ActiveSortButton>
        ) : (
          <SortNavbarButton
            onClick={() => {
              setSort('sold,desc');
              localStorage.sort = 'sold,desc';
            }}
          >
            판매량순
          </SortNavbarButton>
        )}
      </SortNavbarItem>
      <SortNavbarItem>
        {sort === 'price,asc' ? (
          <ActiveSortButton
            onClick={() => {
              setSort('price,asc');
              localStorage.sort = 'price,asc';
            }}
          >
            낮은가격순
          </ActiveSortButton>
        ) : (
          <SortNavbarButton
            onClick={() => {
              setSort('price,asc');
              localStorage.sort = 'price,asc';
            }}
          >
            낮은가격순
          </SortNavbarButton>
        )}
      </SortNavbarItem>
      <SortNavbarItem>
        {sort === 'price,desc' ? (
          <ActiveSortButton
            onClick={() => {
              setSort('price,desc');
              localStorage.sort = 'price,desc';
            }}
          >
            높은가격순
          </ActiveSortButton>
        ) : (
          <SortNavbarButton
            onClick={() => {
              setSort('price,desc');
              localStorage.sort = 'price,desc';
            }}
          >
            높은가격순
          </SortNavbarButton>
        )}
      </SortNavbarItem>
    </SortNavbarContainer>
  );
};

export default SortNavbar;
