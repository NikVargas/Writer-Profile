import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Blog from "./Blog";
import LogIn from "./LogIn";
import HelpCenter from "./Help-Center";
import Store from "./Store";
import TeacherAccount from "./TeacherAccount";
import Footer from "./Footer";
import styled from "styled-components";
import GroupPage from "./GroupPage";
import StudentPage from "./StudentPage";
import TextHelper from "./TextHelper";



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
          <Route path="/students/:studentId" element={<StudentPage />} />
          <Route path="/:textId" element={<TextHelper />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Div>
  );
}


const Div = styled.div`
height: 100vh;
`;
export default App;
