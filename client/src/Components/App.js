import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Blog from "./Blog";
import LogIn from "./LogIn";
import HelpCenter from "./Help-Center";
import Store from "./Store";
import TeacherAccount from "./TeacherAccount";


const App = () => {

  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/store" element={<Store />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/teacher-name" element={<TeacherAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
