import { useEffect, useState } from 'react';
import { authAPI } from '../../api/customAxios';
import Loading from '../Layout/Loading';
import MyPageHeader from './MyPageHeader';
import MyPageReview from './MyPageReview';
import Pagination from '../Layout/Pagination';

const MyPageReviewList = () => {
  const [userReview, setUserReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const ReviewAPI = async () => {
      try {
        const result = await authAPI.get(
          `/review/review-history?page=${page}&size=10`
        );
        setUserReview(result.data.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    ReviewAPI();
  }, [page]);

  return isLoading ? (
    <>
      <MyPageHeader title={'나의후기'} />
      {userReview.content.map((e, idx) => (
        <MyPageReview userReview={e} key={idx} />
      ))}
      <Pagination total={userReview.totalPages} page={page} setPage={setPage} />
    </>
  ) : (
    <Loading />
  );
};

export default MyPageReviewList;
