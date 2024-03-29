import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/blogs">
        Blogs
      </NavLink>
      <NavLink className="navlink" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
