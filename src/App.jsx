import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Page/Blogs";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Error from "./Page/Error";
import Navbar from "./Page/component/Navbar";
import Blog from "./Page/Blog";
import User from "./Page/User";
import Userq from "./Userq";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:title" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route path="userq/" element={<Userq />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
