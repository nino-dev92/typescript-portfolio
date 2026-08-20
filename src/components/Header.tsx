import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="flex justify-between p-2 md:p-4">
      <a
        href="mailto:nnejirichard@yahoo.com"
        target="_blank"
        className="text-sm md:text-lg"
      >
        nnejirichard@yahoo.com
      </a>

      <nav className="headera">
        <NavLink to="/" className="text-sm md:text-lg">
          Home
        </NavLink>
        <NavLink to="/contact" className="text-sm md:text-lg">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
