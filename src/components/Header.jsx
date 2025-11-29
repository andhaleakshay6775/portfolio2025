import '../styles/Header.css';
import { Link } from 'react-scroll';

export default function Header() {
  const navOffset = -90; // Adjust based on navbar height

  return (
    <header className="navbar">
      {/* Gradient Logo with glow */}
      <div className="logo">
        <span className="logo-gradient">AA</span>
      </div>

      <div className="rope-container">
        <div className="rope"></div>
        <nav className="nav-links">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={navOffset}
            className="emoji-plate"
          >
            🏠 <span className="menu-name">Home</span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={navOffset}
            className="emoji-plate"
          >
            👤 <span className="menu-name">About</span>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={navOffset}
            className="emoji-plate"
          >
            💻 <span className="menu-name">Skills</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={navOffset}
            className="emoji-plate"
          >
            📂 <span className="menu-name">Projects</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={navOffset}
            className="emoji-plate"
          >
            ✉️ <span className="menu-name">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
