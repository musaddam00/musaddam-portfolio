import "./navbar.css";
import logo from "../../assets/logo_M_clean.svg";
import contactImg from "../../assets/telephone.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="intro" smooth={true} duration={500}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link to="intro" smooth={true} duration={500} spy={true} activeClass="activeLink" className="desktopMenuListItem">
          Home
        </Link>

        <Link to="about" smooth={true} duration={500} spy={true} activeClass="activeLink" className="desktopMenuListItem">
          About
        </Link>

        <Link to="skills" smooth={true} duration={500} spy={true} activeClass="activeLink" className="desktopMenuListItem">
          Skills
        </Link>

        <Link to="projects" smooth={true} duration={500} spy={true} activeClass="activeLink" className="desktopMenuListItem">
          Projects
        </Link>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <button className="desktopMenuBtn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
