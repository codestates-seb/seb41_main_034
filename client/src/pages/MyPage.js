import { Routes, Route } from 'react-router-dom';
import MyPageNav from '../components/MyPage/MyPageNav';
import UserInfo from '../components/MyPage/UserInfo';
import MyPageAddressList from '../components/MyPage/MyPageAddressList';
import UserInfoEdit from '../components/MyPage/UserInfoEdit';
import MyPageOrderList from '../components/MyPage/MyPageOrderList';
import MyPageReviewList from '../components/MyPage/MyPageReviewList';
import MyPageQuestionList from '../components/MyPage/MyPageQuestionList';
import {
  MyPageContainer,
  MyPageNavbar,
  MyPageContent
} from '../styles/myPageStyle';
import UserInfoConfirmPW from '../components/MyPage/UserInfoConfirmPW';

const MyPage = () => {
  return (
    <MyPageContainer>
      <MyPageNavbar>
        <MyPageNav />
      </MyPageNavbar>

      <MyPageContent>
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/address" element={<MyPageAddressList />} />
          <Route path="/edit" element={<UserInfoEdit />} />
          <Route path="/confirmpw" element={<UserInfoConfirmPW />} />
          <Route path="/order" element={<MyPageOrderList />} />
          <Route path="/review" element={<MyPageReviewList />} />
          <Route path="/question" element={<MyPageQuestionList />} />
        </Routes>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
