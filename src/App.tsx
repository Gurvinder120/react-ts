import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./component/nav";
import Blogs from "./component/blogs";
import Main from "./component/main";
import Blog1 from "./component/blogs/blog1";
import Blog2 from "./component/blogs/blog2";
import Blog3 from "./component/blogs/blog3";
import Blog4 from "./component/blogs/blog4";
import Blog5 from "./component/blogs/blog5";
import Footer from "./component/footer";
import Contact from "./component/contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Blogs />
            </>
          }
        />

        <Route path="blogs/blog1" element={<Blog1 />} />
        <Route path="blogs/blog2" element={<Blog2 />} />
        <Route path="blogs/blog3" element={<Blog3 />} />
        <Route path="blogs/blog4" element={<Blog4 />} />
        <Route path="blogs/blog5" element={<Blog5 />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
