import { useEffect, useState } from 'react';
import { authAPI } from '../../api/customAxios';
import Loading from '../Layout/Loading';
import MyPageHeader from './MyPageHeader';
import MyPageReview from './MyPageReview';

const MyPageReviewList = () => {
  const [userReview, setUserReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ReviewAPI = async () => {
      try {
        const result = await authAPI.get(`/review/review-history`);
        setUserReview(result.data.data.content);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    ReviewAPI();
  }, []);

  return isLoading ? (
    <>
      <MyPageHeader title={'나의후기'} />
      {userReview.map((e, idx) => (
        <MyPageReview userReview={e} key={idx} />
      ))}
    </>
  ) : (
    <Loading />
  );
};

export default MyPageReviewList;
