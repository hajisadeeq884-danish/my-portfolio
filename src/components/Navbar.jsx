import { useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <a href="#home" className="logo" onClick={closeMenu}>
        <span>&lt;</span>
        YN
        <span>/&gt;</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      <div className="nav-actions">

        <button
          className="theme-button"
          onClick={() => setDarkMode && setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          <Download size={16} />
          Resume
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;