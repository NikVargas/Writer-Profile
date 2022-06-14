import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import SignIn from "./Header/SignIn"
import Blog from "./Header/Blog"
import LogIn from "./Header/LogIn";
import HelpCenter from "./Header/Help-Center";
import Store from "./Header/Store";
import TeacherAccount from "./Teachers/TeacherAccount";
import Footer from "./Footer";
import styled from "styled-components";
import GroupPage from "./Groups/GroupPage";
import TextDoc from "./Texts/TextDoc";
import StudentProfile from "./Students/StudentProfile";


const App = () => {
  return (
    <Div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/store" element={<Store />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/teachers/:teacherId" element={<TeacherAccount />} />
          <Route path="/groups/:groupId" element={<GroupPage />} />
          <Route path="/students/:studentId" element={<StudentProfile />} />
          <Route path="texts/:textId" element={<TextDoc />} />
          <Route path="students/:stidentId/texts/:textId" element={<TextDoc />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
`;
export default App;
