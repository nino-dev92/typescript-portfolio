import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="mailto:nnejirichard@yahoo.com" className="headeremail">
        nnejirichard@yahoo.com
      </a>

      <nav className="headera">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;