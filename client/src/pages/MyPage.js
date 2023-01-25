import { Routes, Route } from 'react-router-dom';
import MyPageNav from '../components/MyPage/MyPageNav';
import UserInfo from '../components/MyPage/UserInfo';
import MyPageAddress from '../components/MyPage/MyPageAddress';
import UserInfoEdit from '../components/MyPage/UserInfoEdit';
import MyPageOrderList from '../components/MyPage/MyPageOrderList';
import MyPageReview from '../components/MyPage/MyPageReview';
import MyPageQuestionList from '../components/MyPage/MyPageQuestionList';
import {
  MyPageContainer,
  MyPageNavbar,
  MyPageContent
} from '../styles/myPageStyle';

const MyPage = () => {
  return (
    <MyPageContainer>
      <MyPageNavbar>
        <UserInfo />
        <MyPageNav />
      </MyPageNavbar>

      <MyPageContent>
        <Routes>
          <Route path="/" element={<MyPageAddress />} />
          <Route path="/edit" element={<UserInfoEdit />} />
          <Route path="/orderlist" element={<MyPageOrderList />} />
          <Route path="/review" element={<MyPageReview />} />
          <Route path="/question" element={<MyPageQuestionList />} />
        </Routes>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
