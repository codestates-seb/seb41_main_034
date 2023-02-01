import {
  PaginationContainer,
  PageButtonContainer,
  PageButton
} from '../../styles/layoutStyle';

const Pagination = ({ total, page, setPage }) => {
  return (
    <PaginationContainer>
      <PageButton
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        &lt;
      </PageButton>
      <PageButtonContainer>
        {Array(total)
          .fill()
          .map((el, idx) => (
            <PageButton
              key={idx}
              onClick={() => setPage(idx)}
              aria-current={page === idx ? 'page' : null}
            >
              {idx + 1}
            </PageButton>
          ))}
      </PageButtonContainer>
      <PageButton
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={page === total - 1}
      >
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
