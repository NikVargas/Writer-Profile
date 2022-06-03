import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import SignIn from "./SignIn";

const App = () => {

  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
